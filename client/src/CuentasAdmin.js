import Axios from "axios";
import {useHistory} from "react-router-dom";
import React, { useState } from "react";


function RegistroCliente() {
    const history = useHistory();

  const [errorStatus, setErrorStatus] = useState('')
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [regResponse, setRegResponse] = useState('')
  const [delResponse, setDelResponse] = useState('')

const registerClient = () => {
  Axios.post("http://localhost:3001/register_client", {
    username: usernameReg,
    password: passwordReg,
  }).then((response) => {
    console.log(response);
    if (response.data == false)
    {
        if (usernameReg !== '' && passwordReg !== '')
          setRegResponse("El correo electrónico ya se encuentra registrado");
        else if (usernameReg === '' && passwordReg === '')
          setRegResponse("Llene los campos de correo y contraseña antes de registrarse");
        else if (usernameReg === '' && passwordReg !== '')
          setRegResponse("Llene el campo de correo antes de registrarse");
        else if (usernameReg !== '' && passwordReg === '')
          setRegResponse("Llene el campo de contraseña antes de registrarse");
      }
      else if (response.data === true)
      {
        console.log(response);
        setRegResponse("Cliente registrado exitosamente");
      }
  });
};

    return (
      <div className="CrearCliente">
        <h2>Crear cuenta Cliente</h2>

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
        <button onClick={registerClient}>Crear cuenta cliente</button>
        <button onClick={()=> history.push("/menuAdmin")}>Regresar al menú de sesión</button>
        </div>
        {regResponse}
        


        {/* <div className="BorrarCliente">
        <h2>Borrar cuenta Cliente</h2>

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
        <button onClick={registerClient}>Crear cuenta cliente</button>
        <button onClick={()=> history.push("/menuAdmin")}>Regresar al menú de sesión</button>
        {delResponse}
        </div>
         
        </div>
        */}




        
         <p className = "error">{errorStatus}</p>
      </div>
    );
  }
 
export default RegistroCliente;