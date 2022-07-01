import React from "react";
/* import { useState} from "react";
import { helpHttp } from "../helpers/helpHttp"; */

const CrudForm = ({createData, handleChange, dataForm})=>{
    
    
    //Funcion que hace la evaluacion antes de enviar los datos
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!dataForm.nombre || !dataForm.signo){
            alert('Faltan datos');
        }
        if(dataForm.id === null){
            createData();
        }
    }
    
        return(
            <>  
            <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value = {dataForm.nombre}/>  
            <input type="text" name="signo" placeholder="Signo" onChange={handleChange} value = {dataForm.signo}/>
            <input type="submit" value="Enviar"/>   {/*Boton para enviar el formulario*/}
            </form>
        </>
    );
}
export default CrudForm;