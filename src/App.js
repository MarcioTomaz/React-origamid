
import React from "react";
import useLocalStorage from './useLocalStorage'

const App = () => {
  const [ produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({target}){
      setProduto(target.innerText)
  }

  return(
    <>
    <button onClick={handleClick}>notebook</button>
    <button onClick={handleClick}>pc</button>
    </>
  ) 
}

export default App;
