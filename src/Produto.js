
import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Produto = () => {

  const params = useParams();
  console.log(params);

  const location = useLocation();//fica todas as informações da rota atual
  console.log(location);

  const search = new URLSearchParams(location.search);//obj pra acessar os itens
  console.log(search.get('memoria'));


  return (
    <div><h1>Produto { params.id}</h1></div>
  )
}

export default Produto