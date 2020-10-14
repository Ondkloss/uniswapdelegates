import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return <div>
    <h1 style={{ margin: 0 }}>
      <Link to={'/'} className="anonlink"><img alt="Uniswap governance" src={require('./unicorn.png')} style={{display: 'inline', height: 30}} />Uniswap governance</Link>
    </h1>
  </div>
}

export default Header
