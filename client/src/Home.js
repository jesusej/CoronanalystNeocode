import React from "react";
import {NavLink} from "react-router-dom";



function Home() {
  return(
      <div>
        <div classname="content"> 
          <h2>Sección principal</h2>
          <p>Esta es la pagina principal, por lo que el archivo debe de tomarse como tal
            con el fin de evitar confusiones. Es decir, esta es la base, lo que aparece al abrir la página, y lo que llama
            a todas las otras consecuentemente.</p>
        </div>

        <div classname="conexion"> 
            <button><NavLink to="/login">Iniciar sesión</NavLink></button><br></br>
            <button><NavLink to="/registro">Crear cuenta</NavLink></button>
        </div>
      </div>
  );
  }
 
export default Home;