import React, {useState } from "react";
import {useHistory} from "react-router-dom";
import Axios from "axios";
import { Chart } from "react-google-charts";

function Datos () {
    const history = useHistory();

    const [grafica1, setGrafica1Public] = useState("");
    // const [grafica2, setGrafica2Public] = useState("");
    // const [grafica3, setGrafica3Public] = useState("");
    // const [grafica4, setGrafica4Public] = useState("");
    // const [grafica5, setGrafica5Public] = useState("");
        

    const datos = () => {
      Axios.post("http://localhost:3001/datos", {
      })
        .then((response) => {

            var graph1 = null;
            // var graph2 = null;
            // var graph3 = null;
            // var graph4 = null;
            // var graph5 = null;

            //array con todos los datos relevantes y acomodado en caso ed faltar datos

        //grafica 1 de pregunta 1 y 6
        graph1 = <Chart
            width={500}
            height={400}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
            ['Respuesta', 'Antes de Pandemia', 'Despues de Pandemia'],
            [response.data[0].Opcion, response.data[0].total, response.data[39].total],
            [response.data[1].Opcion, response.data[1].total, response.data[38].total],
            [response.data[2].Opcion, response.data[2].total, response.data[37].total],
            [response.data[3].Opcion, response.data[3].total, response.data[40].total],
            [response.data[4].Opcion, response.data[4].total, response.data[41].total]
            ]}
            options={{
//            colors: ['', ''], //cambia color, pero no se me ocurre a que color ponerlo ahorita
            title: response.data[40].Pregunta,
            chartArea: { width: '50%' },
            hAxis: {
                title: 'Opciones',
                minValue: 0,
            },
            vAxis: {
                title: 'Número de Respuestas',
            },
            }}/>

            //grafica 2 de pregunta 4 y 9
//             graph2 = <Chart
//             width={500}
//             height={400}
//             chartType="ColumnChart"
//             loader={<div>Loading Chart</div>}
//             data={[
//             ['Respuesta', 'Antes de Pandemia', 'Despues de Pandemia'],
//             [response.data[22].Opcion, response.data[22].total, response.data[39].total],
//             [response.data[23].Opcion, response.data[23].total, response.data[38].total],
//             [response.data[24].Opcion, response.data[24].total, response.data[37].total],
//             [response.data[25].Opcion, response.data[25].total, response.data[40].total],
//             [response.data[26].Opcion, response.data[26].total, response.data[41].total]
//             [response.data[27].Opcion, response.data[27].total, response.data[39].total],
//             [response.data[28].Opcion, response.data[28].total, response.data[38].total],
//             [response.data[29].Opcion, response.data[29].total, response.data[37].total],
//             [response.data[30].Opcion, response.data[30].total, response.data[40].total],
//             [response.data[31].Opcion, response.data[31].total, response.data[41].total]
//             [response.data[32].Opcion, response.data[32].total, response.data[39].total],
//             [response.data[33].Opcion, response.data[33].total, response.data[38].total],
//             [response.data[34].Opcion, response.data[34].total, response.data[37].total],
//             [response.data[35].Opcion, response.data[35].total, response.data[40].total],
//             [response.data[36].Opcion, response.data[36].total, response.data[41].total]
            
//             ]}
//             options={{
// //            colors: ['', ''], //cambia color, pero no se me ocurre a que color ponerlo ahorita
//             title: response.data[22].Pregunta,
//             chartArea: { width: '50%' },
//             hAxis: {
//                 title: 'Opciones',
//                 minValue: 0,
//             },
//             vAxis: {
//                 title: 'Número de Respuestas',
//             },
//             }}/>

//             //grafica 3 de pregunta 11
//             graph3 = <Chart
//             width={500}
//             height={400}
//             chartType="ColumnChart"
//             loader={<div>Loading Chart</div>}
//             data={[
//             ['Respuesta', 'Antes de Pandemia', 'Despues de Pandemia'],
//             [response.data[0].Opcion, response.data[0].total, response.data[39].total],
//             [response.data[1].Opcion, response.data[1].total, response.data[38].total],
//             [response.data[2].Opcion, response.data[2].total, response.data[37].total],
//             [response.data[3].Opcion, response.data[3].total, response.data[40].total],
//             [response.data[4].Opcion, response.data[4].total, response.data[41].total]
//             ]}
//             options={{
// //            colors: ['', ''], //cambia color, pero no se me ocurre a que color ponerlo ahorita
//             title: response.data[0].Pregunta,
//             chartArea: { width: '50%' },
//             hAxis: {
//                 title: 'Opciones',
//                 minValue: 0,
//             },
//             vAxis: {
//                 title: 'Número de Respuestas',
//             },
//             }}/>

//             //grafica 4 de pregunta 2 y 7
//             graph4 = <Chart
//             width={500}
//             height={400}
//             chartType="ColumnChart"
//             loader={<div>Loading Chart</div>}
//             data={[
//             ['Respuesta', 'Antes de Pandemia', 'Despues de Pandemia'],
//             [response.data[0].Opcion, response.data[0].total, response.data[39].total],
//             [response.data[1].Opcion, response.data[1].total, response.data[38].total],
//             [response.data[2].Opcion, response.data[2].total, response.data[37].total],
//             [response.data[3].Opcion, response.data[3].total, response.data[40].total],
//             [response.data[4].Opcion, response.data[4].total, response.data[41].total]
//             ]}
//             options={{
// //            colors: ['', ''], //cambia color, pero no se me ocurre a que color ponerlo ahorita
//             title: response.data[0].Pregunta,
//             chartArea: { width: '50%' },
//             hAxis: {
//                 title: 'Opciones',
//                 minValue: 0,
//             },
//             vAxis: {
//                 title: 'Número de Respuestas',
//             },
//             }}/>

//             //grafica 5 de pregunta 3 y 8
//             graph5 = <Chart
//             width={500}
//             height={400}
//             chartType="ColumnChart"
//             loader={<div>Loading Chart</div>}
//             data={[
//             ['Respuesta', 'Antes de Pandemia', 'Despues de Pandemia'],
//             [response.data[0].Opcion, response.data[0].total, response.data[39].total],
//             [response.data[1].Opcion, response.data[1].total, response.data[38].total],
//             [response.data[2].Opcion, response.data[2].total, response.data[37].total],
//             [response.data[3].Opcion, response.data[3].total, response.data[40].total],
//             [response.data[4].Opcion, response.data[4].total, response.data[41].total]
//             ]}
//             options={{
// //            colors: ['', ''], //cambia color, pero no se me ocurre a que color ponerlo ahorita
//             title: response.data[0].Pregunta,
//             chartArea: { width: '50%' },
//             hAxis: {
//                 title: 'Opciones',
//                 minValue: 0,
//             },
//             vAxis: {
//                 title: 'Número de Respuestas',
//             },
//             }}/>


            setGrafica1Public(graph1);
            // setGrafica2Public(graph2);
            // setGrafica3Public(graph3);
            // setGrafica4Public(graph4);
            // setGrafica5Public(graph5);
        });
      };

    datos()
    return(
        <div className="Datos">
            <h3> Pagina de Datos</h3>
            <p>Pagina donde se muestran los datos </p>
            <div className="Graficas">
                {grafica1}
                {/* {grafica2}
                {grafica3}
                {grafica4}
                {grafica5} */}
            </div>
            <button onClick={()=> history.push("/menu_Usuario")}>Regresar al menú principal</button>
          </div>
    );
}

export default Datos;