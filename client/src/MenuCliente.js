// Archivo de menú de cliente (sólo para propósitos de presentación)

import React, { useContext } from "react";
import {useHistory} from "react-router-dom";

import { LoginContext, idContext } from "./Helper/Context";
import CerrarSesion from "./CerrarSesion";

import Popup from "reactjs-popup";
import './PopUp.css';

function MenuCliente () {
  const history = useHistory();

  const {loginStatus, setLoginStatus} = useContext(LoginContext);
  const {id, setId} = useContext(idContext);

    return(
        <div className="main">
          <div className = "titulo"><h1>Menú de Cliente</h1></div>
          <div className = "centeredContainer">
            <button className="button" onClick={()=> history.push("/datos")}>Visualizar Datos</button>
            <Popup trigger={<button>Cerrar sesión</button>} position="center">
                  <LoginContext.Provider value = {{loginStatus, setLoginStatus}} >
                    <idContext-Provider value = {{id, setId}} >
                      {CerrarSesion()}
                    </idContext-Provider>
                  </LoginContext.Provider>
              </Popup>
          </div>
          </div>
    );
} 

export default MenuCliente;