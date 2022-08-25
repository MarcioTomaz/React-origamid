

const App = () => {
  const produtos = ['Notebook, ', 'Tablet, ', 'Smartphone'];
  const produtos2 = [<li key="e1">Notebook</li>, <li key="e2">Celular</li>];

  const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
  ];


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

  return (
    <ul>
      {livros
        .filter(({ano}) => ano >= 1998)// filtrando pelo a partir do ano 1998
        .map(({nome, ano}) => // filtrando pelo ano
        <li key={nome}>{nome}, {ano}</li>
      )}
    </ul>
  )
  
}

export default App;
