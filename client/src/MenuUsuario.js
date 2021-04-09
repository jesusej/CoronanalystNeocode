import React, {useState } from "react";
import {NavLink} from "react-router-dom";
import Axios from "axios";


function MenuUsuario () {
    return(

        <div>

          <div className="menuusuario">
            <button><NavLink to="/datos_personales">Encuesta</NavLink></button><br></br>
            <button><NavLink to="/datos">Visualizar Datos</NavLink></button><br></br>
            <button><NavLink to="/cerrar_sesion">Cerrar Sesión</NavLink></button><br></br>
            <button>< NavLink to="/login" >Regresar a Log in</NavLink></button> <br></br>
          </div>

          <div className="footer">
            <h3>Aviso de privacidad</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum iaculis nisl leo, ac tincidunt nibh finibus at. Sed sit amet hendrerit lectus. Donec placerat lectus cursus risus commodo, id molestie lacus dictum. Curabitur in ex vitae massa pharetra porttitor in et mi. Nulla sit amet elementum elit. Mauris quis dignissim quam, sit amet rhoncus augue. Nulla condimentum ante in ultrices dignissim. Proin vestibulum risus non elementum tempus. Nunc velit mauris, egestas sed consequat a, rhoncus lacinia lorem. Praesent non erat a libero ornare convallis et in sem. Aliquam pellentesque, augue vitae tristique iaculis, leo risus malesuada tellus, quis interdum nibh lorem ut dolor. </p>
          </div>
       
        </div>
    );
}

export default MenuUsuario;