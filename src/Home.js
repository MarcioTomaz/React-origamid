
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>Essa é a home</p>
      <Link to="produto/notebook">Notebook</Link>{''} |
      <Link to="produto/celular">Celular</Link>
    </>
  )
}

export default Home