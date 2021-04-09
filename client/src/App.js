import React from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
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


function App() {

  return (

      <HashRouter>
          <div>
            <div className="header">
              <img className="logo" src={pkglobal} alt="No se pudo cargar el logo" />
              <h1>CORONANALYST</h1>
              <ul className="header">
                <button><NavLink exact to="/">Menu de inicio</NavLink></button>
                
              </ul>
            </div>

            <div className="conexiones">
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/registro" component={Registro}/>

                <Route path="/menu_usuario" component={MenuUsuario}/>
                <Route path="/datos_personales" component={DatosPersonales}/> 
                <Route path="/encuesta" component={Encuesta}/>
                <Route path="/datos" component={Datos}/>
                <Route path="/cerrar_sesion" component={CerrarSesion}/> 
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
