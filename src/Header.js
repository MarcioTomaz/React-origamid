import React from 'react'
import { NavLink } from 'react-router-dom'
// import './Header.css';

const Header = () => {
  return (
    <nav>
      <NavLink to="/" end activeStyle={{color: 'tomato'}}>Home</NavLink> | {' '}
      <NavLink to="sobre" activeStyle={{color:'tomato'}}>Sobre</NavLink>  |   {''}  
      <NavLink to="login" activeStyle={{color:'tomato'}}>Login</NavLink>       
    </nav>

  )
}

export default Header