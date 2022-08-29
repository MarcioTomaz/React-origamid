
import React from "react";


const App = () => {

  const [termos, setTermos] = React.useState(false);

  const [cores, setCores] = React.useState(['vermelho']);

  const [select, setSelect] = React.useState('');

  const [produto, setProduto] = React.useState('');

  function handleChangeRadio({target}){
    setProduto(target.value);
  }

  function handleChangeCores({ target }) {
    if (target.checked) {// se tiver checado ai sim adiciona a cor
      setCores([...cores, target.value]);//desestrutura cores com os valores anteriores e o atual q esta no target.value
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
      //se n tiver marcado retira o item, o filter vai filtrar os itens q retornarem verdadeiros e retornar um novo array
    }
  }

  function handleCheckedCores(cor) {
    return cores.includes(cor);
  }

  return(
    <form>
      <h4>Select</h4>
      <select value={select} onChange={({target}) => setSelect(target.value) } id="produtos">
        <option disabled value="">Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="pc">pc</option>
        <option value="celular">celular</option>
      </select>
      {select}

      <br/>
      <br/>
      <hr />
      <h4>Radio</h4>

      {
        produto
      }
      <br />
      <br />
      <label>
        <input 
          type="radio" 
          // name="produto" ou
          checked={produto === 'smarthphone'}
          value="smarthphone"
          onChange={handleChangeRadio}
          />
            Smarthphone
      </label>

      <label>
        <input 
          type="radio" 
          // name="produto" ou
          checked={produto === 'notebook'}
          value="notebook"
          onChange={handleChangeRadio}
          />
            notebook
      </label>

      <hr />
      {termos && <p>Aceitou os termos.</p>}
      <label>
        <input 
          type="checkbox" 
          value="Termos" 
          checked={termos}
          onChange={({target}) => setTermos(target.checked)}/>
            Aceito os termos.
      </label>

      <hr />

      Cores

      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleCheckedCores('azul')}
          onChange={handleChangeCores}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleCheckedCores('vermelho')}
          onChange={handleChangeCores}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleCheckedCores('verde')}
          onChange={handleChangeCores}
        />
        Verde
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleCheckedCores('amarelo')}
          onChange={handleChangeCores}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleCheckedCores('roxo')}
          onChange={handleChangeCores}
        />
        Roxo
      </label>

    </form>
  ) 
}

export default App;
