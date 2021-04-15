import React from "react";
import { useHistory} from "react-router-dom";


function Home() {
  const history = useHistory();

  return(
      <div>
        <div classname="content"> 
          <h2>Sección principal</h2>
          <p>Esta es la pagina principal, por lo que el archivo debe de tomarse como tal
            con el fin de evitar confusiones. Es decir, esta es la base, lo que aparece al abrir la página, y lo que llama
            a todas las otras consecuentemente.</p>
        </div>

        <div classname="conexion"> 
          <button onClick={()=> history.push("/login")}>Login</button>
          <button onClick={()=> history.push("/registro")}>Registro</button>
        </div>
      </div>
  );
  }
 
export default Home;