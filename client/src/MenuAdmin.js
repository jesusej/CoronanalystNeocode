// Archivo de menú admin (sólo para propósitos de presentación)

import React, { useContext } from "react";
import {useHistory} from "react-router-dom";
import Popup from "reactjs-popup";
import './PopUp.css';

import { LoginContext, idContext } from "./Helper/Context";
import CerrarSesion from "./CerrarSesion";

function MenuAdmin () {
  const history = useHistory();

  const {loginStatus, setLoginStatus} = useContext(LoginContext);
  const {id, setId} = useContext(idContext);
  

    return(
        <div className="menuAdmin">
          <h2>Menú de Admin</h2>
          <div className="centeredContainer">
            <button onClick={()=> history.push("/cuentas_admin")}>Administrar Cuentas</button>
            <button onClick={()=> history.push("/datos")}>Visualizar Datos</button>
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

export default MenuAdmin;