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

        }).then((response) => {

        });
    }




    return(
        <div className="DatPer">
            <h3> Pagina de Encuesta</h3>
            <h4> Datos Personales</h4>
            <p>Pagina donde se muestran los campos para llenar los datos personales </p> <br></br>









            <button>< NavLink to="/encuesta" > Continuar encuesta</NavLink></button> <br></br>
            <button>< NavLink to="/menu_Usuario" >Regresar al menú de sesión</NavLink></button> <br></br>
          </div>
    );
}

export default DatosPersonales;