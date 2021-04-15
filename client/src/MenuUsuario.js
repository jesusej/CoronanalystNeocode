import React, {useState } from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";


function MenuUsuario () {
  const history = useHistory();

    return(

        <div>

          <div className="menuusuario">
            <button onClick={()=> history.push("/datos_personales")}>Encuesta</button>
            <button onClick={()=> history.push("/datos")}>Visualizar Datos</button>
            <button onClick={()=> history.push("/cerrar_sesion")}>Cerrar Sesión</button>
            <button onClick={()=> history.push("/login")}>Regresar a Log in</button>
          </div>
       
        </div>
    );
}

export default MenuUsuario;