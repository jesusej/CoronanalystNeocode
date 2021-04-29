import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";

import { LoginContext, idContext } from "./Helper/Context";

function CerrarSesion () {
    const history = useHistory();

    const {loginStatus, setLoginStatus} = useContext(LoginContext);
    const {id, setId} = useContext(idContext);

    var loggedOff = false;

    const logOff = () => {
        Axios.get("http://localhost:3001/logoff").then((response) => {
            console.log(response);
            loggedOff = true;
        });
        if(loggedOff == true){
            setId("");
            setLoginStatus("");
            history.push("/login");
        }
    };

    return(
        <div className="cerrarsesion">
            <p> ¿Realmente desea cerrar sesión? </p>

            <button onClick={logOff}>Si</button>
            <button onClick={()=> history.push("/menu_Usuario")}>No</button>
        </div>
    );
}

export default CerrarSesion;