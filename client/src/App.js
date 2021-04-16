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
import CerrarSesion from "./CerrarSesion";
import MenuAdmin from "./MenuAdmin";
import MenuCliente from "./MenuCliente";

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
        <div>
          <div className="header">
          <NavLink exact to="/"><
            img className="logo" src={pkglobal} alt="No se pudo cargar el logo" />
            </NavLink>

            <h1>CORONANALYST</h1>
              {/*<NavLink exact to="/"><button type="button">Menu de Inicio</button></NavLink>*/}
          

            <LoginContext.Provider value={{ loginStatus, setLoginStatus }} >
            
            <div className="conexiones">
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/registro" component={Registro}/>

                <Route path="/menu_usuario" component={MenuUsuario}/>
                <Route path="/menuCliente" component={MenuCliente}/>
                <Route path="/menuAdmin" component={MenuAdmin}/>

                <idContext.Provider value = {{id, setId}} >
                <Route path="/datos_personales" component={DatosPersonales}/> 
                <Route path="/encuesta" component={Encuesta}/>
                </ idContext.Provider>

                <Route path="/datos" component={Datos}/>
                <Route path="/cerrar_sesion" component={CerrarSesion}/> 
            </div>
            </ LoginContext.Provider>

            <footer>
              <h3>Aviso de privacidad</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis nisl leo, ac tincidunt nibh finibus at. Sed sit amet hendrerit lectus. Donec placerat lectus cursus risus commodo, id molestie lacus dictum. Curabitur in ex vitae massa pharetra porttitor in et mi. Nulla sit amet elementum elit. Mauris quis dignissim quam, sit amet rhoncus augue. Nulla condimentum ante in ultrices dignissim. Proin vestibulum risus non elementum tempus. Nunc velit mauris, egestas sed consequat a, rhoncus lacinia lorem. Praesent non erat a libero ornare convallis et in sem. Aliquam pellentesque, augue vitae tristique iaculis, leo risus malesuada tellus, quis interdum nibh lorem ut dolor. </p>
            </footer>
         
          </div>

          <footer>
            <h3>Aviso de privacidad</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis nisl leo, ac tincidunt nibh finibus at. Sed sit amet hendrerit lectus. Donec placerat lectus cursus risus commodo, id molestie lacus dictum. Curabitur in ex vitae massa pharetra porttitor in et mi. Nulla sit amet elementum elit. Mauris quis dignissim quam, sit amet rhoncus augue. Nulla condimentum ante in ultrices dignissim. Proin vestibulum risus non elementum tempus. Nunc velit mauris, egestas sed consequat a, rhoncus lacinia lorem. Praesent non erat a libero ornare convallis et in sem. Aliquam pellentesque, augue vitae tristique iaculis, leo risus malesuada tellus, quis interdum nibh lorem ut dolor. </p>
          </footer>
        
        </div>
    </HashRouter>


  );
};

export default App;

