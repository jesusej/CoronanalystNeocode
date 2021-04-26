import React, {useContext, useState } from "react";
import {useHistory, Redirect} from "react-router-dom";
import Axios from "axios";
import { idTipoCuentaContext } from './Helper/Context';


function Datos () {
    const history = useHistory();
    const {idTipoCuenta} = useContext(idTipoCuentaContext);


    const checkIdTipoCuenta = () => {
        
        if (idTipoCuenta === 1)
        {
            history.push("/menu_usuario");
        }
        else if (idTipoCuenta === 2)
        {
            history.push("/menu_cliente");
        }
        else if (idTipoCuenta === 3)
        {
            history.push("/menu_admin");
        }
    };

    // if (idTipoCuenta === 1)
    // {
    //   return <Redirect to = "/menu_usuario" />;
    // }
    // else if (idTipoCuenta === 2)
    // {
    //   return <Redirect to = "/menuCliente" />;
    // }
    // else if (idTipoCuenta === 3)
    // {
    //   return <Redirect to = "/menuAdmin" />;
    // }


    return(
        <div className="Datos">
            <h3> Pagina de Datos</h3>
            <p>Pagina donde se muestran los datos </p>
            <h3>{"id cuenta " + idTipoCuenta}</h3>

            {/* <button onClick={()=> history.push("/menu_Usuario")}>Regresar al menú principal</button> */}
            <button onClick={checkIdTipoCuenta}> Regresar al menú de cuenta</button>
          </div>
    );
}

export default Datos;