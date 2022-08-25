

const App = () => {
  
  function handleClick(event){
    console.log(event.target);
  }

  function handleScroll(event){
    console.log(event.target);
  }
  window.addEventListener('scroll', handleScroll);

  return (
    <>  
      <div style={{height: '200vh'}}>
        <button onClick={handleClick} onMouseMove={handleClick}>Clique</button>

        <button onClick={(event) => console.log(event.target.innerText)}>Clique 2</button>
      </div>
    </>
  )
}

export default App;
