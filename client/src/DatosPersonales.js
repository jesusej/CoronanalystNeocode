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
            <p>Pagina donde se muestran los campos para llenar los datos personales </p> <br></br>

            <label> Edad </label>
            <input type="text"  name="age" required
            onChange={(e) => {
                setEdad(e.target.value)
            }} />

            <label> Nivel Estudios </label>
            <input type="text"  name="studies" required
            onChange={(e) => {
                setNivelEstudios(e.target.value)
            }} />

            <label> Localidad </label>
            <input type="text"  name="locality" required
            onChange={(e) => {
                setLocalidad(e.target.value)
            }} />

            <label> Estado Civil </label>
            <input type="text"  name="civilStatus" required
            onChange={(e) => {
                setEstadoCivil(e.target.value)
            }} />

            <label> Nivel Socioeconómico </label>
            <input type="text"  name="socioeconomic" required
            onChange={(e) => {
                setNivelSocioeconomico(e.target.value)
            }} />

            <label> Tipo de complexión </label>
            <input type="text"  name="bodyType" required
            onChange={(e) => {
                setTipoComplexion(e.target.value)
            }} />
            
            <label> Factores de riesgo </label>
            <input type="text"  name="factors" required
            onChange={(e) => {
                setFactoresRiesgo(e.target.value)
            }} />
            
            <label> Frecuencia de ejercicio </label>
            <input type="text"  name="exerciseFrecuency" required
            onChange={(e) => {
                setFrecuenciaEjercicio(e.target.value)
            }} />

            { /* Insertar IP, sistema operativo y dispositivo */ }

            <button>< NavLink to="/encuesta" > Continuar encuesta</NavLink></button> <br></br>
            <button>< NavLink to="/menu_Usuario" >Regresar al menú de sesión</NavLink></button> <br></br>
          </div>
    );
}

export default DatosPersonales;