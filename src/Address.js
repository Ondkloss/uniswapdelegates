import React from 'react'
import Web3 from 'web3'
import Paper from '@material-ui/core/Paper'
import ExternalLinkIcon from '@material-ui/icons/Launch'
import CopyIcon from '@material-ui/icons/FileCopy'
import LinkIcon from '@material-ui/icons/Link'
import DoneIcon from '@material-ui/icons/Done'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import DelegateIcon from '@material-ui/icons/HowToVote'
import './App.css'
import { getDelegatesString, copyToClipboard, isAddress } from './utils'
import Proposal from './Proposal'

function Address({ address, from, proposals, contract, alphaContract, showSnackbar, showProposals }) {
  const valid = isAddress(address.address)

  const delegate = async () => {
    await contract.methods.delegate(address.address).send({ from })
  }

  const getAliasElement = () => {
    if (address.link) {
      return <div className="addressdiv">Alias: <Tooltip title="Alias source"><a href={address.link}>{address.alias} <ExternalLinkIcon fontSize="inherit" /></a></Tooltip></div>
    }
    else {
      return <div className="addressdiv">Alias: {address.alias}</div>
    }
  }

  const handleCopyClick = ev => {
    copyToClipboard(address.address)
    showSnackbar()
  }

  const getSendProposalElement = () => {
    if (address.delegates > Math.pow(10, 25)) {
      return <Tooltip title="Can submit proposals"><DoneIcon fontSize="inherit" /></Tooltip>
    }
  }

  const getApproveProposalElement = () => {
    if (address.delegates > Math.pow(40, 25)) {
      return <Tooltip title="Can approve proposal"><DoneAllIcon fontSize="inherit" /></Tooltip>
    }
  }

  const getDelegateElement = () => {
    if (from && Web3.givenProvider) {
      return <Tooltip title="Delegate my votes to this address"><Button variant="outlined" size="small" color="primary" onClick={delegate} startIcon={<DelegateIcon fontSize="inherit" color="primary" />}>Delegate</Button></Tooltip>
    }
  }

  const getProposalsElement = () => {
    if (showProposals) {
      return proposals.map(p => <Proposal key={p.id} alphaContract={alphaContract} proposal={p} />)
    }
  }

  if (valid) {
    return <>
      <Paper variant="outlined" className="innerdiv relative">
        {getAliasElement()}
        <div className="addressdiv">
          Address: <Tooltip title="Permalink"><Link to={`/address/${address.address}`}>{address.address} <LinkIcon fontSize="inherit" /></Link></Tooltip>
          <Tooltip title="Etherscan"><a href={`https://etherscan.io/address/${address.address}`}><ExternalLinkIcon fontSize="inherit" className="spacingleft" /></a></Tooltip>
          <Tooltip title="Copy to clipboard"><CopyIcon onClick={handleCopyClick} fontSize="inherit" className="spacingleft pointer" /></Tooltip>
        </div>
        <div className="addressdiv">Delegates: {getDelegatesString(address.delegates)} {getSendProposalElement()} {getApproveProposalElement()}
          {getDelegateElement()}
        </div>
      </Paper>
      {getProposalsElement()}
    </>
  }
  else {
    return <Paper variant="outlined" className="innerdiv">
      Input {address.address} is not a valid address.
    </Paper>
  }
}

export default Address
