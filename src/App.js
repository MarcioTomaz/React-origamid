
import React from "react";
import Form from "./Form/Form";

// const Titulo = (props) => {
//   return <h1 style={{color: props.cor}}>{props.texto}</h1>;
// };

const Titulo = ({cor, texto, children}) => {// desestruturado
  return <h1 style={{color: cor}}>{texto}, { children }</h1>;
};



const App = () => {
  return (
    <section>  
      <Titulo cor="red" texto="Meu titulo 1" >
        Isso é o children
        <p>Teste</p>
      </Titulo> { /* ao abrir e fechar ele irá ficar com a propriedade children */}
      <Titulo cor="blue "texto="Meu titulo 2" />
      <Titulo texto="Meu titulo 3" />

      <Form>

      </Form>
      
    </section>
  )
};

export default App;
