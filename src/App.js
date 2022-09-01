
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import NaoEncontrado from "./NaoEncontrado";
import Sobre from "./Sobre";

const App = () => {

  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="sobre" element={<Sobre />}/>
        <Route path="*" element={<NaoEncontrado />}/>
        {/* o asterisco significa q qqr pag q nao for as de cima sera essa route */}
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;
