import React, {useState, useContext } from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";
import Popup from "reactjs-popup";
import './PopUp.css';
import ReactDom from 'react-dom';
import CerrarSesion from "./CerrarSesion";
import { Redirect } from "react-router-dom";

import { idContext } from "./Helper/Context";

function MenuUsuario () {

  const history = useHistory();
  const [dataRegistered, setDataRegistered] = useState("");
  const [answersRegistered, setAnswersRegistered] = useState("");

  const {id} = useContext(idContext);

  const checkAnswers = () => {
    console.log("El id es igual a ",id);

      Axios.post("http://localhost:3001/checkAnswers", {
        id: id,

  }).then((response) => {
    console.log(response);

    if(response.data === false) {
      setAnswersRegistered(false);
      console.log("El usuario no respuestas registradas");

    } else if (response.data === true) {
        setAnswersRegistered(true);
        console.log("El usuario si tiene respuestas registradas");
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
        setDataRegistered(false);
        console.log("El usuario no tiene datos personales registrados");

      } else if (response.data === true) {
          setDataRegistered(true);
          console.log("El usuario si tiene datos personales registrados");
          checkAnswers();
      }
        
    });
  };

  if ((dataRegistered === false) && (answersRegistered === false))
  {
    //return <Redirect to = "/datos_personales" />;
  }
  else if ((dataRegistered === true) && (answersRegistered === false))
  {
    return <Redirect to = "/encuesta" />;
  }
  else if ((dataRegistered === true) && (answersRegistered === true))
  {
    return <Redirect to = "/encuesta" />;//Borrar
    //console.log("El usuario tiene datos personales y respuestas registradas");
  }






    return(

          <div className="menuusuario">
            <h2>Menú de Usuario</h2> 
            
            <div className="centeredContainer">
              <button onClick={checkPersonalData}> Encuesta</button>
              <button onClick={()=> history.push("/datos")}>Visualizar Datos</button>
              <Popup trigger={<button> Trigger Cerrar sesión</button>}>
                  {CerrarSesion()}
              </Popup>
              <button onClick={()=> history.push("/login")}>Regresar a Log in</button>
             </div>
            {id}
          </div>

       
    );
}

export default MenuUsuario;