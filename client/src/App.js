import React from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import './index.css';
import pkglobal from './images/pkglobal.png';
import Home from "./Home";
import Login from "./Login";
import Registro from "./Registro";

function App() {

  return (

      <HashRouter>
          <div>
            <div className="header">
              <img className="logo" src={pkglobal} alt="No se pudo cargar el logo" />
              <h1>CORONANALYST</h1>
              <ul className="header">
                <li><NavLink exact to="/">Menu de inicio</NavLink></li>
                
              </ul>
            </div>

            <div className="conexiones">
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/registro" component={Registro}/>       
            </div>

            <div className="footer">
              <h3>Aviso de privacidad</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis nisl leo, ac tincidunt nibh finibus at. Sed sit amet hendrerit lectus. Donec placerat lectus cursus risus commodo, id molestie lacus dictum. Curabitur in ex vitae massa pharetra porttitor in et mi. Nulla sit amet elementum elit. Mauris quis dignissim quam, sit amet rhoncus augue. Nulla condimentum ante in ultrices dignissim. Proin vestibulum risus non elementum tempus. Nunc velit mauris, egestas sed consequat a, rhoncus lacinia lorem. Praesent non erat a libero ornare convallis et in sem. Aliquam pellentesque, augue vitae tristique iaculis, leo risus malesuada tellus, quis interdum nibh lorem ut dolor. </p>
            </div>
         
          </div>
        </HashRouter>


  );
};

export default App;
