import Axios from "axios";
import {useHistory} from "react-router-dom";
import React, { useState, useContext } from "react";
import Popup from "reactjs-popup";
import './PopUp.css';
import CrearCliente from "./CrearCliente";

import { idTipoCuentaContext } from "./Helper/Context";

function CuentasAdmnin() {

  const history = useHistory();
  const [cuentas, setCuentas] = useState("");
  const [borrarCuentaCliente, setBorrarCuentaCliente] = useState("");
  const [eraseResponse, setEraseResponse] = useState("");

  const {idTipoCuenta} = useContext(idTipoCuentaContext);

  const registroCuentas = () => {

    if (idTipoCuenta != 3)
    {
      alert("Solo el administrador puede modificar las cuentas");
    }
    else
    {
      Axios.post("http://localhost:3001/cuentas_admin", {
      id: idTipoCuenta,
  })
    .then((response) => {


          console.log(response.data);
          var cuentasCliente = [];
          var cuentasUser = [];
          var todas = [];
          var accounts = [];
          var id = [];
          var idTipo = [];
          
          for (var i = 0; i < response.data.length; i++){
            if (response.data[i].idTipo_De_Cuenta === 2)
            {
              cuentasCliente.push(response.data[i].Usuario);
            }
            else if (response.data[i].idTipo_De_Cuenta === 1)
            {
              cuentasUser.push(response.data[i].Usuario);
            }
            todas.push(response.data[i].Usuario);
            id.push(response.data[i].idCuenta);
            idTipo.push(response.data[i].idTipo_De_Cuenta);
            
          }

          console.log(todas.length);
          console.log(cuentasCliente.length);
          console.log(cuentasUser.length);

          for(var j = 0; j < 2;j++){

            if (j === 0)
            {
              accounts.push(<h3> Cuentas de tipo Cliente: </h3>);
              for(i = 0; i < todas.length; i++){
                if (idTipo[i] === 2)
                {
                  accounts.push(
                    <label>
                      <input type="Radio" name="2" id={id[i]} value={todas[i]}
                      onClick={(e) => {

                        setBorrarCuentaCliente(e.target.value);
                        
                      }}/> {todas[i]}
                      <br />
                    </label> 
                    );
                }
              }
            }
            else if (j === 1)
            {
              accounts.push(<h3> Cuentas de tipo Usuario: </h3>);
              for(i = 0; i < todas.length; i++){
                if (idTipo[i] === 1)
                  {
                  accounts.push(
                      <ul>
                        <li/> {todas[i]}
                      </ul>
                    );
                  }
                }
              } 
            }
          setCuentas(accounts);
    });
    }
    
  };

  const eliminarCliente = () => {
    Axios.post("http://localhost:3001/eliminar_cuenta", {
      cuenta: borrarCuentaCliente,
  })
    .then((response) => {
      console.log(response.data);
      if (response.data === true)
      {
        setEraseResponse("La cuenta correspondiente al nombre de usuario " + borrarCuentaCliente + " ha sido elimanda exitosamente");
      }
      else {
        setEraseResponse("La cuenta no ha sido eliminada");
      }
      

    }
  )};



  const checkId = () => {
    if (idTipoCuenta != 3)
    {
      alert("No es posible acceder a este apartado");
    }
    else
    {
      {CrearCliente()}
    }
  }

  const checkIdMenu = () => {
    if (idTipoCuenta != 3)
    {
      alert("No es posible acceder a este apartado");
    }
    else{
      history.push("/menu_admin");
    }
  }


  if(!cuentas){
    registroCuentas();
  }

  return(
    <div className="cuentasAdmin">
    <button onClick={checkIdMenu}>Volver al menú</button>
      <Popup trigger={<button> Crear cuenta cliente</button>}>
          {checkId}
      </Popup>
      <br></br><br></br>
          
      <ul>
        {cuentas}
      </ul>

      <button onClick={eliminarCliente}>Eliminar cuenta Cliente</button>
    </div>
  );
}

export default CuentasAdmnin;