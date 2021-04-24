import Axios from "axios";
import React, { useState } from "react";


function Registro() {
  // Para registro
  const [errorStatus, setErrorStatus] = useState('')
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [regResponse, setRegResponse] = useState('')

const register = () => {
  Axios.post("http://localhost:3001/register", {
    username: usernameReg,
    password: passwordReg,
  }).then((response) => {
    console.log(response);
    
    if (response.data === false)
    {
      if (usernameReg !== '' && passwordReg !== '')
        setRegResponse("El correo electrónico ya se encuentra registrado");
      else if (usernameReg === '' || passwordReg === '')
        setRegResponse("Favor de llenar los campos de correo y/o contraseña completamente antes de registrarse");
    }
    else if (response.data === true)
    {
      console.log(response);
      setRegResponse("Usuario registrado exitosamente");
    }
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
        {regResponse}

         <p className = "error">{errorStatus}</p>
      </div>
    );
  }
 
export default Registro;