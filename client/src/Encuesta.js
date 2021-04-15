import React, {useState } from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";

function Encuesta () {

  
const history = useHistory();

//Función prueba
const [preguntas, setPreguntas] = useState("")

const encuesta = () => {
  Axios.post("http://localhost:3001/encuesta", {
  }).then((response) => {

    //Mostrar solo 1 de las 3 secciones de código a la vez

    //Sección uno: Este while muestra las preguntas
    // var i = 0;
    // var bdLength = response.data.length;
    // var idPregPar = 0;
    // var preg = [""]
    //
    //
    //   while (i < bdLength){
    //     if (i == 0) {
    //       preg[0] = (response.data[i].idPreguntas + ". " + response.data[i].Pregunta);
    //       idPregPar = response.data[i].idPreguntas + 1;
    //       console.log(response.data[i].idPreguntas + ". " + response.data[i].Pregunta);

    //     } else {
    //         if (idPregPar == response.data[i].idPreguntas){
    //             preg.push(response.data[i].idPreguntas + ". " + response.data[i].Pregunta);
    //             console.log(response.data[i].idPreguntas + ". " + response.data[i].Pregunta);
    //             idPregPar += 1;
    //         }
    //     }
    //     i++;
    //   }
    //     setPreguntas(preg.map((number) => <li>{number}</li>));

    //Sección 2: Este while muestra las opciones
    // var i = 0;
    // var bdLength = response.data.length;
    // var idPregPar = 0;
    // var opc = [""];
    // var inciso = 'a';

    // while (i < bdLength){
    //     if (i == 0) {
    //         opc[0] = ("Pregunta " + response.data[i].idPreguntas + " - " + inciso +  ") " + response.data[i].Opcion);
    //         console.log("Pregunta " + response.data[i].idPreguntas + " - " + inciso +  ") " + response.data[i].Opcion);
    //         inciso = String.fromCharCode(inciso.charCodeAt(0) + 1);
    //         idPregPar = response.data[i].idPreguntas + 1;

    //     } else {
    //         if (idPregPar != response.data[i].idPreguntas){
    //             opc.push("Pregunta " + response.data[i].idPreguntas + " - " + inciso +  ") " + response.data[i].Opcion);
    //             console.log("Pregunta " + response.data[i].idPreguntas + " - " + inciso +  ") " + response.data[i].Opcion);
    //             inciso = String.fromCharCode(inciso.charCodeAt(0) + 1);
                
    //         } else if (idPregPar == response.data[i].idPreguntas){
    //             idPregPar += 1;
    //             inciso = 'a';
    //             continue;
    //         }
    //     }
    //     i++;
    //     }
    //     setPreguntas(opc.map((number) => <li>{number}</li>));


    //Sección 3 - Muestra todo ordenado
    var i = 0;
    var bdLength = response.data.length;
    var idPregPar = 0;
    var todo = [""];
    var inciso = 'a';


        while (i < bdLength){
        if (i == 0) {
          todo[0] = (response.data[i].idPreguntas + ". " + response.data[i].Pregunta);
          idPregPar = response.data[i].idPreguntas + 1;
          console.log(response.data[i].idPreguntas + ". " + response.data[i].Pregunta);

          todo[1] = (inciso +  ") " + response.data[i].Opcion);
          console.log(inciso +  ") " + response.data[i].Opcion);
          inciso = String.fromCharCode(inciso.charCodeAt(0) + 1);
          idPregPar = response.data[i].idPreguntas + 1;
          i++;

        } else {
            if (idPregPar != response.data[i].idPreguntas){
                todo.push(inciso +  ") " + response.data[i].Opcion);
                console.log(inciso +  ") " + response.data[i].Opcion);
                inciso = String.fromCharCode(inciso.charCodeAt(0) + 1);
                
            } else if (idPregPar == response.data[i].idPreguntas){
                todo.push(response.data[i].idPreguntas + ". " + response.data[i].Pregunta);
                console.log(response.data[i].idPreguntas + ". " + response.data[i].Pregunta);
                idPregPar += 1;
                inciso = 'a';
                continue;
            }
        }
        i++;
      }
        setPreguntas(todo.map((number) => <li>{number}</li>));
  });
};







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