import React, { useContext, useState} from "react";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { LoginContext, idContext } from './Helper/Context';

 
function Login() {

  //Para login
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const {loginStatus, setLoginStatus} = useContext(LoginContext); //Manera incorrecta, cambiar este context al loggedIn
  const { setId } = useContext(idContext);

  const [tipoCuenta, setTipoCuenta] = useState("");
  const [loggedIn, setLoggedIn] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {
  
      console.log(response.data);
  
      if(response.data.message) {
        setLoginStatus(response.data.message);
        setLoggedIn(false);
      } else {
          setLoginStatus(response.data[0].Usuario);
          setTipoCuenta(response.data[0].idTipo_De_Cuenta);
          setId(response.data[0].idCuenta);
          setLoggedIn(true);
          setId(response.data[0].idCuenta);
        }
    });
  };

  // Checa si el loggedIn es verdadero para redireccionarlo al menu de Usuario (cambiar lógica para verificar tipo de cuenta)  
  if(loggedIn){
    if (tipoCuenta == 3){
      return <Redirect to = "/menuAdmin" />;
    }
    else if (tipoCuenta == 2){
      return <Redirect to = "/menuCliente" />;
    }
    else {
      return <Redirect to = "/menu_usuario" />;
    }
  }


  return (
    
    <div>
      <h2>Login</h2>
      
      <div className="centeredContainer">
        <label className="login">Correo electrónico</label> <br />
        <input type="text" placeholder="micorreo@ejemplo.com" name="user" required
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        /> <br/> <br/>

        <label className = "login">Contraseña</label> <br/> 
        <input type="password" placeholder="*******" name="pass" required
          onChange={(e) => {
            setPassword(e.target.value);
        }}
        /><br /> <br/> 

      <button onClick={login}>Log in</button> <br />  
    </div>  
        
        
    {/* Termina front end de login */}
    <h2>{loginStatus}</h2>
    <h2>{tipoCuenta}</h2>

          
    </div>
  );
}
 
export default Login;