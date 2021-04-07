import React, { Component } from "react";
import {NavLink} from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div>
        <div classname="content"> 
          <h2>Sección principal</h2>
          <p>Esta es la pagina principal, por lo que el archivo debe de tomarse como tal
            con el fin de evitar confusiones. Es decir, esta es la base, lo que aparece al abrir la página, y lo que llama
            a todas las otras consecuentemente.</p>
        </div>

        <div classname="conexion"> 
            <li><NavLink to="/login">Iniciar sesión</NavLink></li>
            <li><NavLink to="/registro">Crear cuenta</NavLink></li>
        </div>
      </div>
    );
  }
}
 
export default Home;