// Archivo de menú admin (sólo para propósitos de presentación)

import React, {useState } from "react";
import {useHistory} from "react-router-dom";
//import {NavLink} from "react-router-dom";

function MenuAdmin () {
  const history = useHistory();
    return(

        <div className="menuAdmin">
          <h2>Menú de Admin</h2>
          <button onClick={()=> history.push("/cuentas_admin")}>Administrar Cuentas</button>
          <button onClick={()=> history.push("/")}>Visualizar Datos</button>
          <button onClick={()=> history.push("/datos")}>Visualizar Datos Vista de Usuario</button>
          <button onClick={()=> history.push("/cerrar_sesion")}>Cerrar Sesión</button>
          <button onClick={()=> history.push("/login")}>Regresar a Log in</button>
        </div>
    );
}

export default MenuAdmin;