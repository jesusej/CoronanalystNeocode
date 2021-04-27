import React, {useState } from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";

function CerrarSesion () {
    const history = useHistory();
    
    return(
        <div className="cerrarsesion">
            <h3> ¿Realmente desea cerrar sesión? </h3>

            <button onClick={()=> history.push("/")}>Si</button>
            <button onClick={()=> history.push("/menu_Usuario")}>No</button>
          </div>
    );
}

export default CerrarSesion;