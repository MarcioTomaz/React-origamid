

const App = () => {
  // const produtos = ['Notebook, ', 'Tablet, ', 'Smartphone'];
  // const produtos2 = [<li key="e1">Notebook</li>, <li key="e2">Celular</li>];

  // const livros = [
  //   { nome: 'A Game of Thrones', ano: 1996 },
  //   { nome: 'A Clash of Kings', ano: 1998 },
  //   { nome: 'A Storm of Swords', ano: 2000 },
  // ];


  // return <div>{produtos2}</div>;
  // return <ul>{produtos.map(produto => <li key={produto}>produto</li>)}</ul>

  // return (
  //   <ul>
  //     {livros.map((livro) =>
  //       <li key={livro.nome}>{livro.nome}</li>
  //     )}
  //   </ul>
  // )

  // return (
  //   <ul>
  //     {livros.map(({nome, ano}) => // desestruturando o objeto
  //       <li key={nome}>{nome}, {ano}</li>
  //     )}
  //   </ul>
  // )

  // return (
  //   <ul>
  //     {livros
  //       .filter(({ano}) => ano >= 1998)// filtrando pelo a partir do ano 1998
  //       .map(({nome, ano}) => // filtrando pelo ano
  //       <li key={nome}>{nome}, {ano}</li>
  //     )}
  //   </ul>
  // )
  
// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
  const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  const dadosFiltrados = produtos.filter(({preco}) => Number(preco.replace('R$ ', '')) > 1500);
  console.log('dados: ', dadosFiltrados)
  
  return (
    <>
    <section>
      {dadosFiltrados.map(({id, nome, preco, cores}) => <div key={id}>
        <h1>{nome}</h1>
        <p>{preco}</p>
        <ul>
          {cores.map( cor => <li style={{backgroundColor: cor, color: 'white'}} key={cor}>{cor}</li>)}
        </ul>
      </div>)}
    </section>
    </>
  )
}

export default App;
