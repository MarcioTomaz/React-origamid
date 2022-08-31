
import React from "react";
import foto from './img/foto.jpg';
import './App.css';
// import dog from './img/dog.svg';
import { ReactComponent as Dog} from './img/dog.svg';
import DogSvg from "./DogSvg";


const App = () => {
  const [olho, setOlho] = React.useState(0);

  function handleClick(){
    for(let i = 0; i < 5; i++){
      setTimeout( () => {
          setOlho(i);
      }, 30 * i)
    }
  }


  return (
    <div>
      {/* <Dog /> */}
      <p className="fundo" onClick={handleClick} />
      <Dog/>
      <DogSvg color="green" olho={olho}/>   
      <DogSvg color="red" olho={olho}/>   
      <DogSvg color="yellow" olho={olho}/>   

      {/* <img src={dog} alt="dog" /> */}
      <img src={foto} alt="cachorro" />   

    </div>
  );
};


export default App;
