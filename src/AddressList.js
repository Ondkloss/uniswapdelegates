import React, { useState, useEffect } from 'react'
import Address from './Address'

const Addresslist = ({ list, from, contract, showSnackbar }) => {
  const [addresses, setAddresses] = useState(list)

  useEffect(() => {
    const getCurrentVotes = async () => {
      const newAddresses = []
      for (const address of addresses) {
        const result = parseInt(await contract.methods.getCurrentVotes(address.address).call({ from }))
        newAddresses.push({ ...address, delegates: result })
      }

      newAddresses.sort((a, b) => b.delegates - a.delegates)
      setAddresses(newAddresses)
    }
    getCurrentVotes()
  }, [addresses, contract.methods, from])

  return addresses.map(a => <Address key={a.address} address={a} showSnackbar={showSnackbar} />)
}

export default Addresslist
