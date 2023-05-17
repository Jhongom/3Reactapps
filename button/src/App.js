import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import logocali from './imagenes/Califront.png';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);


  const manejarClick = () =>{
    setNumClicks(numClicks + 1);
  }

  const reinicio = () =>{
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={logocali}
          alt='Logo Cali'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClicks={numClicks}/>
        <Boton
          texto='Click'
          botonDeClick={true}
          manejarClick={manejarClick}
          />
        <Boton
          texto='Reiniciar'
          botonDeClick={false}
          manejarClick={reinicio}
          />
      </div>
    </div>
  );
}

export default App;
