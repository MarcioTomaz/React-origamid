
import React from "react";

const App = () => {
  const video = React.useRef();

  const [comentarios, setComentarios] = React.useState([]);
  const [input,setInput] = React.useState('');
  
  React.useEffect( () => {
    console.log(video.current.currentTime);
  });

  const inputElement = React.useRef();//transforma em uma referencia

  function handleClick(){
    setComentarios([...comentarios, input])//usando o spread ...
    setInput('');
    inputElement.current.focus();//pega a referencia e seta o metodo focus
  }

  return(
    <>
      <video ref={video} />    

      <div>
        <ul>{comentarios.map( (comentario, index) => <li key={index}> {comentario}</li>)}      
        </ul>
        <input 
          type="text" 
          ref={inputElement}//referencia ao input
          value={input} 
          onChange={ ({target}) => setInput(target.value)} 
          />
        <br />
        
        <button onClick={handleClick}>Enviar</button>
      </div>
    </>
  ) 
}

export default App;
