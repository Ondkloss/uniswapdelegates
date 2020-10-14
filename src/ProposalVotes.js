import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import NoVoteIcon from '@material-ui/icons/HelpOutline'
import ExternalLinkIcon from '@material-ui/icons/Launch'
import LinkIcon from '@material-ui/icons/Link'
import Tooltip from '@material-ui/core/Tooltip'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { getDelegatesString } from './utils'
import { Link } from 'react-router-dom'

const greenTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#006600'
    },
    secondary: {
      main: '#ccffcc'
    }
  }
})

const redTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#990000'
    },
    secondary: {
      main: '#ffcccc'
    }
  }
})

const ProposalVotes = ({ alphaContract, address, proposal }) => {
  const [receipt, setReceipt] = useState(null)
  const [yes, setYes] = useState(0)
  const [no, setNo] = useState(0)

  const id = proposal.returnValues.id

  useEffect(() => {
    const getVotes = async () => {
      const result = await alphaContract.methods.getReceipt(id, address).call()
      console.log('Voted', result)
      setReceipt(result)

      const result2 = await alphaContract.methods.proposals(id).call()
      console.log('Votes', result2)
      setYes(parseInt(result2.forVotes))
      setNo(parseInt(result2.againstVotes))
    }

    getVotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getVoteStatusElement = () => {
    if (receipt) {
      let content

      if (receipt.hasVoted) {
        if (receipt.support) {
          content = <>
            <ThumbUpIcon fontSize="inherit" className="spacingright" />
            Supports this proposal
          </>
        }
        else {
          content = <>
            <ThumbDownIcon fontSize="inherit" className="spacingright" />
            Is against this proposal
          </>
        }
      }
      else {
        content = <>
          <NoVoteIcon fontSize="inherit" className="spacingright" />
          Hasn't voted on this proposal
        </>
      }

      return <span className="spacingright">{content}</span>
    }
  }

  const getProgress = value => {
    console.log('votes', value, value / (4 * Math.pow(10, 25) * 100))
    return value / (4 * Math.pow(10, 25)) * 100
  }

  const getLinearProgress = (theme, value) => {
    return <MuiThemeProvider theme={theme}><LinearProgress variant="determinate" value={value} /></MuiThemeProvider>
  }

  return <Paper variant="outlined" className="innerdiv relative">
    <Grid container>
      <Grid item xs={4}>
        <div className="addressdiv">
          <Tooltip title="Permalink"><Link to={`/proposal/${id}`}>Proposal #{id} <LinkIcon fontSize="inherit" /></Link></Tooltip>
          <Tooltip title="Uniswap voting"><a href={`https://app.uniswap.org/#/vote/${id}`}><ExternalLinkIcon fontSize="inherit" className="spacingleft" /></a></Tooltip>
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="addressdiv">For ({getDelegatesString(yes)}, {getProgress(yes).toFixed(0)}%):</div>
      </Grid>
      <Grid item xs={4}>
        <div className="addressdiv">Against ({getDelegatesString(no)}, {getProgress(no).toFixed(0)}%):</div>
      </Grid>
      <Grid item xs={4}>
        <div className="addressdiv"></div>
      </Grid>
      <Grid item xs={4}>
        <div className="addressdiv">{getLinearProgress(greenTheme, getProgress(yes))}</div>
      </Grid>
      <Grid item xs={4}>
        <div className="addressdiv">{getLinearProgress(redTheme, getProgress(no))}</div>
      </Grid>
      <Grid item xs={12}>
        <ReactMarkdown plugins={[require('strip-markdown')]}>{proposal.returnValues.description.split('\n')[0]}</ReactMarkdown>
      </Grid>
    </Grid>
    <div className="addressdiv">
      {getVoteStatusElement()}
    </div>
  </Paper>
}

export default ProposalVotes
