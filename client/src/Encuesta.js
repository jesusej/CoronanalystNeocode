import React, {useState } from "react";
import {NavLink} from "react-router-dom";
import Axios from "axios";

function Encuesta () {
    return(
        <div className="Encuesta">
            <h3>Pagina de Encuesta</h3>
            <h4>Compras y estado en pandemia</h4>
            <p>Pagina donde se muestran todas las preguntas con su respuesta </p>

            <button>< NavLink to="/menu_Usuario" >Terminar encuesta</NavLink></button> <br></br>
          </div>
    );
}

export default Encuesta;