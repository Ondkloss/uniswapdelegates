import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import { isAddress } from './utils'

const GoToAddress = () => {
  const history = useHistory()

  const [error, setError] = useState('')

  const handleKeyEvent = ev => {
    if (ev.key === 'Enter') {
      history.push(`/address/${ev.target.value}`)
    }
  }

  const handleChange = ev => {
    if (isAddress(ev.target.value)) {
      setError('')
    }
    else {
      setError('Invalid address')
    }
  }

  const handleClick = ev => {
    ev.target.setSelectionRange(0, ev.target.value.length)
  }

  return <div className="gotodiv">
    <TextField onKeyPress={handleKeyEvent} onChange={handleChange} onClick={handleClick} id="outlined-basic" label="Address" variant="outlined" error={error.length > 0} helperText={error} fullWidth />
  </div>
}

export default GoToAddress
