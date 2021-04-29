import React, { useContext, useState} from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { LoginContext, idContext } from './Helper/Context';
import {useHistory} from "react-router-dom";


import { idContext, LoginContext, idTipoCuentaContext } from './Helper/Context';

function Login() {

  const history = useHistory();

  //Para login
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { setLoginStatus} = useContext(LoginContext); //Manera incorrecta, cambiar este context al loggedIn
  const { setId } = useContext(idContext);
  const {setIdTipoCuenta} = useContext(idTipoCuentaContext);

  const [tipoCuenta, setTipoCuenta] = useState("");
  const [loggedIn, setLoggedIn] = useState("");
  const [errorStatus, setErrorStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
  
      console.log(response.data);
  
      if(response.data.message) {
        setErrorStatus(response.data.message);
        setLoggedIn(false);
      } else {
          setLoginStatus(response.data[0].Usuario);
          setTipoCuenta(response.data[0].idTipo_De_Cuenta);

          setIdTipoCuenta(response.data[0].idTipo_De_Cuenta);
          console.log(idTipoCuentaContext);

          setLoggedIn(true);
          setId(response.data[0].idCuenta);
        }
    });
  };

  // Checa si el loggedIn es verdadero para redireccionarlo al menu de Usuario  
  if(loggedIn){
    if (tipoCuenta == 3){
      return <Redirect to = "/menu_admin" />;
    }
    else if (tipoCuenta == 2){
      return <Redirect to = "/menu_cliente" />;
    }
    else {
      return <Redirect to = "/menu_usuario" />;
    }
  }


  return (
    
    <div className = "main">
      
      <div className = "titulo"><h1>Login</h1></div>
      <h2>Un gusto tenerte con nosotros {tipoCuenta}</h2>
      <h2>{loginStatus}</h2>
      <div className="centered-container__login">
        Correo electrónico
        </div>
      <div className="centered-container__login">
        <input type="text" placeholder="micorreo@ejemplo.com" name="user" required

        onChange={(e) => {
          setUsername(e.target.value);
        }}

        /> 
      </div> 

      <div className="centered-container__login">
        Contraseña
        </div>
      <div className="centered-container__login">
        <input type="password" placeholder="*****" name="pass" required

          onChange={(e) => {
            setPassword(e.target.value);
        }}
        />

      <div className = "centered-container">
        <button onClick={()=> history.push("/")}>Home</button>
        <button onClick={login}>Log in</button>
      </div>
    </div>  
        
        
    {/* Termina front end de login */}
    <h2>{errorStatus}</h2>

          
    </div>

    
  );
}
 
export default Login;