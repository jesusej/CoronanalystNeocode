import React, {useState, useContext } from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";

import { idTipoCuentaContext } from "./Helper/Context";

function CrearCliente() {
    const history = useHistory();

  const [errorStatus, setErrorStatus] = useState('')
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [regResponse, setRegResponse] = useState('')
  const [delResponse, setDelResponse] = useState('')

  const {idTipoCuenta} = useContext(idTipoCuentaContext);
  
const registerClient = () => {
  Axios.post("http://localhost:3001/register_client", {
    username: usernameReg,
    password: passwordReg,
  }).then((response) => {
    console.log(response);
    if (response.data == false)
    {
        if (usernameReg !== '' && passwordReg !== '')
          alert("El correo electrónico ya se encuentra registrado");
        else if (usernameReg === '' || passwordReg === '')
          alert("Llene los campos de correo y/o contraseña completamente antes de registrarse");
      }
      else if (response.data === true)
      {
        console.log(response);
        alert("Cliente registrado exitosamente");
      }
  });
};


function validarEmail() {

  if (idTipoCuenta != 3)
  {
    alert("Solo el administrador tiene acceso a esta función");
  }
  else
  {
    var valor = usernameReg;
    var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    console.log(valor);
    if (emailRegex.test(valor)){
     //alert("La dirección de email " + valor + " es correcta.");
     console.log("La dirección de email " + valor + " es correcta.");
     registerClient();
    } else {
     //alert("La dirección de email es incorrecta.");
     console.log("La dirección de email " + valor + " es incorrecta.");
     alert("Por favor ingrese una dirección de correo electrónico válida");
    }
  }
 
}

    return (
      <div className="CrearCliente">


        <div className="centered-container__crearclient">
          Correo electrónico:
        </div>
        <div className="centered-container__crearclient">
          <input type = "text" name="username" placeholder="micorreo@ejemplo.com" required
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
          />
          </div>

        <div className="centered-container__crearclient">
          Contraseña:
        </div>
        <div className="centered-container__crearclient">
          <input type = "password" name="password" placeholder="*****" required
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
          />
        </div> 
        <div className="button">
          <button onClick={validarEmail}>Crear cuenta cliente</button>
        </div>
           
         <p className = "error">{errorStatus}</p>
      </div>
    );
  }
 
export default CrearCliente;