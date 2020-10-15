import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return <div>
    <h1 className="headertitle">
      <Link to={'/'} className="anonlink"><img alt="Uniswap delegates" src={require('./unicorn.png')} className="headeravatar" />Uniswap delegates</Link>
    </h1>
  </div>
}

export default Header
