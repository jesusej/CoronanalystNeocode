import Axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom";


function Registro() {  
  const history = useHistory();
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

function validarEmail() {
  var valor = usernameReg;
  var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  console.log(valor);
  if (emailRegex.test(valor)){
   //alert("La dirección de email " + valor + " es correcta.");
   console.log("La dirección de email " + valor + " es correcta.");
   register();
  } else {
   //alert("La dirección de email es incorrecta.");
   console.log("La dirección de email " + valor + " es incorrecta.");
   setRegResponse("Por favor ingrese una dirección de correo electrónico válida");
  }
}

    return (
      // Inicia front end de Registro
      <div className="main">
        <h1>Registro</h1>
        <div className="centered-container__login">
          Correo electrónico:
        </div>
        <div className="centered-container__login">
          <input type = "text" placeholder="micorreo@ejemplo.com" name="username" required
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          />
        </div>
        <div className="centered-container__login">
          Contraseña:
        </div>
        <div className="centered-container__login">
          <input type = "password" placeholder="*****" name="password" required
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          />
        </div>
        <div className="centered-container">
          <div className="button">      
            <button onClick={()=> history.push("/")}>Home</button>
            <button onClick={validarEmail}>Registrarse</button>
          </div>
        </div>
        {regResponse}

        <p className = "error">{errorStatus}</p>
      </div>
    );
  }
 
export default Registro;