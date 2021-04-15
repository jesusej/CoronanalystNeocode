import React, {useState } from "react";
import {NavLink} from "react-router-dom";
import Axios from "axios";

function DatosPersonales () {

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
        Axios.post("http://localhost:3001/datos_personales", {
            // falta el id del usuario
            edad: edad,
            nivelEstudios: nivelEstudios,
            localidad: localidad,
            estadoCivil: estadoCivil,
            ip: ip,
            dispositivo: dispositivo,
            so: so,
            nivelSocioeconomico: nivelSocioeconomico,
            tipoComplexion: tipoComplexion,
            factoresRiesgo: factoresRiesgo,
            frecuenciaEjercicio: frecuenciaEjercicio,

        }).then((response) => {

        });
    }




    return(
        <div className="DatPer">
            <h3> Pagina de Encuesta</h3>
            <h4> Datos Personales</h4>
            <p>Pagina donde se muestran los campos para llenar los datos personales </p>

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
            <input type="text"  name="studies" required
            onChange={(e) => {
                setNivelEstudios(e.target.value)
            }} /> <br />

            <label> Localidad </label> <br />
            <input type="text"  name="locality" required
            onChange={(e) => {
                setLocalidad(e.target.value)
            }} /> <br />

            <label> Estado Civil </label> <br />
            <input type="text"  name="civilStatus" required
            onChange={(e) => {
                setEstadoCivil(e.target.value)
            }} /> <br />

            <label> Nivel Socioeconómico </label> <br />
            <input type="text"  name="socioeconomic" required
            onChange={(e) => {
                setNivelSocioeconomico(e.target.value)
            }} /> <br />

            <label> Tipo de complexión </label> <br />
            <input type="text"  name="bodyType" required
            onChange={(e) => {
                setTipoComplexion(e.target.value)
            }} /> <br />
            
            <label> Factores de riesgo </label> <br />
            <input type="text"  name="factors" required
            onChange={(e) => {
                setFactoresRiesgo(e.target.value)
            }} /> <br />
            
            <label> Frecuencia de ejercicio </label> <br />
            <input type="text"  name="exerciseFrecuency" required
            onChange={(e) => {
                setFrecuenciaEjercicio(e.target.value)
            }} /> <br /> <br /> <br />

            { /* Insertar IP, sistema operativo y dispositivo */ }
            <div className= "buttoncoso">
                <button>< NavLink to="/encuesta" > Continuar encuesta</NavLink></button>
                <button>< NavLink to="/menu_Usuario" >Regresar al menú de sesión</NavLink></button> <br></br>
            </div>
          </div>
    );
}

export default DatosPersonales;