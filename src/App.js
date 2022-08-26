
import React from "react";
import Produto from "./Produto";

const App = () => {
  // Os links abaixo puxam dados de um produto em formato JSON
  // https://ranekapi.origamid.dev/json/api/produto/tablet
  // https://ranekapi.origamid.dev/json/api/produto/smartphone
  // https://ranekapi.origamid.dev/json/api/produto/notebook
  // Crie uma interface com 3 botões, um para cada produto.
  // Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
  // Mostre apenas um produto por vez
  // Mostre a mensagem carregando... enquanto o fetch é realizado

  const [ dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(event){
    setCarregando(true);

    const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);

    const json = await response.json();
    console.log(json);
    setDados(json);
    setCarregando(false);
  }

  return (  
    <>
      <button onClick={handleClick}>tablet</button>
      <button onClick={handleClick}>Smartphone</button>
      <button onClick={handleClick}>Notebook</button>

       {/*{dados ? <Produto dados={dados} /> : 'Sem produtos'}; versao com ternario */}

      {carregando && <p>Carregando...</p>}
      {!carregando && dados &&<Produto dados={dados}/>}
      {/* com o && só irá executar se o dados for vdd, se n for nulo */}

      
    </>
  )
};

export default App;
