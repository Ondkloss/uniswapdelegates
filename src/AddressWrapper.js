import React from 'react'
import { useParams } from 'react-router-dom'
import AddressList from './AddressList'
import SelfDelegate from './SelfDelegate'
import Store from './store.json'
import { isAddress, getAddressObject } from './utils'

const AddressWrapper = ({ from, contract, alphaContract, showSnackbar }) => {
  const { address } = useParams()

  const found = Store.addresses.map(a => getAddressObject(a)).find(a => a.address.toLowerCase() === address.toLowerCase())
  let resultAddress

  if (found) {
    resultAddress = found
  }
  else {
    resultAddress = getAddressObject({
      address: address
    })
  }
  const valid = isAddress(resultAddress.address)

  return <>
    { valid ? <SelfDelegate from={from} address={resultAddress.address} contract={contract} /> : null}
    <AddressList list={[resultAddress]} from={from} contract={contract} alphaContract={alphaContract} showSnackbar={showSnackbar} />
  </>
}

export default AddressWrapper
