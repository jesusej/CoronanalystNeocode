import React, { useEffect, useState } from "react";
import {Route, HashRouter, NavLink} from "react-router-dom";
import Axios from "axios";
import './index.css';
import pkglobal from './images/pkglobal.png';
import Home from "./Home";
import Login from "./Login";
import Registro from "./Registro";
import MenuUsuario from "./MenuUsuario";
import DatosPersonales from "./DatosPersonales";
import Encuesta from "./Encuesta";
import Datos from "./Datos";
import MenuAdmin from "./MenuAdmin";
import MenuCliente from "./MenuCliente";
import CuentasAdmin from "./CuentasAdmin";

import { LoginContext, idContext } from "./Helper/Context";

function App() {

  // Constante loginStatus para definir estado del login dependiente del cookie (se necesita mejorar, ver variables globales)
  const [loginStatus, setLoginStatus] = useState("")
  const [id, setId] = useState("")

  Axios.defaults.withCredentials = true;
  
  useEffect(()=> {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn){
        setLoginStatus(response.data.user[0].Usuario); // Cambiar por true en cueanto esté listo el log off
        setId(response.data.user[0].idCuenta);
      }
    });
  }, []);

  return (
    <HashRouter>
      {/* 
        <div>
          <div className="header">
          <NavLink exact to="/">
            <img className="logo" src={pkglobal} alt="No se pudo cargar el logo" />
            </NavLink>


            <h1 className ="coronanalysTitle">CORONANALYST</h1>
        </div>
        <div className = "centered-container">
          <div className = "centered-elements">
                      

            
            <h3>{loginStatus + " " + id}</h3>

            <LoginContext.Provider value={{ loginStatus, setLoginStatus }} >
            
              <div className="conexiones">
                <Route exact path="/" component={Home}/>
                <Route path="/registro" component={Registro}/>
                  

                <idContext.Provider value = {{id, setId}} >
                  <Route path="/login" component={Login}/>

                  <Route path="/menu_usuario" component={MenuUsuario}/>
                  <Route path="/menuCliente" component={MenuCliente}/>
                  <Route path="/menuAdmin" component={MenuAdmin}/>
                  
                  <Route path="/datos_personales" component={DatosPersonales}/> 
                  <Route path="/encuesta" component={Encuesta}/>
                </ idContext.Provider>

                <Route path="/datos" component={Datos}/>
                <Route path="/cuentas_admin" component={CuentasAdmin}/> 
              </div>
            </ LoginContext.Provider>

          </div>

          
          </div>
        </div>
          


          <footer>
            <h3 className = "AvisoPrivacidad">Aviso de privacidad</h3>
            <p className = "descripcionAvisoPriv">ESPACIO PARA COLOCAR EL AVISO DE PRIVACIDAD SUGERIDO POR PK GLOBAL </p>
          </footer>
        */}
        {/* ^ Back End ^ */}


        <div className="content">
          <div className="header">
            <NavLink exact to="/">
              <img className="logo" src={pkglobal} alt="No se pudo cargar el logo"/></NavLink>
              <div className ="coronanalysTitle">CORONANALYST</div>
            </div>


          <article className="main">
            <LoginContext.Provider value={{ loginStatus, setLoginStatus }} >
              
              <div className="conexiones">
                <Route exact path="/" component={Home}/>
                <Route path="/registro" component={Registro}/>
                  

                <idContext.Provider value = {{id, setId}} >
                  <Route path="/login" component={Login}/>

                  <Route path="/menu_usuario" component={MenuUsuario}/>
                  <Route path="/menuCliente" component={MenuCliente}/>
                  <Route path="/menuAdmin" component={MenuAdmin}/>
                  
                  <Route path="/datos_personales" component={DatosPersonales}/> 
                  <Route path="/encuesta" component={Encuesta}/>
                </ idContext.Provider>

                <Route path="/datos" component={Datos}/>
                <Route path="/cuentas_admin" component={CuentasAdmin}/> 
              </div>

            </ LoginContext.Provider>
          </article>

          <footer className="footer">
            <div>Aviso de privacidad</div>
            Espacio para temas de privacidad conforme PK Global 
            Espacio para temas de privacidad conforme PK Global
            Espacio para temas de privacidad conforme PK Global
            Espacio para temas de privacidad conforme PK Global
          </footer>
          

    </div> 


    </HashRouter>


  );
};

export default App;

