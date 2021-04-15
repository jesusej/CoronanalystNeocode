import React, {useState } from "react";
import {NavLink} from "react-router-dom";

function MenuUsuario () {
    return(

        <div>

          <div className="menuusuario">
            <button><NavLink to="/datos_personales">Encuesta</NavLink></button><br></br>
            <button><NavLink to="/datos">Visualizar Datos</NavLink></button><br></br>
            <button><NavLink to="/cerrar_sesion">Cerrar Sesión</NavLink></button><br></br>
            <button>< NavLink to="/login" >Regresar a Log in</NavLink></button> <br></br>
          </div>
       
        </div>
    );
}

export default MenuUsuario;