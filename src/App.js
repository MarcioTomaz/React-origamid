
// import React from "react";
// import Produto from "./Produto";
import Produto from "./Produto";
import UserContext from "./UserContext";

import { GlobalStorage } from "./GlobalContext";

const App = () => {
  console.log(UserContext);
  return(
    // <UserContext.Provider value={{nome:'Marcio'}}>
    //   {/* Agora o <Produto /> consegue ter acesso ao contexto do UserContext */}
    //   <Produto />      
    // </UserContext.Provider>
    <GlobalStorage>

      <Produto />
      
    </GlobalStorage>
  ) 
}

export default App;
