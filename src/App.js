
import React from "react";
// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
  // form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const formFields = [// outra forma de fazer
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
  {
    id: 'teste',
    label: 'teste',
    type: 'text',
  },];

// O reduce() pode transformar um array de itens em um objeto com cada item com uma chave
// o reduce pode retornar qualquer outro valor de um array, outro array, um obj, um numero, uma string. Ex somar todos os numeros anteriores de um array e retornar a soma total


const App = () => {

  const [response, setResponse] = React.useState(null);

  const [ form, setForm] = React.useState(formFields.reduce((acc, field) => {// ele tem de parametro o valor anterior 'acc' e o valor atual 'field'
    console.log(acc)
    return {
      ...acc,
      [field.id]: '',
    };
  }, {})//valor inicial
  )

  function handleChange({target}){
      const {id, value} = target;
      setForm({...form, [id]: value})
  }

  function handleSubmit(event){
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
      },
      body:JSON.stringify(form),
    }).then( response => {
      setResponse(response)
    })
  }
  
  return(
    <>
    {/* <form onSubmit={handleSubmit}> */}
      {/* <label htmlFor="nome">Nome</label>
      <input type="text" id="nome" value={form.nome} onChange={handleChange} />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        value={form.senha}
        onChange={handleChange}
      />
      <label htmlFor="cep">Cep</label>
      <input type="text" id="cep" value={form.cep} onChange={handleChange} />
      <label htmlFor="senha">Rua</label>
      <input type="text" id="rua" value={form.rua} onChange={handleChange} />
      <label htmlFor="numero">Número</label>
      <input
        type="text"
        id="numero"
        value={form.numero}
        onChange={handleChange}
      />
      <label htmlFor="bairro">Bairro</label>
      <input
        type="text"
        id="bairro"
        value={form.bairro}
        onChange={handleChange}
      />
      <label htmlFor="cidade">Cidade</label>
      <input
        type="text"
        id="cidade"
        value={form.cidade}
        onChange={handleChange}
      />
      <label htmlFor="estado">Estado</label>
      <input
        type="text"
        id="estado"
        value={form.estado}
        onChange={handleChange}
      /> */}

    {/* </form> */}
    <form onSubmit={handleSubmit}>
      {formFields.map( ({id, label, type}) => //desestruturando
      <div key={id}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          value={form[id]}
          onChange={handleChange}
        />
      </div>)}
      {response && response.ok && <p>Formulário Enviado</p>}
      <button>Enviar</button>
    </form>
    </>
  ) 
}

export default App;
