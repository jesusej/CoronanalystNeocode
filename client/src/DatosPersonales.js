import React, {useContext, useState } from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";
import { Redirect } from "react-router-dom";

import { idContext } from "./Helper/Context";

function DatosPersonales () {
    const history = useHistory();

    const [registroExitoso, setRegistroExitoso] = useState("");

    const {id, setId} = useContext(idContext);


    //Datos Personales
    const [edad, setEdad] = useState("")
    const [nivelEstudios, setNivelEstudios] = useState("")
    const [localidad, setLocalidad] = useState("")
    const [estadoCivil, setEstadoCivil] = useState("")
    const [ip, setIp] = useState("")
    const [dispositivo, setDispositivo] = useState("")
    const [so, setSo] = useState("")
    const [nivelSocioeconomico, setNivelSocioeconomico] = useState("")
    const [tipoComplexion, setTipoComplexion] = useState("")
    const [factoresRiesgo, setFactoresRiesgo] = useState("")
    const [frecuenciaEjercicio, setFrecuenciaEjercicio] = useState("")

    const regDatPer = () => {
        setIp("null");
        setDispositivo("null");
        setSo("null");

        console.log(edad);
        console.log(nivelEstudios);
        console.log(localidad);
        console.log(estadoCivil);
        console.log(nivelSocioeconomico);
        console.log(tipoComplexion);
        console.log(factoresRiesgo);
        console.log(frecuenciaEjercicio);
        console.log(ip);
        console.log(dispositivo);
        console.log(so);
        console.log(id);

        Axios.post("http://localhost:3001/datos_personales", {
            edad: edad,
            nivelEstudios: nivelEstudios,
            localidad: localidad,
            estadoCivil: estadoCivil,
            nivelSocioeconomico: nivelSocioeconomico,
            tipoComplexion: tipoComplexion,
            factoresRiesgo: factoresRiesgo,
            frecuenciaEjercicio: frecuenciaEjercicio,
            ip: ip,
            dispositivo: dispositivo,
            so:so,
            id:id

        }).then((response) => {
            console.log(response);
            setRegistroExitoso(true);
        });
    };

if (registroExitoso)
    {
        return <Redirect to = "/encuesta" />;
    }



    return(
        <div className="DatPer">
            <h3> Pagina de Encuesta</h3>
            <h4> Datos Personales</h4>
            {/* <p>Pagina donde se muestran los campos para llenar los datos personales </p> */}

            <label> Edad </label> <br />           
            <select id="age" name="age" required
            onChange={(e) => {
                setEdad(e.target.value)
            }}>
              <option value="select">Select</option>  
              <option value="Menor de 15">Menor de 15</option>
              <option value="15-20">15-20</option>
              <option value="21-25">21-25</option>
              <option value="26-30">26-30</option>
              <option value="31-35">31-35</option>
              <option value="36-40">36-40</option>
              <option value="41-45">41-45</option>
              <option value="46-50">46-50</option>
              <option value="51-55">51-55</option>
              <option value="56-60">56-60</option>
              <option value="Más de 60">Más de 60</option>
            </select>
            <br />
            

            <label> Nivel Estudios </label> <br />
            <select type="text"  name="studies" required
            onChange={(e) => {
                setNivelEstudios(e.target.value)
            }}>               
                <option value="select">Select</option>  
                <option value="Preescolar">Preescolar</option>
                <option value="Primaria">Primaria</option>
                <option value="Secundaria">Secundaria</option>
                <option value="Medio Superior">Medio Superior</option>
                <option value="Superior">Superior</option>
                <option value="Posgrado">Posgrado</option>
                <option value="Ninguno de los anteriores">Ninguno de los anteriores</option>
            </select>
            <br />



            <label> Localidad </label> <br />
            <select type="text"  name="locality" required
            onChange={(e) => {
                setLocalidad(e.target.value)
            }}>
                <option value="select">Select</option>  
                <option value="Aguascalientes">Aguascalientes</option>
                <option value="Baja California">Baja California</option>
                <option value="Baja California Sur">Baja California Sur</option>
                <option value="Campeche">Campeche</option>
                <option value="Chiapas">Chiapas</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Coahuila">Coahuila</option>
                <option value="Colima">Colima</option>
                <option value="Durango">Durango</option>
                <option value="Estado de México">Estado de México</option>
                <option value="Guanajuato">Guanajuato</option>
                <option value="Guerrero">Guerrero</option>
                <option value="Hidalgo">Hidalgo</option>
                <option value="Jalisco">Jalisco</option>
                <option value="Michoacán">Michoacán</option>
                <option value="Morelos">Morelos</option>
                <option value="Nayarit">Nayarit</option>
                <option value="Nuevo León">Nuevo León</option>
                <option value="Oaxaca">Oaxaca</option>
                <option value="Puebla">Puebla</option>
                <option value="Querétaro">Querétaro</option>
                <option value="San Luis Potosí">San Luis Potosí</option>
                <option value="Sinaloa">Sinaloa</option>
                <option value="Tabasco">Tabasco</option>
                <option value="Tamaulipas">Tamaulipas</option>
                <option value="Tlaxcala">Tlaxcala</option>
                <option value="Veracruz">Veracruz</option>
                <option value="Tlaxcala">Tlaxcala</option>
                <option value="Yucatán">Yucatán</option>
                <option value="Zacatecas">Zacatecas</option>
            </select>
            <br />

            <label> Estado Civil </label> <br />
            <select type="text"  name="civilStatus" required
            onChange={(e) => {
                setEstadoCivil(e.target.value)
            }}> 
                <option value="select">Select</option>  
                <option value="Soltero(a)">Soltero(a)</option>
                <option value="Casado(a)">Casado(a)</option>
                <option value="Divorciado(a)">Divorciado(a)</option>
                <option value="Viudo(a)">Viudo(a)</option>
                <option value="Concubinato">Concubinato</option>
            </select><br/>

            <label> Nivel Socioeconómico </label> <br />
            <select type="text"  name="socioeconomic" required
            onChange={(e) => {
                setNivelSocioeconomico(e.target.value)
            }}>
                <option value="select">Select</option>  
                <option value="Bajo">Bajo</option>
                <option value="Medio bajo">Medio bajo</option>
                <option value="Medio">Medio</option>
                <option value="Medio alto">Medio alto</option>
                <option value="Alto">Alto</option>
            </select><br />

            <label> Tipo de complexión </label> <br />
            <select type="text"  name="bodyType" required
            onChange={(e) => {
                setTipoComplexion(e.target.value)
            }} > 
                <option value="select">Select</option>  
                <option value="Delgada">Delgada</option>
                <option value="Dentro de la media">Dentro de la media</option>
                <option value="Robusta">Robusta</option>
            </select><br />
            
            <label> Factores de riesgo </label> <br />
            <select type="text"  name="factors" required
            onChange={(e) => {
                setFactoresRiesgo(e.target.value)
            }}>
                <option value="select">Select</option>  
                <option value="Enfermedades cardiovasculares">Enfermedades cardiovasculares</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Enfermedades respiratorias crónicas">Enfermedades respiratorias crónicas</option>
                <option value="Enfermedades renales">Enfermedades renales</option>
                <option value="Cáncer">Cáncer</option>
                <option value="Inmunosupresión">Inmunosupresión</option>
                <option value="Enfermedades neurológicas">Enfermedades neurológicas</option>
                <option value="Sobrepeso/Obesidad">Sobrepeso/Obesidad</option>
                <option value="Tabaquismo">Tabaquismo</option>
                <option value="No padezco ninguno anteriores">No padezco ninguno anteriores</option>
                <option value="Desconozco si padezco alguno">Desconozco si padezco alguno</option>
                </select><br />
            
            <label> Frecuencia de ejercicio </label> <br />
            <select type="text"  name="exerciseFrecuency" required
            onChange={(e) => {
                setFrecuenciaEjercicio(e.target.value)
            }}> 
                <option value="select">Select</option>  
                <option value="Una a dos veces por semana">Una a dos veces por semana</option>
                <option value="Tres a cuatro veces por semana">Tres a cuatro veces por semana</option>
                <option value="Cinco veces por semana">Cinco veces por semana</option>
                <option value="Todos los días">Todos los días</option>
                <option value="No realizo ejercicio físico">No realizo ejercicio físico</option>
            </select> 
            
            
            <br /> <br />

            {edad} <br />
            {nivelEstudios} <br />
            {localidad} <br />
            {estadoCivil} <br />
            {nivelSocioeconomico} <br />
            {tipoComplexion} <br />
            {factoresRiesgo} <br />
            {frecuenciaEjercicio} <br />
            {ip} <br />
            {dispositivo} <br />
            {so} <br />
            {id} <br />

            { /* Insertar IP, sistema operativo y dispositivo */ }
            <div className= "buttoncoso">
                <button onClick={regDatPer}>Registrar Resultados</button>
            </div>
            <div className= "buttoncoso">
                <button onClick={()=> history.push("/menu_Usuario")}>Regresar al menú de sesión</button>
            </div>
            <br />
          </div>
    );
}

export default DatosPersonales;