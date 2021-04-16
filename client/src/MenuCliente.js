// Archivo de menú de cliente (sólo para propósitos de presentación)

import React, {useState } from "react";
import {useHistory} from "react-router-dom";
//import {NavLink} from "react-router-dom";

function MenuCliente () {
  const history = useHistory();
    return(

        <div className="menuCliente">
          <h2>Menú de Cliente</h2>
          <button onClick={()=> history.push("/")}>Visualizar Datos</button>
          <button onClick={()=> history.push("/")}>Visualizar Datos Vista de Usuario</button>
          <button onClick={()=> history.push("/cerrar_sesion")}>Cerrar Sesión</button>
          <button onClick={()=> history.push("/login")}>Regresar a Log in</button>
        </div>
    );
}

export default MenuCliente;