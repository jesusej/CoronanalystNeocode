import React, {useState } from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";

import { idContext } from "./Helper/Context";

function Encuesta () {

const history = useHistory();

//Función prueba
const [preguntas, setPreguntas] = useState("")

const encuesta = () => {
  Axios.post("http://localhost:3001/encuesta", {
  })
    .then((response) => {

      //Sección 3 - Muestra todo ordenado
      var idPregPar = 0;
      var todo = [""];
      var type = [""];
      var inciso = 'a';
      const questions = [];
      
      todo[0] = (response.data[0].idPreguntas + ". " + response.data[0].Pregunta);
      type[0] = (response.data[0].idPreguntas);
      idPregPar = response.data[0].idPreguntas + 1;

      for (var i = 0; i < response.data.length; i++){
        if (idPregPar != response.data[i].idPreguntas){
          todo.push(inciso +  ") " + response.data[i].Opcion);
          type.push(response.data[i].idOpciones);
          inciso = String.fromCharCode(inciso.charCodeAt(0) + 1);
        } else if (idPregPar == response.data[i].idPreguntas){
          todo.push(response.data[i].idPreguntas + ". " + response.data[i].Pregunta);
          type.push(idPregPar);
          idPregPar += 1;
          inciso = 'a';
          i--;
        }
      }
          
      for(i = 0; i < todo.length; i++){
        if (type[i] < 100){
          questions.push(<h3> {todo[i]} </h3>);
          idPregPar = type[i];
        } else {
          questions.push(
          <label>
            <input type="radio" name={idPregPar} value={type[i]} /> {todo[i]}
            <br />
          </label>  );
        }
      }
        
      setPreguntas(questions);
    });
  };

  const respuestas = () => {};







    return(
        <div className="Encuesta">
            <h3>Pagina de Encuesta</h3>
            <h4>Compras y estado en pandemia</h4>
            <p>Pagina donde se muestran todas las preguntas con su respuesta </p>
            <button onClick={encuesta}>Mostrar Componente</button> <br />


            {preguntas}
            
            <button onClick={()=> history.push("/menu_Usuario")}>Terminar Encuesta</button>
          </div>
    );
}

export default Encuesta;