import React, {useState } from "react";
import {NavLink} from "react-router-dom";
import Axios from "axios";

function CerrarSesion () {
    return(
        <div className="cerrarsesion">
            <h3> Pagina de Cierre de Sesión</h3>
            <p> ¿Desea cerrar sesión? </p>

            <button>< NavLink to="/menu_Usuario" >Regresar al menú principal</NavLink></button> <br></br>
          </div>
    );
}

export default CerrarSesion;