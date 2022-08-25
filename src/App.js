
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Form from "./Form/Form";

const App = () => {
  
  const Teste = () => {

    const active = false;

    if (active){
      return <p>Teste</p>;
    }
  }

  return (
    <>  
      <Teste/>
      <Header />
      <Form />
      <Footer />
    </>
  )
}

export default App;
