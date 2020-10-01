import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import './App.css'
import { getDelegatesString } from './utils'
import { Link } from 'react-router-dom'
import Tooltip from '@material-ui/core/Tooltip'
import LinkIcon from '@material-ui/icons/Link'

function SelfDelegate({ from, address, contract }) {
  const [delegate, setDelegate] = useState(null)
  const [balance, setBalance] = useState(0)


  useEffect(() => {
    contract.methods.delegates(address).call({ from })
      .then(result => {
        setDelegate(result)
      })
    contract.methods.balanceOf(address).call({ from })
      .then(result => {
        setBalance(result)
      })
  }, [address, contract.methods, from])

  const getDelegateToElement = () => {
    if (delegate) {
      let indictment = ['The address is', 'itself']

      if (address === from) {
        indictment = ['You are', 'yourself']
      }

      if (delegate.toLowerCase() === address.toLowerCase()) {
        return <div>{indictment[0]} delegating {getDelegatesString(balance)} UNI to <Tooltip title="Permalink"><Link to={`/address/${delegate}`}>{indictment[1]} <LinkIcon fontSize="inherit" /></Link></Tooltip></div>
      }
      else if (delegate === '0x0000000000000000000000000000000000000000') {
        return <div>{indictment[0]} not delegating the {getDelegatesString(balance)} UNI</div>
      }
      else {
        return <div>{indictment[0]} delegating {getDelegatesString(balance)} UNI to <Tooltip title="Permalink"><Link to={`/address/${delegate}`}>{delegate} <LinkIcon fontSize="inherit" /></Link></Tooltip></div>
      }
    }
    else {
      return <div>Loading...</div>
    }
  }

  return <Paper variant="outlined" className="innerdiv">
    {getDelegateToElement()}
  </Paper>
}

export default SelfDelegate
