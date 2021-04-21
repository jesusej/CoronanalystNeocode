import React from "react";
import { useHistory} from "react-router-dom";


function Home() {
  const history = useHistory();

  return(
      <div>
          <h1>Te damos la bienvenida a Coronanalyst</h1>
          <p  className = "textoBienvenida">Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global </p>
        
        <div >
          <div className = "centeredContainer">
            <button onClick={()=> history.push("/login")}>Login</button>
            <button onClick={()=> history.push("/registro")}>Registro</button>
            </div> 
        </div>
      </div>
  );
  }
 
export default Home;