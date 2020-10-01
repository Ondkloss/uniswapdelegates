import React from 'react'
import { useParams } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home'
import { Link } from 'react-router-dom'
import AddressList from './AddressList'
import SelfDelegate from './SelfDelegate'
import Store from './store.json'
import { isAddress } from './utils'

const AddressWrapper = ({ from, contract, showSnackbar }) => {
  const { address } = useParams()

  const found = Store.addresses.find(a => a.address.toLowerCase() === address.toLowerCase())
  let resultAddress

  if (found) {
    resultAddress = found
  }
  else {
    resultAddress = {
      alias: '<Unknown>',
      address: address
    }
  }
  const valid = isAddress(resultAddress.address)

  const getHomeElement = () => <div className="buttonbotdiv">
    <Button variant="outlined" color="primary" component={Link} to={'/'} startIcon={<HomeIcon fontSize="inherit" color="primary" />}>Go home</Button>
  </div>

  return <>
    { valid ? <SelfDelegate from={from} address={resultAddress.address} contract={contract} /> : null}
    <AddressList list={[resultAddress]} from={from} contract={contract} showSnackbar={showSnackbar} />
    {getHomeElement()}
  </>
}

export default AddressWrapper
