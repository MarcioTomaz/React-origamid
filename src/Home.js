
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Head from './Head'
import {Helmet} from 'react-helmet';

const Home = () => {
  return (
    <>
      {/* <Head title="Home" description="Essa é a descrição da home"/> */}
      <Helmet >
        <title>Dogs | Home</title>
        <meta name="description" content="Essa é a página home"></meta>
      </Helmet>
      <h1>Home</h1>
      <p>Essa é a home</p>
      <Link to="produto/notebook">Notebook</Link>{''} |
      <Link to="produto/celular">Celular</Link>
    </>
  )
}

export default Home