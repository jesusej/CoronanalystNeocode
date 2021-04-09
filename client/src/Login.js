import React, {useState} from "react";
import Axios from "axios";
import {NavLink, Redirect, useHistory} from "react-router-dom";

 
function Login() {

  let history = useHistory();
  //Para login
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [loginStatus, setLoginStatus] = useState("")
  const [tipoCuenta, setTipoCuenta] = useState("")

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: username,
      password: password,
    }).then((response) => {

      console.log(response.data);

      if(response.data.message) {
        setLoginStatus(response.data.message);
      } else {
          setLoginStatus(response.data[0].Usuario);
          //setTipoCuenta(response.data[0].idTipo_De_Cuenta);
          if (response.data[0].idTipo_De_Cuenta === 1){
            setTipoCuenta(response.data[0].idTipo_De_Cuenta);
            setTipoCuenta("Es cuenta usuario");
          } else if (response.data[0].idTipo_De_Cuenta === 2) {
            setTipoCuenta("Es cuenta cliente");
          } else if (response.data[0].idTipo_De_Cuenta === 3) {
            setTipoCuenta("Es cuenta admin");
          }
        }
    });
  };

  // Checa si el loginStatus es verdadero para redireccionarlo al menu de Usuario (cambiar lógica para verificar tipo de cuenta)  
  if(loginStatus){
    return <Redirect to="/menu_Usuario" />;
  }


  return (
    
    <div className="Login">
      {/* Inicia Front end de login*/}
      <h2>Login</h2>

      <label>Correo electrónico</label> <br />
      <input type="text" placeholder="micorreo@ejemplo.com" name="user" required
       onChange={(e) => {
        setUsername(e.target.value);
      }}
      /> <br/> <br/>

      <label>Contraseña</label> <br/> 
      <input type="password" placeholder="*******" name="pass" required
        onChange={(e) => {
          setPassword(e.target.value);
      }}
      /><br /> <br/> 

      <div className="button">
          <button onClick={login}>Log in</button> <br />
            
                   
      </div>
        
    {/* Termina front end de login */}
    <h2>{loginStatus}</h2>
    <h2>{tipoCuenta}</h2>

                
    </div>
  );
}
 
export default Login;