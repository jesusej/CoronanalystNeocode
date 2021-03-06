import React, {useContext, useState } from "react";
import Axios from "axios";
import {useHistory} from "react-router-dom";
import { Redirect } from "react-router-dom";

import { idContext, idTipoCuentaContext } from "./Helper/Context";

function DatosPersonales () {
    const history = useHistory();

    const [registroExitoso, setRegistroExitoso] = useState("");

    const {id} = useContext(idContext);
    const {idTipoCuenta} = useContext(idTipoCuentaContext);

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

    const regDatPer = () => {
        if (!id){
            alert("Por favor inicie sesión antes de contestar");
            setRegistroExitoso(false);
            console.log(registroExitoso);
            history.push("login");
        } else {
            setIp("null");
            setDispositivo("null");
            setSo("null");

            console.log(genero);
            console.log(edad);

            Axios.post("http://localhost:3001/checkPersonalData", {
            id: id
        }).then((response1) => {
            if (response1.data == true)
            {
                alert("Ya cuenta con datos registrados, por favor regrese al menú");
            }
            else if ((idTipoCuenta == 2) || (idTipoCuenta == 3))
            {
                alert("Su tipo de cuenta no permite registrar resultados");
            }
            else
            {
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
                (ocupacion === '')))
                {
                    alert("Por favor llene todos los datos antes de registrarse");
                    setRegistroExitoso(false);
                    console.log(registroExitoso);
                }
                else if (response.data == true)
                {
                    alert("Ha registrado los datos correctamente");
                    setRegistroExitoso(true);
                    console.log(registroExitoso);
                }
                
            });
            }
        });
    }
};

if (registroExitoso == true) {
    return <Redirect to = "/encuesta" />;
} 
    return(
        <div>
            
            {/* <p>Pagina donde se muestran los campos para llenar los datos personales </p> */}
      
            <div className ="selectReg">
            <h2 className = "datosPersonales"> Datos Personales</h2>

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
        </div>



            <div className= "selectReg">
                
                <button onClick={()=> history.push("/menu_usuario")}>Regresar al menú</button>
                <button onClick={regDatPer}>Registrar Resultados</button>
            </div>
            
          </div>
    );
}

export default DatosPersonales;