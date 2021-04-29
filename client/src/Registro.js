import Axios from "axios";
import React, { useState, useContext } from "react";
import {Redirect, useHistory} from "react-router-dom";
import { idContext, idTipoCuentaContext, LoginContext } from "./Helper/Context";


function Registro() {  
  const history = useHistory();
  // Para registro
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [loggedIn, setLoggedIn] = useState('');

  const {setLoginStatus} = useContext(LoginContext);
  const {setId} = useContext(idContext);
  const {setIdTipoCuenta} = useContext(idTipoCuentaContext);

const register = () => {
  Axios.post("http://localhost:3001/register", {
    username: usernameReg,
    password: passwordReg,
  }).then((response) => {
    console.log(response);
    
    if (response.data === false)
    {
      if (usernameReg !== '' && passwordReg !== '')
        alert("El correo electrónico ya se encuentra registrado");
      else if (usernameReg === '' || passwordReg === '')
        alert("Favor de llenar los campos de correo y/o contraseña completamente antes de registrarse");
    }
    else if (response.data === true)
    {
      console.log(response);
      alert("Usuario registrado exitosamente");
      Axios.post("http://localhost:3001/login", {
        username: usernameReg,
        password: passwordReg,
      }).then((response) => {
    
        console.log(response.data);
    
        if(response.data.message) {
          setLoggedIn(false);
        } else {
            setLoginStatus(response.data[0].Usuario);

            setIdTipoCuenta(response.data[0].idTipo_De_Cuenta);
            console.log(idTipoCuentaContext);

            setLoggedIn(true);
            setId(response.data[0].idCuenta);
          }
      });
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

  if(loggedIn){
    return <Redirect to = "/menu_usuario" />
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

      </div>
    );
  }
 
export default Registro;