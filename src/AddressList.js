import React, { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Address from './Address'
import AddressesSum from './AddressesSum'
import { isAddress } from './utils'

const Addresslist = ({ list, from, contract, alphaContract, showSnackbar }) => {
  const [addresses, setAddresses] = useState(null)
  const [proposals, setProposals] = useState([])

  useEffect(() => {
    const getCurrentVotes = async () => {
      const newAddresses = []
      for (const address of list) {
        const valid = isAddress(address.address)
        if (valid) {
          const result = parseInt(await contract.methods.getCurrentVotes(address.address).call({ from }))
          newAddresses.push({ ...address, delegates: result })
        }
        else {
          newAddresses.push(address)
        }
      }

      newAddresses.sort((a, b) => b.delegates - a.delegates)
      console.log('Addresses', newAddresses)
      setAddresses(newAddresses)
    }

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
    getCurrentVotes()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  if (addresses) {
    const sum = addresses.reduce((p, c) => ({ delegates: p.delegates + c.delegates }), { delegates: 0 }).delegates
    return <>
      {addresses.length > 1 && <AddressesSum delegates={sum} />}
      {addresses.map(a => <Address key={a.address} address={a} from={from} alphaContract={alphaContract} contract={contract} proposals={proposals} showSnackbar={showSnackbar} showProposals={addresses.length === 1} />)}
    </>
  }
  else {
    return <CircularProgress />
  }
}

export default Addresslist
