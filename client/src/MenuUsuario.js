import React, {useState, useContext } from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";
import Popup from "reactjs-popup";
import './PopUp.css';
import CerrarSesion from "./CerrarSesion";
import { Redirect } from "react-router-dom";

import { LoginContext, idContext } from "./Helper/Context";

function MenuUsuario () {

  const history = useHistory();
  const [dataRegistered, setDataRegistered] = useState("");
  const [answersRegistered, setAnswersRegistered] = useState("");

  const {loginStatus, setLoginStatus} = useContext(LoginContext);
  const {id, setId} = useContext(idContext);

  const checkAnswers = () => {
    console.log("El id es igual a ",id);

      Axios.post("http://localhost:3001/checkAnswers", {
        id: id,

  }).then((response) => {
    console.log(response);

    if(response.data === false) {
      console.log("El usuario no tiene respuestas registradas");
      setAnswersRegistered(false);
      history.push("/encuesta")

    } else if (response.data === true) {
      console.log("El usuario si tiene respuestas registradas");
      setAnswersRegistered(true);
      alert("Ya cuenta con datos personales y respuestas registradas");
    }

  });
  };

  const checkPersonalData = () => {

    console.log("El id es igual a ",id);

      Axios.post("http://localhost:3001/checkPersonalData", {
        id: id,
      
  }).then((response) => {
      console.log(response);

      if(response.data === false) {
        console.log("El usuario no tiene datos personales registrados");
        setDataRegistered(false);
        setAnswersRegistered(false);
        history.push("/datos_personales");

      } else if (response.data === true) {
        setDataRegistered(true);
        console.log("El usuario si tiene datos personales registrados");
        checkAnswers();
      }
        
    });
  };

  const checkVisualize = () => {
    console.log("El id es igual a ",id);

      Axios.post("http://localhost:3001/checkAnswers", {
        id: id,

  }).then((response) => {
    console.log(response);

    if(response.data === false) {
      console.log("El usuario no tiene respuestas registradas");
      alert("Es necesario que conteste la encuesta para poder ver los datos globales");

    } else if (response.data === true) {
      console.log("El usuario si tiene respuestas registradas");
      history.push("/datos");
    }

  });
  };


    return(

          <div className="menuusuario">
            <h2>Menú de Usuario</h2> 
            
            <div className="centeredContainer">
              <button onClick={checkPersonalData}> Encuesta</button>
              <button onClick={checkVisualize}>Visualizar Datos</button>
              <Popup trigger={<button>Cerrar sesión</button>} position="center">
                  <LoginContext.Provider value = {{loginStatus, setLoginStatus}} >
                    <idContext-Provider value = {{id, setId}} >
                      {CerrarSesion()}
                    </idContext-Provider>
                  </LoginContext.Provider>
              </Popup>
             </div>
          </div>

       
    );
}

export default MenuUsuario;