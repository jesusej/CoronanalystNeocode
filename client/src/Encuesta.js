import React, { useState, useContext } from "react";
import Axios from "axios";
import {Redirect, useHistory} from "react-router-dom";

import { idContext } from "./Helper/Context";


function Encuesta () {

const history = useHistory();

const [preguntas, setPreguntas] = useState("");
const [respuestasPublic, setRespuestasPublic] = useState("");
const [registroExitoso, setRegistroExitoso] = useState("");

const [isCheckedPublic, setIsCheckedPublic] = useState("");


const {id} = useContext(idContext);

var respuestas = [/*Guarda una clase respuesta*/];

var isChecked = [];



class Answer {
  constructor(idOpcion, value, idPreg){
    this.idPreg = idPreg;
    this.idOpcion = idOpcion;
    this.value = value;
  }
  
  isItMe(idOpcion){ return this.idOpcion == idOpcion ? true : false }

  sameQuestion(idPreg){ return this.idPreg == idPreg ? true : false }
}

function itExists(id) {
  for (var i = 0; i < respuestas.length; i++){
    if (respuestas[i].isItMe(id))
      return i;
  }
  return -1;
}

function isFromTheSame(id) {
  for (var i = 0; i < respuestas.length; i++){
    if (respuestas[i].sameQuestion(id)){
      return i;
    }
  }
  return -1;
}


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
      isChecked[0] = false;

      for (var i = 0; i < response.data.length; i++){
        if (idPregPar != response.data[i].idPreguntas){
          todo.push(inciso +  ") " + response.data[i].Opcion);
          id.push(response.data[i].idOpciones);
          inciso = String.fromCharCode(inciso.charCodeAt(0) + 1);
        } else if (idPregPar == response.data[i].idPreguntas){
          todo.push(response.data[i].idPreguntas + ". " + response.data[i].Pregunta);
          id.push(idPregPar);
          type.push(response.data[i].Tipo);
          isChecked.push(false);
          idPregPar += 1;
          inciso = 'a';
          i--;
        }
      }
      
      for(i = 0; i < todo.length; i++){
        if (id[i] < 100){
          questions.push(<h3 key = {"q" + idPregPar}> {todo[i]} </h3>);
          idPregPar = id[i];
        } else {
          questions.push(
          <label key = {"answ" + id[i]}>
            <input type={ type[idPregPar-1] } name={ idPregPar } id= {id[i] } value={ todo[i] } readOnly
            onClick={(e) => {
              const index = e.target.name - 1;

              if(isChecked[index] == true){

                if (e.target.type == "radio"){
                  respuestas[isFromTheSame(e.target.name)] = new Answer(e.target.id, e.target.value, e.target.name);
                }

                else {
                  const place = itExists(e.target.id);

                  if (place > -1){
                    respuestas.splice(place, 1);

                    if(isFromTheSame(e.target.name) < 0){
                      isChecked[index] = false;
                      console.log(isChecked);
                    }

                  } else {
                    respuestas.push(new Answer(e.target.id, e.target.value, e.target.name));
                  }

                }
              } else{
                isChecked[index] = true;
                respuestas.push(new Answer(e.target.id, e.target.value, e.target.name));
              }

              setRespuestasPublic(respuestas);
              setIsCheckedPublic(isChecked);

            }}/> {todo[i]}
            <br />
          </label> 
          );
        }
      }

      setPreguntas(questions);
    });
  };


  
  const sendAnswers = () => {

    console.log("respuestasPublic");
    console.log(respuestasPublic);
    console.log("isCheckedPublic");
    console.log(isCheckedPublic);
    
    var callDatabase = true;

    if (respuestasPublic){

      for (var i = 0; i < isCheckedPublic.length; i++)
      {
        if (isCheckedPublic[i] == false)
        {
          callDatabase = false;
        }
      }


      if (callDatabase == true)
      {
        Axios.post("http://localhost:3001/resultados", {
          id: id,
          answers: respuestasPublic,

        }).then((response) => {

          console.log("response de axios");
          console.log(response);

          if (response.data == true)
          {
            setRegistroExitoso(true);
          }
          else if (response.data == false)
          {
            setRegistroExitoso(false);
            alert("Por favor inicie sesión");
          }
          
        });
      }
      else if (callDatabase == false)
      {
        alert("Por favor responda a todas las preguntas antes de terminar la encuesta")
      }
    }
      else 
      {
        alert("Por favor responda a todas las preguntas antes de terminar la encuesta");
      }
    
  };

  if(!preguntas){
    encuesta();
  }
  

  if(registroExitoso == true){
    alert("Ha registrado las respuestas correctamente");
    return <Redirect to ="/menu_usuario" />
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