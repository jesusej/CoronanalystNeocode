import React, {useContext, useState } from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";
import { Redirect } from "react-router-dom";

import { idContext } from "./Helper/Context";

function DatosPersonales () {
    const history = useHistory();

    const [registroExitoso, setRegistroExitoso] = useState("");

    const {id} = useContext(idContext);


    //Datos Personales
    const [genero, setGenero] = useState("")
    const [edad, setEdad] = useState("")
    const [estadoCivil, setEstadoCivil] = useState("")
    const [nivelEstudios, setNivelEstudios] = useState("")
    const [ocupacion, setOcupacion] = useState("")
    const [ingreso, setIngreso] = useState("")
    const [localidad, setLocalidad] = useState("")
    
    const [ip, setIp] = useState("")
    const [dispositivo, setDispositivo] = useState("")
    const [so, setSo] = useState("")
    
    

    const [regResponse, setRegResponse] = useState("")

    const regDatPer = () => {
        setIp("null");
        setDispositivo("null");
        setSo("null");

        console.log(genero);
        console.log(edad);
        console.log(estadoCivil);
        console.log(nivelEstudios);
        console.log(ocupacion);
        console.log(ingreso);
        console.log(localidad);
        console.log(id);

        console.log(ip);
        console.log(dispositivo);
        console.log(so);

        Axios.post("http://localhost:3001/datos_personales", {
            genero, genero,
            edad: edad,
            estadoCivil: estadoCivil,
            nivelEstudios: nivelEstudios,
            ocupacion: ocupacion,
            ingreso: ingreso,
            localidad: localidad,   
            ip: ip,
            dispositivo: dispositivo,
            so:so,
            id:id,

        }).then((response) => {
            console.log(response);

            if ((response.data == false) && ((genero === '') || (edad === '') || (nivelEstudios === '') ||
            (localidad === '') ||  (estadoCivil === '') || (ingreso === '') ||
            (ocupacion === '') || (id === '')))
            {
                setRegResponse("Por favor llene todos los datos antes de registrarse");
                setRegistroExitoso(false);
                console.log(registroExitoso);
            }
            else if (response.data == true)
            {
                setRegResponse("Ha registrado los datos correctamente");
                setRegistroExitoso(true);
                console.log(registroExitoso);
            }
            
        });

};

if (registroExitoso == true) {
    return <Redirect to = "/encuesta" />;
} 
    return(
        <div className="DatPer">
            <h3> Pagina de Encuesta</h3>
            <h4> Datos Personales</h4>
            {/* <p>Pagina donde se muestran los campos para llenar los datos personales </p> */}

            <label> Género </label> <br />
            <select type="text"  name="gender" required
            onChange={(e) => {
                setGenero(e.target.value)
            }}> 
                <option value=""></option>  
                <option value="Hombre">Hombre</option>
                <option value="Mujer">Mujer</option>
                <option value="Otro">Otro</option>
            </select> 
            <br />
            
            <label> Edad </label> <br />           
            <select id="age" name="age" required 
            onChange={(e) => {
                setEdad(e.target.value)
            }}>
              <option value=""></option>  
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
              <option value="60-61">61-65</option>
              <option value="66-70">66-70</option>
              <option value="70+">Más de 70</option>-
            </select>
            <br />

            <label> Estado Civil </label> <br />
            <select type="text"  name="civilStatus" required
            onChange={(e) => {
                setEstadoCivil(e.target.value)
            }}> 
                <option value=""></option>  
                <option value="Soltero(a)">Soltero(a)</option>
                <option value="Casado(a)">Casado(a)</option>
                <option value="Divorciado(a)">Divorciado(a)</option>
                <option value="Unión libre">Unión libre</option>
                <option value="Viudo(a)">Viudo(a)</option>
            </select>
            <br/>
            
            <label> Nivel máximo de estudios </label> <br />
            <select type="text"  name="studies" required
            onChange={(e) => {
                setNivelEstudios(e.target.value)
            }}>               
                <option value=""></option>  
                <option value="Primaria">Primaria</option>
                <option value="Secundaria">Secundaria</option>
                <option value="Preparatoria">Preparatoria</option>
                <option value="Universidad">Universidad</option>
                <option value="Maestría">Maestría</option>
                <option value="Doctorado">Doctorado</option>
            </select>
            <br />

            <label> Ocupación </label> <br />
            <select type="text"  name="ocupation" required
            onChange={(e) => {
                setOcupacion(e.target.value)
            }}>
                <option value=""></option>  
                <option value="Sector Industrial">Sector Industrial</option>
                <option value="Sector Educativo">Sector Educativo</option>
                <option value="Sector Gubernamental">Sector Gubernamental</option>
                <option value="Sector de Comercio">Sector Comercio</option>
                <option value="Sector de Transporte">Sector de Transporte</option>
                <option value="Sector Alimenticio">Sector Alimenticio</option>
                <option value="Sector de Alojamiento">Sector de Alojamiento</option>
                <option value="Sector de Construcción">Sector de Construcción</option>
                <option value="Sector de Suministro de Energía">Sector de Suministro de Energía</option>
                <option value="Sector de Actividades Inmobiliarias">Sector de Actividades Inmobiliarias</option>
                <option value="Sector Artístico">Sector Artístico</option>
                <option value="Sector de Pesca y Agricultura">Sector de Pesca y Agricultura</option>
                <option value="Sector de Informática">Sector de Informática</option>
                <option value="Sector de Servicios Financieros">Sector de Servicios Financieros</option>
                <option value="Sector Judicial">Sector Judicial</option>
                <option value="Hogar">Hogar</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Otro">Otro</option>
                </select>
            <br />

            <label> Ingreso Económico Mensual </label> <br />
            <select type="text"  name="ingreso" required
            onChange={(e) => {
                setIngreso(e.target.value)
            }}>
                <option value=""></option>  
                <option value="No percibo ningún ingreso">No percibo ningún ingreso</option>
                <option value="Menos de $1,000">Menos de $1,000</option>
                <option value="$1,000 - $10,000">$1,000 - $10,000</option>
                <option value="$10,000 - $30,000">$10,000 - $30,000</option>
                <option value="$30,000 - $50,000">$30,000 - $50,000</option>
                <option value="+$50,000">+$50,000</option>
            </select>
            <br />

            <label> Estado </label> <br />
            <select type="text"  name="locality" required
            onChange={(e) => {
                setLocalidad(e.target.value)
            }}>
                <option value=""></option>  
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

            
            <br /> <br />

            <h2>{regResponse}</h2>
            <h2>{registroExitoso}</h2>

            {genero} <br />
            {edad} <br />
            {estadoCivil} <br />
            {nivelEstudios} <br />
            {ocupacion} <br />
            {ingreso} <br />
            {localidad} <br />
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