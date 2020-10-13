import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import ReactMarkdown from 'react-markdown'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import NoVoteIcon from '@material-ui/icons/HelpOutline'

const ProposalVotes = ({ alphaContract, address, proposal }) => {
  const [receipt, setReceipt] = useState(null)

  const id = proposal.returnValues['0']

  useEffect(() => {
    const getVotes = async () => {
      const result = await alphaContract.methods.getReceipt(id, address).call()
      console.log('Voted', result)
      setReceipt(result)
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
            Voted for this proposal
          </>
        }
        else {
          content = <>
            <ThumbDownIcon fontSize="inherit" className="spacingright" />
            Voted against this proposal
          </>
        }
      }
      else {
        content = <>
          <NoVoteIcon fontSize="inherit" className="spacingright" />
          Hasn't voted for this proposal
        </>
      }

      return <div className="addressdiv">
        {content}
      </div>
    }
  }

  return <Paper variant="outlined" className="innerdiv relative">
    <ReactMarkdown plugins={require('strip-markdown')}>{proposal.returnValues.description.split('\n')[0]}</ReactMarkdown>
    {getVoteStatusElement()}
  </Paper>
}

export default ProposalVotes
