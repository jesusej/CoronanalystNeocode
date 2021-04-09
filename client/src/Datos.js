import React, {useState } from "react";
import {NavLink} from "react-router-dom";
import Axios from "axios";

function Datos () {
    return(
        <div className="Datos">
            <h3> Pagina de Datos</h3>
            <p>Pagina donde se muestran los datos </p>

            <button>< NavLink to="/menu_Usuario" >Regresar al menú principal</NavLink></button> <br></br>
          </div>
    );
}

export default Datos;