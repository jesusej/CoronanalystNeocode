// Código mal hecho, se necesita mejorar. Intentar implementar clases y hacer un array de esos
import React, { useState, useContext, Component } from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";

import { idContext } from "./Helper/Context";

function Encuesta () {

const history = useHistory();

//Función prueba
const [preguntas, setPreguntas] = useState("");
const [respuestasPublic, setRespuestasPublic] = useState("");
const [optionsPublic, setOptionsPublic] = useState("");

const {id} = useContext(idContext);

var respuestas = [/*Guarda una clase respuesta*/];
var options = [];

const encuesta = () => {
  Axios.post("http://localhost:3001/encuesta", {
  })
    .then((response) => {

      //Sección 3 - Muestra todo ordenado
      var idPregPar = 0;
      var todo = [""];
      var id = [""];
      var type = [""];
      var inciso = 'a';
      const questions = [];
      
      todo[0] = (response.data[0].idPreguntas + ". " + response.data[0].Pregunta);
      id[0] = (response.data[0].idPreguntas);
      type[0] = (response.data[0].Tipo);
      idPregPar = response.data[0].idPreguntas + 1;

      for (var i = 0; i < response.data.length; i++){
        if (idPregPar != response.data[i].idPreguntas){
          todo.push(inciso +  ") " + response.data[i].Opcion);
          id.push(response.data[i].idOpciones);
          inciso = String.fromCharCode(inciso.charCodeAt(0) + 1);
        } else if (idPregPar == response.data[i].idPreguntas){
          todo.push(response.data[i].idPreguntas + ". " + response.data[i].Pregunta);
          id.push(idPregPar);
          type.push(response.data[i].Tipo);
          idPregPar += 1;
          inciso = 'a';
          i--;
        }
      }
      
      for(i = 0; i < todo.length; i++){
        if (id[i] < 100){
          questions.push(<h3> {todo[i]} </h3>);
          idPregPar = id[i];
          respuestas.push('0');
          options.push('0');
        } else {
          questions.push(
          <label>
            <input type={type[idPregPar-1]} name={idPregPar} id={id[i]} value={todo[i]}
            onClick={(e) => {
              const index = e.target.name - 1;

              options[index] = e.target.id;
              setOptionsPublic(options);
              
              respuestas[index] = e.target.value;
              setRespuestasPublic(respuestas);

            }}/> {todo[i]}
            <br />
          </label> 
          );
        }
      }
      
      console.log(options);
      console.log(respuestas);
      setPreguntas(questions);
      setRespuestasPublic(respuestas);
      setOptionsPublic(options);
    });
  };

  const sendAnswers = () => {
    Axios.post("http://localhost:3001/resultados", {
      id: id,
      options: optionsPublic,
      answers: respuestasPublic,
    }).then((response) => {
      console.log(response);
    });
  };

  if(!preguntas){
    encuesta();
  }

    return(
        <div className="Encuesta">
            <h2>Pagina de Encuesta</h2>


            <h4>Compras y estado en pandemia</h4>
            <p>Pagina donde se muestran todas las preguntas con su respuesta </p>


            <ul>
              {preguntas}
            </ul>

            
            <br /><br />
            <button onClick={sendAnswers}>Terminar Encuesta</button>
          </div>
    );
}

export default Encuesta;