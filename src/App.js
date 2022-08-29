
import React from "react";

const App = () => {

  const [select, setSelect] = React.useState('');

  return(
    <form>
      <select value={select} onChange={({target}) => setSelect(target.value) } id="produtos">
        <option disabled value="">Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="pc">pc</option>
        <option value="celular">celular</option>
      </select>
      {select}
    </form>
  ) 
}

export default App;
