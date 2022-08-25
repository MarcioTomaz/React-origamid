const App = () => {

  const nome = 'Marzio';
  const number = Math.random();
  const ativo = false;

  function mostrarNome(sobrenome){
      return 'Marzio ' + sobrenome; 
  }

  const carro = {
    marca: 'Ford', 
    portas: '4'
  }

  const estiloP = {
    color: "blue"
  }

  return (
    <>
      <a 
        href="https://pokeapi.co/" 
        title="pokemon api"
        className="ativo">Meu app
      </a>

      <label htmlFor="nome">
        <input type="text" id="nome" />
      </label>

      <p style={estiloP}>{mostrarNome('Tomaz')}</p>

      <p>{carro.marca}</p>
      
      <p>{number * 1000 / 5 - 10 }</p>

      <p className={ ativo? 'ativo': 'inativo'}>condicional</p>
    </>
  );
}

export default App;
