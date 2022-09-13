
import React from "react";
import Header from "./Header";

const App = () => {

  const [ contar, setContar] = React.useState(0);

  return(
    <>
      <Header />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  ) 
}

export default App;
