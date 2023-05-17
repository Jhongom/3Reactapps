import './App.css';
import logo from '../src/Imagenes/Daco_1820244.png'
import Botones from './componentes/botones.js'
import Pantalla from './componentes/pantalla.js'
import BotonClear from './componentes/botonClear.js';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  
  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input))
    } else {
      alert('Ingrese Valores')
    }
    
  };


  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={logo}
          className='logo'
          alt='logo'
        />
      </div>
      <div className='conteendor-calculadora'>
        <Pantalla input = {input}/>
        <div className='fila'>
          <Botones manejarClick={agregarInput}>1</Botones>
          <Botones manejarClick={agregarInput}>2</Botones>
          <Botones manejarClick={agregarInput}>3</Botones>
          <Botones manejarClick={agregarInput}>+</Botones>
        </div>
          
        <div className='fila'>
          <Botones manejarClick={agregarInput}>4</Botones>
          <Botones manejarClick={agregarInput}>5</Botones>
          <Botones manejarClick={agregarInput}>6</Botones>
          <Botones manejarClick={agregarInput}>-</Botones>
        </div>
        <div className='fila'>
          <Botones manejarClick={agregarInput}>7</Botones>
          <Botones manejarClick={agregarInput}>8</Botones>
          <Botones manejarClick={agregarInput}>9</Botones>
          <Botones manejarClick={agregarInput}>*</Botones>
        </div>
        <div className='fila'>
          <Botones manejarClick={calcularResultado}>=</Botones>
          <Botones manejarClick={agregarInput}>0</Botones>
          <Botones manejarClick={agregarInput}>.</Botones>
          <Botones manejarClick={agregarInput}>/</Botones>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;
