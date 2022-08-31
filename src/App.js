
import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';
import CardHeader from "react-bootstrap/esm/CardHeader";

const App = () => { 

  return(
    <>

    <h1 className="mx-5 my-5">Bootstrap padrao</h1>
      <div className="card bg-dark text-white m-5">
        <div className="card-header">Notebook</div>
        <div className="card-body">
          <h5 className="card-title">R$ 2500</h5>
          <p className="card-text">Esse notebook é toper dmais</p>
        </div>
      </div>

      <hr />

      <Card bg="dark" text="white" style={{ maxWidth: '18rem' }} className="m-5">
        <Card.Header>Notebook</Card.Header>
        <Card.Body>
          <Card.Title>R$ 2500</Card.Title>
          <Card.Text>
            Esse é um notebook com 1tb, 16gb de ram e placa de vídeo de 16gb.
          </Card.Text>
        </Card.Body>
      </Card>

    </>
  ) 
}

export default App;
