import React from 'react'

const ButtonModal = ({setModal}) => {

  function handleClick(){
    setModal((ativo) => !ativo);//passando como callback vc tem acesso ao valor anterior
  }

  return (
    <button onClick={handleClick}>Abrir</button>
  )
}

export default ButtonModal