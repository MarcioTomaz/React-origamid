
import React from 'react'

const Produto = ({produto}) => {

  const [dados, setDados] = React.useState(null);

  React.useEffect( () => {
    if(produto !== null){
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
      .then( response => response.json()).
      then((json) => setDados(json));
    }
  }, [produto])// sempre q o produto alterar é para fazer a requisicao

  if(dados === null )return null;
  return <div>
    <h1>{dados.nome}</h1>
    <h1>{dados.preco}</h1>
  </div>;
  
}

export default Produto