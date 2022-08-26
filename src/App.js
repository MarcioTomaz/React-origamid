
import React from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {

  // Os Hooks são funções especiais do React que permitem controlarmos o estado e o ciclo de vida de componentes funcionais. Isso antes só era possível com classes.

  // const ativoHook = React.useState(false);
  // const ativoValor = ativoHook[0];
  // const atualizaValor = ativoHook[1];

  const [ ativo, setAtivo] = React.useState(false);// desestruturando
  const [dados, setDados] = React.useState({nome: 'Marzio', idade: '23'});

  console.log(ativo);

  function handleClick(){
      setAtivo(!ativo);
      setDados({...dados, faculdade: 'Possui faculdade'});// maneira de adicionar atributos no obj sem precisar setar os dados anteriores colocando  '...dados, '
  }

  const [modal, setModal] = React.useState(false);
  
  return (  
    <>
      <div>
        <p>{dados.nome}</p>
        <p>{dados.idade}</p>
        <p>{dados.faculdade}</p>
        <button onClick={handleClick} className="">{ativo? 'Ativo' : 'Inativo'}</button>   

        <div>{modal ? 'Modal aberta': 'Modal fechada'}</div>
        <Modal modal={modal} setModal={setModal}/>
        <ButtonModal setModal={setModal}/> 
   
      </div>
    </>
  )
};

export default App;
