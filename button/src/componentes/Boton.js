import React from "react";
import '../estilos/boton.css';

function Boton({texto, botonDeClick, manejarClick}) {
    return(
        <button 
            className={botonDeClick ? 'boton-click' : 'boton-reinicio'}
            onClick={manejarClick}>
            {texto}
        </button>
    );
}

export default Boton;
