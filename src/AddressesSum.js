import React from 'react'
import Paper from '@material-ui/core/Paper'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import { getDelegatesString } from './utils'

const AddressesSum = ({ delegates }) => {

  const canApproveProposal = (delegates) => {
    return delegates > 4 * Math.pow(10, 25)
  }

  const canApprove = canApproveProposal(delegates)

  const getApproveIconElement = () => {
    if(canApprove) {
      return <ThumbUpIcon fontSize="inherit" className="spacingright" />
    }
    else {
      return <ThumbDownIcon fontSize="inherit" className="spacingright" />
    }
  }

  return <Paper variant="outlined" className="innerdiv centerflex">
    {getApproveIconElement()}
    The addresses below sum up to {getDelegatesString(delegates)} delegates and
    {canApproveProposal(delegates) ? ' can approve a proposal' : ' can not approve a proposal'}
  </Paper>
}

export default AddressesSum
