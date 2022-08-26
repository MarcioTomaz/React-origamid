
import React from "react";
import Produto from "./Produto";

const App = () => {

  const [ contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);
  const [ativo, setAtivo] = React.useState(false);
  
  React.useEffect(() => {
    // se o fetch estivesse fora do useEffect, toda vez que o componente
    // fosse atualizado, o mesmo seria executado
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);


  console.log('Executou fora')
 // Uma Array vazia indica que o efeito não possui nenhum dependência,
  // assim o mesmo só irá ocorrer quando o componente é renderizado inicialmente (montado)
  // O efeito ocorre logo após a renderização do mesmo
  React.useEffect(() => {
    console.log('Apenas quando renderiza');
  }, []);

  React.useEffect(() => {
    document.title = 'Total ' + contar;
  }, [contar]);// no [] fica a dependencia 


  return (  
    <>  
      {dados && <div>
          <h1>{dados.nome}</h1>
          <p>R$: {dados.preco * contar}</p>
        
        </div>}
      <button onClick={ () => setContar(contar + 1)}>{contar}</button>

      <br/>
      <br/>

      <button onClick={ () => setAtivo(!ativo)}>Ativar</button>
      {ativo && <Produto />}

    </>
  )
}

export default App;
