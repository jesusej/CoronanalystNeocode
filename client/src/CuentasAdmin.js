import Axios from "axios";
import {useHistory} from "react-router-dom";
import React, { useState, useContext } from "react";
import Popup from "reactjs-popup";
import './PopUp.css';
import CrearCliente from "./CrearCliente";

import { idContext } from "./Helper/Context";

function CuentasAdmnin() {

  const history = useHistory();
  const [cuentas, setCuentas] = useState("");
  const [borrarCuentaCliente, setBorrarCuentaCliente] = useState("");
  const [borrarCuentaUsuario, setBorrarCuentaUsuario] = useState("");
  const [eraseResponse, setEraseResponse] = useState("");

  const {id} = useContext(idContext);

  const registroCuentas = () => {

    Axios.post("http://localhost:3001/cuentas_admin", {
      id: id,
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

            //console.log(todas[i]);
            //console.log(id[i]); 
            
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
                    <label>
                      <input type="Radio" name="1" id={id[i]} value={todas[i]}
                      onClick={(e) => {
                
                        setBorrarCuentaUsuario(e.target.value);
                        
                      }}/> {todas[i]}
                      <br />
                    </label> 
                    );
                  }
                }
              } 
            }
          setCuentas(accounts);
    });
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

  const eliminarUsuario = () => {
    Axios.post("http://localhost:3001/eliminar_cuenta", {
      cuenta: borrarCuentaUsuario,
  })
    .then((response) => {
      console.log(response.data);
      if (response.data === true)
      {
        setEraseResponse("La cuenta correspondiente al nombre de usuario " + borrarCuentaUsuario + " ha sido elimanda exitosamente");
      }
      else {
        setEraseResponse("La cuenta no ha sido eliminada");
    }
    });
  };


  if(!cuentas){
    registroCuentas();
  }

  return(
    <div className="cuentasAdmin">
    <button onClick={()=> history.push("/menu_admin")}>Regresar al menú de sesión</button>
      <Popup trigger={<button> Crear cuenta cliente</button>}>
          {CrearCliente()}
      </Popup>
      <br></br><br></br>
          
      <ul>
        {cuentas}
      </ul>
      {borrarCuentaCliente}<br></br>
      {borrarCuentaUsuario}<br></br>
      {eraseResponse}

      <button onClick={eliminarCliente}>Eliminar cuenta Cliente</button>
      <button onClick={eliminarUsuario}>Eliminar cuenta Usuario</button>
    </div>
  );
}

export default CuentasAdmnin;