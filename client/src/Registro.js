import Axios from "axios";
import React, { useState } from "react";


function Registro() {
  // Para registro
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')

const register = () => {
  Axios.post("http://localhost:3001/register", {
    username: usernameReg,
    password: passwordReg,
  }).then((response) => {
    console.log(response);
  });
};

    return (
      // Inicia front end de Registro
      <div className="Registro">
        <h2>Registro</h2>

        <label>Correo electrónico: </label> <br />
        <input type = "text" name="username" required
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }}
        /> <br/> <br/>

        <label>Contraseña: </label> <br/>
        <input type = "password" name="password" required
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }}
        /> <br/> <br/> 
        <div className="button">
        <button onClick={register}>Registrarse</button>
        </div>
         {/* Termina front end de Registro */}
      </div>
    );
  }
 
export default Registro;