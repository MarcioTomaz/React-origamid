


const App = () => {
  // Mostre os dados da aplicação, como aprensetado no vídeo
  // Não utilize CSS externo, use o style para mudar as cores
  // Se a situação estiver ativa pinte de verde, inativa vermelho
  // Se o gasto for maior que 10000 mostre uma mensagem
  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };

  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

    const dados = mario;

    // pegando primeiro os preços do objeto e retirando o 'R$ ' e convertendo para numero com o 
    // Number()
    const total = dados.compras.map( item => Number(item.preco.replace('R$ ', '')))
    .reduce((a,b) => a + b);
    //reduce ele recebe o valor anterior e o atual, e dps a expressao 

    return <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>Situação: <span style={{color: dados.ativa? 'green':'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
      <p>Total gasto: R$ {total}</p>
      <p>{total > 10000 ? "Você está fora do limite" : ''}</p>

    </div>;  
}

export default App;
