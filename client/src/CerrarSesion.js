import React, {useState } from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";

function CerrarSesion () {
    const history = useHistory();
    
    return(
        <div className="cerrarsesion">
            <h3> Pagina de Cierre de Sesión</h3>
            <p> ¿Desea cerrar sesión? </p>

            <button onClick={()=> history.push("/menu_Usuario")}>Regresar al menú principal</button>
          </div>
    );
}

export default CerrarSesion;