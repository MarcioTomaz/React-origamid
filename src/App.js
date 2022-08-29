
import React from "react";

const App = () => {

  // const [ nome, setNome] = React.useState('');
  // const [ email, setEmail] = React.useState('');  

  function handleSubmit(event){
    event.preventDefault();
    console.log(event);
  }

  const [ form , setForm ] = React.useState({
    nome:'',
    email:'',
  })

  function handleChance({target}){
    const {id, value} = target;
    console.log(id,value);
    setForm({ ...form, [id]: value })//passando dentro do [] para ele reconhecer como se fosse uma propriedade no caso "nome" ou "email". o ...form é para passar tmb os valores anteriores
  }

  return(
    <>

      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input 
          id="nome" 
          type="text"
          name="nome" 
          value={nome} 
          onChange={(event) => setNome(event.target.value)}/>   

      <label htmlFor="email">Email</label>

        <input 
          id="email" 
          type="email"
          name="email" 
          value={email} 
          onChange={(event) => setEmail(event.target.value)}/> 
        
        <button>Enviar</button>    
      </form> */}

      <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome</label>
          <input 
            id="nome" 
            type="text"
            name="nome" 
            value={form.nome} 
            onChange={handleChance}/>   

        <label htmlFor="email">Email</label>

          <input 
            id="email" 
            type="email"
            name="email" 
            value={form.email} 
            onChange={handleChance}/> 
          
          <button>Enviar</button>    
      </form>

      {form.email}
      {form.nome}
    </>
  ) 
}

export default App;
