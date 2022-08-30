
import React from "react";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Input2 from "./Form/Input2";
import Radio from "./Form/Radio";
import Select from "./Form/Select";

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

const coresArray = ['azul2', 'green', 'roxo2', 'laranja2', 'verde2', 'vermelho2', 'cinza2'];


const App = () => {

  const [termos, setTermos] = React.useState(false);

  const [cores, setCores] = React.useState(['vermelho']);

  const [select, setSelect] = React.useState('');

  const [produto, setProduto] = React.useState('');

  const [cor, setCor] = React.useState('Azul');

  const [fruta, setfruta] = React.useState('');

  const[linguagens, setLinguagens] = React.useState([]);

  const [cep, setCep] = React.useState('');

  const[nome, setNome] = React.useState('');

  const[email, setEmail] = React.useState('');

  const[produtoC, setProdutoC] = React.useState('');

  const[erro, setErro] = React.useState(null);

  function handleChangeRadio({target}){
    setProduto(target.value);
  }

  function handleChangeCores({ target }) {
    if (target.checked) {// se tiver checado ai sim adiciona a cor
      setCores([...cores, target.value]);//desestrutura cores com os valores anteriores e o atual q esta no target.value
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
      //se n tiver marcado retira o item, o filter vai filtrar os itens q retornarem verdadeiros e retornar um novo array
    }
  }

  function handleCheckedCores(cor) {
    return cores.includes(cor);
  }


  function validateCep(value){
    if( value.length === 0){
      setErro('Preencha um valor');
      return false;

    } else if(!/^\d{5}-?\d{3}$/.test(value)){
      setErro("Preencha um CEP válido");
      return false;
      
    }else{
      setErro(null);
      return true;      
    }    
  }

  function handleBlur({target}){
    console.log(validateCep(target.value));    
  }

  function handleChange({target}){
    if(erro){
      validateCep(target.value)
      setCep(target.value)
    }    
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <h4>Select</h4>
      <select value={select} onChange={({target}) => setSelect(target.value) } id="produtos">
        <option disabled value="">Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="pc">pc</option>
        <option value="celular">celular</option>
      </select>
      {select}

      <br/>
      <br/>
      <hr />
      <h4>Radio</h4>
      {
        produto
      }
      <br />
      <br />
      <label>
        <input 
          type="radio" 
          // name="produto" ou
          checked={produto === 'smarthphone'}
          value="smarthphone"
          onChange={handleChangeRadio}
          />
            Smarthphone
      </label>

      <label>
        <input 
          type="radio" 
          // name="produto" ou
          checked={produto === 'notebook'}
          value="notebook"
          onChange={handleChangeRadio}
          />
            notebook
      </label>

      <hr />
      {termos && <p>Aceitou os termos.</p>}
      <label>
        <input 
          type="checkbox" 
          value="Termos" 
          checked={termos}
          onChange={({target}) => setTermos(target.checked)}/>
            Aceito os termos.
      </label>

      <hr />

      Cores

      <label>
        <input
          type="checkbox"
          value="azul"
          checked={handleCheckedCores('azul')}
          onChange={handleChangeCores}
        />
        Azul
      </label>
      <label>
        <input
          type="checkbox"
          value="vermelho"
          checked={handleCheckedCores('vermelho')}
          onChange={handleChangeCores}
        />
        Vermelho
      </label>
      <label>
        <input
          type="checkbox"
          value="verde"
          checked={handleCheckedCores('verde')}
          onChange={handleChangeCores}
        />
        Verde
      </label>
      <label>
        <input
          type="checkbox"
          value="amarelo"
          checked={handleCheckedCores('amarelo')}
          onChange={handleChangeCores}
        />
        Amarelo
      </label>
      <label>
        <input
          type="checkbox"
          value="roxo"
          checked={handleCheckedCores('roxo')}
          onChange={handleChangeCores}
        />
        Roxo
      </label>


    <hr />

    <h4>Checkbox otimizado
    </h4>    

    {coresArray.map((cor, index) => 
    <label key={index} style={{textTransform: 'capitalize'}}>
      <input
          type="checkbox"
          value={cor}
          checked={handleCheckedCores(cor)}
          onChange={handleChangeCores}
        />
        {cor}
      </label>)
    } 

    <hr />

    <h4>Componentes form</h4>

    <h5>Componente Input</h5>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required/>
      <Input id="email" label="Email" value={email} setValue={setEmail} />      

      <button>Enviar</button>

      <hr />

      <h5>Componente Select</h5>
      <Select options={['Pc Gamer', 'Tablet Verde']} value={produtoC} setValue={setProdutoC}/>

      <hr />

      <h5>Componente Radio</h5>
      <h6>Cores</h6>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />

      <h6>Frutas</h6>
      <Radio options={['Maça', 'Pera', 'Melancia']} value={fruta} setValue={setfruta} />

      <hr />

      <h5>Componente checkbox</h5>
      <Checkbox options={['Javascript', 'Java', 'php']} value={linguagens} setValue={setLinguagens}/>

      <hr />

      <h5>Validação</h5>

      <Input 
        label="CEP" 
        id="cep" 
        type="text" 
        value={cep} 
        setValue={setCep}
        placeholder="00000-000"
        onBlur={handleBlur}
      />

      <hr />
      <h6>Input 2</h6>

    <Input2 
      label="CEP" 
      id="cep" 
      type="text" 
      value={cep} 
      onChange={handleChange}
      placeholder="00000-000"
      onBlur={handleBlur}
    />
      {erro && <p>{erro}</p>}

      <button>Enviar</button>

   </form>
  ) 
}

export default App;
