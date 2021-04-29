import Axios from "axios";
import React, { useState } from "react";
import {useHistory} from "react-router-dom";


function Registro() {
  // Para registro
  const history = useHistory();
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
      alert("Se ha registrado exitosamente");
      //history.push("/menu_usuario");
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
   alert("Por favor ingrese una dirección de correo electrónico válida");
  }
}

    return (
      // Inicia front end de Registro
      <div className="Registro">
        <h2>Registro</h2>

        <label>Correo electrónico: </label> <br />
        <input type = "text" name="username" placeholder="micorreo@ejemplo.com" required
        onChange={(e) => {
          setUsernameReg(e.target.value);
        }}
        /> <br/> <br/>

        <label>Contraseña: </label> <br/>
        <input type = "password" name="password" placeholder="********" required
        onChange={(e) => {
          setPasswordReg(e.target.value);
        }}
        /> <br/> <br/> 
        <div className="button">
        <button onClick={validarEmail}>Registrarse</button>
        </div>

         <p className = "error">{errorStatus}</p>
      </div>
    );
  }
 
export default Registro;