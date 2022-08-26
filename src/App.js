
import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {

  const [ contar, setContar]= React.useState(1);
  const [items1, setItems1] = React.useState('Item 1');

  // const [modal, setModal] = React.useState(() => {//callback pegando do localStorage
  //   const ativo = window.localStorage.getItem('ativo');
  //   return ativo;
  // });

  const [modal, setModal] = React.useState(true);

  const [items, setItems] = React.useState('Teste');
  
  function handleClick(){
    setItems('outros');
  }

  function contadorClick(){
    setContar((contar) => {
      return contar +1;
    })
    
    setItems((items) => [...items, 'Item ' + (contar + 1)])
  }
  
  return (  
    <>
      <div>   
        <p>{items}</p>
        <button onClick={handleClick}>CLicar</button>
      </div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />

      {items1.localeCompare( item => <li key={items}>{item}</li>)}
      <button onClick={contadorClick}>{contar}</button>

    </>
  )
};

export default App;
