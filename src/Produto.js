import React from 'react'
// import UserContext from './UserContext';
import { GlobalContext } from './GlobalContext'

const Produto = () => {
  // const dados = React.useContext(UserContext);
  // console.log(dados);
  const global = React.useContext(GlobalContext);
  console.log(global);

  function handleClick(){
    global.setContar((contar) => contar + 1);// no setContar sempre temos acesso ao elemento anterior ' (contar) ' ai conseguimos utilizar para somar
  }

  return (
    // <div>{dados.nome}</div>
    <>
    <div>Produto: {global.nome}</div>
    <div>Contador: {global.contar}</div>
    <button onClick={handleClick}>Adicionar</button>
    <button onClick={() => global.adicionarDois()}>Adicionar 2 </button>
    </>
  )
}

export default Produto