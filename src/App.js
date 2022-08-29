
import React from "react";

const App = () => {

  const [select, setSelect] = React.useState('');

  const [produto, setProduto] = React.useState('');

  function handleChangeRadio({target}){
    setProduto(target.value);
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
    </form>
  ) 
}

export default App;
