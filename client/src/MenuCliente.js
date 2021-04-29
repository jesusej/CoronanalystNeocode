// Archivo de menú de cliente (sólo para propósitos de presentación)

import React, {useState } from "react";
import {useHistory} from "react-router-dom";
//import {NavLink} from "react-router-dom";

function MenuCliente () {
  const history = useHistory();
    return(
        <div className="main">
          <div className = "titulo"><h1>Menú de Cliente</h1></div>
          <div className = "centered-container__cliente">
            <button className="button__cliente" onClick={()=> history.push("/")}>Visualizar Datos</button>
            <button className="button__cliente" onClick={()=> history.push("/")}>Visualizar Datos v/Usuario</button>
            <button className="button__cliente" onClick={()=> history.push("/cerrar_sesion")}>Cerrar Sesión</button>
            <button className="button__cliente" onClick={()=> history.push("/login")}>Regresar a Log in</button>
          </div>
          </div>
    );
} 

export default MenuCliente;