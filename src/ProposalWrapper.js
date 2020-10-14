import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Proposal from './Proposal'
import ProposalVotesShort from './ProposalVotesShort'
import Paper from '@material-ui/core/Paper'
import Store from './store.json'

const ProposalWrapper = ({ alphaContract }) => {
  const { proposal } = useParams()

  const [proposals, setProposals] = useState([])

  useEffect(() => {
    const getProposals = async () => {
      await alphaContract.getPastEvents('ProposalCreated', {
        fromBlock: 0,
        toBlock: 'latest'
      }).then(r => {
        console.log('Proposals', r)
        setProposals(r)
      })
    }

    getProposals()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getVotesElement = currentProposal => {
    return Store.addresses.map(a => <ProposalVotesShort key={a.address} alphaContract={alphaContract} proposal={currentProposal} address={a} showAddress={true} />)
  }

  if (proposals.length > 0) {
    const currentProposal = proposals.find(p => p.returnValues.id === proposal)

    if (currentProposal) {
      return <>
        <Proposal alphaContract={alphaContract} proposal={currentProposal} />
        {getVotesElement(currentProposal)}
      </>
    }
    else {
      return <Paper variant="outlined" className="innerdiv">
        Proposal {proposal} could not be found.
      </Paper>
    }
  }
  else {
    return null
  }
}

export default ProposalWrapper
