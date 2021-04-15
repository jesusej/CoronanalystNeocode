import React, {useState } from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";

function Datos () {
    const history = useHistory();


    return(
        <div className="Datos">
            <h3> Pagina de Datos</h3>
            <p>Pagina donde se muestran los datos </p>

            <button onClick={()=> history.push("/menu_Usuario")}>Regresar al menpu principal</button>
          </div>
    );
}

export default Datos;