import React, { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
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
        console.log('Delegates', result)
        setDelegate(result)
      })
    contract.methods.balanceOf(address).call({ from })
      .then(result => {
        console.log('Balance', result)
        setBalance(parseInt(result))
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getDelegateToElement = () => {
    if (delegate) {
      let indictment = ['The address is', 'The address has', 'itself']

      if (address === from) {
        indictment = ['You are', 'You have', 'yourself']
      }

      if (balance === 0) {
        return <div>{indictment[1]} no UNI to delegate</div>
      }
      else if (delegate.toLowerCase() === address.toLowerCase()) {
        return <div>{indictment[0]} delegating {getDelegatesString(balance)} UNI to <Tooltip title="Permalink"><Link to={`/address/${delegate}`}>{indictment[2]} <LinkIcon fontSize="inherit" /></Link></Tooltip></div>
      }
      else if (delegate === '0x0000000000000000000000000000000000000000') {
        return <div>{indictment[0]} not delegating the {getDelegatesString(balance)} UNI</div>
      }
      else {
        return <div>{indictment[0]} delegating {getDelegatesString(balance)} UNI to <Tooltip title="Permalink"><Link to={`/address/${delegate}`}>{delegate} <LinkIcon fontSize="inherit" /></Link></Tooltip></div>
      }
    }
    else {
      return <CircularProgress />
    }
  }

  return <Paper variant="outlined" className="innerdiv">
    {getDelegateToElement()}
  </Paper>
}

export default SelfDelegate
