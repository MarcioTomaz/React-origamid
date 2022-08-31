
import React from "react";
import './App.css'
import Produto from "./Produto";


const App = () => {
  const [ativar, setAtivar] = React.useState(false);

  return(
    <>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </>
  ) 
}

export default App;
