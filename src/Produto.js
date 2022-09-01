
import React from 'react'
import { NavLink, Outlet, Routes, useLocation, useParams } from 'react-router-dom'
// import ProdutoAvaliacao from './ProdutoAvaliacao';
// import ProdutoCustomizado from './ProdutoCustomizado';
// import ProdutoDescricao from './ProdutoDescricao';

const Produto = () => {

  const params = useParams();
  console.log(params);

  const location = useLocation();//fica todas as informações da rota atual
  console.log(location);

  const search = new URLSearchParams(location.search);//obj pra acessar os itens
  console.log(search.get('memoria'));


  return (
    <div><h1>Produto { params.id}</h1>
    <nav>
      <NavLink to="">Descrição</NavLink>{''} | 
      <NavLink to="avaliacao">Avaliação</NavLink>{''} | 
      <NavLink to="customizado">Customizado</NavLink>{''} 
    </nav>
    <Outlet />
      {/* <Routes>
        {/* <Route path='/' element={<ProdutoDescricao />}></Route>
        <Route path='avaliacao' element={<ProdutoAvaliacao />}></Route>
        <Route path='customizado' element={<ProdutoCustomizado />}></Route> 
      </Routes> */}
    </div>

  )
}

export default Produto