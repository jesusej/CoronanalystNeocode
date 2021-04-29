import React from "react";
import { useHistory} from "react-router-dom";


function Home() {
  const history = useHistory();

  return(
      <div className="main">
        <div className = "titulo"><h1>Home</h1></div>
            <div  className = "main__text">
            <div>Te damos la bienvenida a Coronanalyst</div>
              Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global Gracias por formar parte de PK Global </div>
            <div className = "centered-container">
              <button onClick={()=> history.push("/login")}>Login</button>
              <button onClick={()=> history.push("/registro")}>Registro</button>
              <br></br><br></br>
            </div> 
      </div>

  );
  }
 
export default Home;