import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import Tooltip from '@material-ui/core/Tooltip'
import ExternalLinkIcon from '@material-ui/icons/Launch'
import LinearProgress from '@material-ui/core/LinearProgress'
import LinkIcon from '@material-ui/icons/Link'
import { getDelegatesString } from './utils'
import Grid from '@material-ui/core/Grid'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
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


const Proposal = ({ alphaContract, proposal }) => {
  const [yes, setYes] = useState(0)
  const [no, setNo] = useState(0)
  const id = proposal.returnValues.id

  useEffect(() => {
    const getVotes = async () => {
      const result = await alphaContract.methods.proposals(id).call()
      console.log('Votes', result)
      setYes(parseInt(result.forVotes))
      setNo(parseInt(result.againstVotes))
    }

    getVotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        <ReactMarkdown>{proposal.returnValues.description}</ReactMarkdown>
      </Grid>
    </Grid>
  </Paper>
}

export default Proposal
