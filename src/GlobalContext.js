
import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {

  const [contar, setContar] = React.useState(0);

  function adiocionarUm() {
    setContar((contar) => contar +1 )
  }

  function adicionarDois() {
    setContar((contar) => contar +2 )
  }

  return (
      <GlobalContext.Provider value={
        {contar, setContar,adiocionarUm, adicionarDois, nome:'Marcio'}}>
        {children}
      </GlobalContext.Provider>
    )
}