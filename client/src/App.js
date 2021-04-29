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

import { LoginContext, idContext, idTipoCuentaContext } from "./Helper/Context";

function App() {

  // Constante loginStatus para definir estado del login dependiente del cookie (se necesita mejorar, ver variables globales)
  const [loginStatus, setLoginStatus] = useState("")
  const [id, setId] = useState("")
  const [idTipoCuenta, setIdTipoCuenta] = useState("");

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
        <div>
          <div className="header">
          <NavLink exact to="/">
            <img className="logo" src={pkglobal} alt="No se pudo cargar el logo" />
            </NavLink>


            <h1 className ="coronanalysTitle">CORONANALYST</h1>
        </div>
        <div className = "centered-container">
          <div className = "centered-elements">
                      {/* ^ Back End ^ */}

            
            <h3>{loginStatus + " " + id + " " + idTipoCuenta}</h3>

            <LoginContext.Provider value={{ loginStatus, setLoginStatus }} >
            

            <div className="paginas">
                <Route exact path="/" component={Home}/>
                <Route path="/registro" component={Registro}/>
                
                <idTipoCuentaContext.Provider value = {{idTipoCuenta, setIdTipoCuenta}} >
                <idContext.Provider value = {{id, setId}} >
                

                <Route path="/login" component={Login}/>

                <Route path="/menu_usuario" component={MenuUsuario}/>
                <Route path="/menu_cliente" component={MenuCliente}/>
                <Route path="/menu_admin" component={MenuAdmin}/>
                
                <Route path="/datos_personales" component={DatosPersonales}/> 
                <Route path="/encuesta" component={Encuesta}/>
                <Route exact path="/datos" component={Datos}/>


                <Route path="/cuentas_admin" component={CuentasAdmin}/> 
            
                </idContext.Provider>                
                </idTipoCuentaContext.Provider>
              
                
                
            </div>

            </ LoginContext.Provider>

          </div>

          {/* ^ Back End ^ */}
          </div>
        </div>
          


          <footer>
            <h3 className = "AvisoPrivacidad">Aviso de privacidad</h3>
            <p className = "descripcionAvisoPriv">ESPACIO PARA COLOCAR EL AVISO DE PRIVACIDAD SUGERIDO POR PK GLOBAL </p>
          </footer>
        
        
    </HashRouter>


  );
};

export default App;

