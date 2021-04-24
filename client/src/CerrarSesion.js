import React, {useState } from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";

function CerrarSesion () {
    const history = useHistory();
    
    return(
        <div className="cerrarsesion">
            <p> ¿Realmente desea cerrar sesión? </p>

            <button onClick={()=> history.push("/")}>Si</button>
            <button onClick={()=> history.push("/menu_Usuario")}>No</button>
          </div>
    );
}

export default CerrarSesion;