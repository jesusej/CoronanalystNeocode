import React, {useState } from "react";
import Axios from "axios";
 
function Login() {

  //Para login
 const [username, setUsername] = useState("")
 const [password, setPassword] = useState("")

 const [loginStatus, setLoginStatus] = useState("")

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
    }
  });
};


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
      <h1>{loginStatus}</h1>            
          
      </div>
    );
  }
 
export default Login;