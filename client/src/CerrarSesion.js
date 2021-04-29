import React, { useContext, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Axios from "axios";

import { LoginContext, idContext } from "./Helper/Context";

function CerrarSesion () {
    const history = useHistory();

    const { setLoginStatus } = useContext(LoginContext);
    const { setId } = useContext(idContext);

    const [loggedOff, setLoggedOff] = useState("");

    const logOff = () => {
        Axios.get("http://localhost:3001/logoff").then((response) => {
            console.log(response);
            setLoggedOff(true);
        });
    };

    if(loggedOff){
        setId("");
        setLoginStatus("");
        return <Redirect to = "/" />;
    }

    return(
        <div className="cerrarsesion">
            <p> ¿Realmente desea cerrar sesión? </p>

            <button onClick={logOff}>Estoy seguro</button>
        </div>
    );
}

export default CerrarSesion;