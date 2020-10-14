import React, { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import LinkIcon from '@material-ui/icons/Link'
import { Tooltip } from '@material-ui/core'
import { Link } from 'react-router-dom'

const ProposalVotesShort = ({ alphaContract, address, proposal }) => {
  const [receipt, setReceipt] = useState(null)

  const id = proposal.returnValues.id

  useEffect(() => {
    const getVotes = async () => {
      const result = await alphaContract.methods.getReceipt(id, address.address).call()
      console.log('Voted', result)
      setReceipt(result)
    }

    getVotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getBestName = address => {
    if(address.alias !== '<Unknown>') {
      return address.alias
    }

    return address.address
  }

  const getVoteStatusElement = () => {
    if (receipt) {
      let content

      if (receipt.hasVoted) {
        if (receipt.support) {
          content = <>
            <ThumbUpIcon fontSize="inherit" className="spacingright" />
            <Tooltip title="Permalink"><Link to={`/address/${address.address}`}>{getBestName(address)} <LinkIcon fontSize="inherit" /></Link></Tooltip> supports this proposal
          </>
        }
        else {
          content = <>
            <ThumbDownIcon fontSize="inherit" className="spacingright" />
            <Tooltip title="Permalink"><Link to={`/address/${address.address}`}>{getBestName(address)} <LinkIcon fontSize="inherit" /></Link></Tooltip> is against this proposal
          </>
        }
      }

      return <span className="spacingright">{content}</span>
    }
  }

  if (receipt && receipt.hasVoted) {
    return <Paper variant="outlined" className="innerdiv relative">
      <div className="addressdiv">
        {getVoteStatusElement()}
      </div>
    </Paper>
  }
  else {
    return null
  }
}

export default ProposalVotesShort
