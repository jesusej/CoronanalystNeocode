import React, {useContext, useState, useEffect } from "react";
import {useHistory, Redirect} from "react-router-dom";
import Axios from "axios";
import { Chart } from "react-google-charts";
import { idContext, idTipoCuentaContext } from './Helper/Context';


function Datos () {
    const history = useHistory();
    const {idTipoCuenta} = useContext(idTipoCuentaContext);
    const {id} = useContext(idContext);


    const checkIdTipoCuenta = () => {
        
        if (idTipoCuenta === 1)
        {
            history.push("/menu_usuario");
        }
        else if (idTipoCuenta === 2)
        {
            history.push("/menu_cliente");
        }
        else if (idTipoCuenta === 3)
        {
            history.push("/menu_admin");
        }
        else if (!idTipoCuenta)
        {
            alert("No has iniciado sesión, se redireccionará a la página de iniciar sesión");
            history.push("/login");
        }
    };

    const [grafica1, setGrafica1Public] = useState("");
    const [grafica2, setGrafica2Public] = useState("");
    const [grafica3, setGrafica3Public] = useState("");
    const [grafica4, setGrafica4Public] = useState("");
    const [grafica5, setGrafica5Public] = useState("");
        

    const datos = () => {

    if (!id)
    {
        alert("Inicia sesión para ver los resultados de la encuesta");
        history.push("/login");
    }
    else
    {
        Axios.post("http://localhost:3001/checkPersonalData", {
            id: id,
        })
        .then((response1) => {

            if((response1.data == false) && (idTipoCuenta == 1))
            {
                alert("Para poder ver los datos, es necesario que contestes antes la encuesta");
            }
            else
            {
                Axios.post("http://localhost:3001/checkAnswers", {
            id: id,
                })
                    .then((response2) => {

                    if((response2.data == false) && (idTipoCuenta == 1))
                    {
                        alert("Para poder ver los datos, es necesario que contestes antes la encuesta");
                    }
                    else
                    {
                        Axios.post("http://localhost:3001/datos", {
                })
                  .then((response) => {
          
                      var graph1 = null;
                      var graph2 = null;
                      var graph3 = null;
                      var graph4 = null;
                      var graph5 = null;
          
                      //array con todos los datos relevantes y acomodado en caso ed faltar datos
          
                  //grafica 1 de pregunta 1 y 6
                  graph1 = <Chart
                      chartType="ColumnChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                      ['Respuesta', 'Antes de Pandemia', 'Despues de Pandemia'],
                      [response.data[0].Opcion, response.data[0].total, response.data[37].total],
                      [response.data[1].Opcion, response.data[1].total, response.data[38].total],
                      [response.data[2].Opcion, response.data[2].total, response.data[39].total],
                      [response.data[3].Opcion, response.data[3].total, response.data[40].total],
                      [response.data[4].Opcion, response.data[4].total, response.data[41].total]
                      ]}
                      options={{
                      backgroundColor: "#f5f5f5",
          //            colors: ['', ''], //cambia color, pero no se me ocurre a que color ponerlo ahorita
                      title: response.data[40].Pregunta,
                      width: 600,
                      height: 500,
                      chartArea: { width: '43%' },
                      hAxis: {
                          title: 'Opciones',
                          minValue: 0,
                      },
                      vAxis: {
                          title: 'Número de Respuestas',
                      },
                      }}/>
          
                      //grafica 2 de pregunta 4 y 9
                      graph2 = <Chart
                      chartType="ColumnChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                      ['Respuesta', 'Antes de Pandemia', 'Despues de Pandemia'],
                      [response.data[22].Opcion, response.data[22].total, response.data[59].total],
                      [response.data[23].Opcion, response.data[23].total, response.data[60].total],
                      [response.data[24].Opcion, response.data[24].total, response.data[61].total],
                      [response.data[25].Opcion, response.data[25].total, response.data[62].total],
                      [response.data[26].Opcion, response.data[26].total, response.data[63].total],
                      [response.data[27].Opcion, response.data[27].total, response.data[64].total],
                      [response.data[28].Opcion, response.data[28].total, response.data[65].total],
                      [response.data[29].Opcion, response.data[29].total, response.data[66].total],
                      [response.data[30].Opcion, response.data[30].total, response.data[67].total],
                      [response.data[31].Opcion, response.data[31].total, response.data[68].total],
                      [response.data[32].Opcion, response.data[32].total, response.data[69].total],
                      [response.data[33].Opcion, response.data[33].total, response.data[70].total],
                      [response.data[34].Opcion, response.data[34].total, response.data[71].total],
                      [response.data[35].Opcion, response.data[35].total, response.data[72].total],
                      [response.data[36].Opcion, response.data[36].total, response.data[73].total]
                      
                      ]}
                      options={{
                      backgroundColor: "#f5f5f5",
          //            colors: ['', ''], //cambia color, pero no se me ocurre a que color ponerlo ahorita
                      title: response.data[22].Pregunta,
                      width: 1100,
                      height: 500,
                      // chartArea: { width: '43%' },
                      hAxis: {
                          title: 'Opciones',
                          minValue: 0,
                      },
                      vAxis: {
                          title: 'Número de Respuestas',
                      },
                      }}/>
          
                      //grafica 3 de pregunta 11
                      graph3 = <Chart
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                      ['Respuesta', 'Gasto'],
                      [response.data[74].Opcion, response.data[74].total],
                      [response.data[75].Opcion, response.data[75].total],
                      [response.data[76].Opcion, response.data[76].total],
                      [response.data[77].Opcion, response.data[77].total],
                      [response.data[78].Opcion, response.data[78].total],
                      [response.data[79].Opcion, response.data[79].total]
                      ]}
                      options={{
                      backgroundColor: "#f5f5f5",
          //            colors: ['', ''], //cambia color, pero no se me ocurre a que color ponerlo ahorita
                      title: response.data[79].Pregunta,
                      width: 600,
                      height: 500,
                     hAxis: {
                          title: 'Opciones',
                          minValue: 0,
                      },
                      vAxis: {
                          title: 'Número de Respuestas',
                      },
                      }}/>
          
                      //grafica 4 de pregunta 2 y 7
                      graph4 = <Chart
                      chartType="ColumnChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                      ['Respuesta', 'Antes de Pandemia', 'Despues de Pandemia'],
                      [response.data[5].Opcion, response.data[5].total, response.data[43].total],
                      [response.data[6].Opcion, response.data[6].total, response.data[44].total],
                      [response.data[7].Opcion, response.data[7].total, response.data[45].total],
                      [response.data[8].Opcion, response.data[8].total, response.data[46].total],
                      [response.data[9].Opcion, response.data[9].total, response.data[47].total],
                      [response.data[10].Opcion, response.data[10].total, response.data[48].total],
                      [response.data[11].Opcion, response.data[11].total, response.data[49].total],
                      [response.data[12].Opcion, response.data[12].total, response.data[50].total]
                      ]}
                      options={{
                      backgroundColor: "#f5f5f5",
          //            colors: ['', ''], //cambia color, pero no se me ocurre a que color ponerlo ahorita
                      title: response.data[6].Pregunta,
                      width: 600,
                      height: 500,
                      hAxis: {
                          title: 'Opciones',
                          minValue: 0,
                      },
                      vAxis: {
                          title: 'Número de Respuestas',
                      },
                      }}/>
          
                      //grafica 5 de pregunta 3 y 8
                      graph5 = <Chart
                      chartType="ColumnChart"
                      loader={<div>Loading Chart</div>}
                      data={[
                      ['Respuesta', 'Antes de Pandemia', 'Despues de Pandemia'],
                      [response.data[13].Opcion, response.data[13].total, response.data[50].total],
                      [response.data[14].Opcion, response.data[14].total, response.data[51].total],
                      [response.data[15].Opcion, response.data[15].total, response.data[52].total],
                      [response.data[16].Opcion, response.data[16].total, response.data[53].total],
                      [response.data[17].Opcion, response.data[17].total, response.data[54].total],
                      [response.data[18].Opcion, response.data[18].total, response.data[55].total],
                      [response.data[19].Opcion, response.data[19].total, response.data[56].total],
                      [response.data[20].Opcion, response.data[20].total, response.data[57].total],
                      [response.data[21].Opcion, response.data[21].total, response.data[58].total]
                      ]}
                      options={{
                          backgroundColor: "#f5f5f5",
          //            colors: ['', ''], //cambia color, pero no se me ocurre a que color ponerlo ahorita
                      title: response.data[13].Pregunta,
                      width: 600,
                      height: 500,
                      hAxis: {
                          title: 'Opciones',
                          minValue: 0,
                      },
                      vAxis: {
                          title: 'Número de Respuestas',
                      },
                      }}/>
          
          
                      setGrafica1Public(graph1);
                      setGrafica2Public(graph2);
                      setGrafica3Public(graph3);
                      setGrafica4Public(graph4);
                      setGrafica5Public(graph5);
                  });

                    }
                })
            }
        })
    }};

      
      useEffect(() => {
        datos()
      }, []);
      return(
        <div className="Datos">
            <div className="Graficas">
                {grafica1}
            </div>
            <div className="Graficas">
                {grafica5}
            </div>
            <div className="Graficas">
                {grafica3}
            </div>
            <div className="Graficas">
                {grafica4}
            </div>
            <div className="Graficas">
                {grafica2}
            </div>


            <div className="centeredContainer">
            <button onClick={checkIdTipoCuenta}> Regresar al menú de cuenta</button>
            </div>
            <br></br><br></br><br></br>
          </div>
    );
}

export default Datos;