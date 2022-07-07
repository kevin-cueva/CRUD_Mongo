import React from "react";
import { useEffect } from "react";
/* import { useState} from "react";
import { helpHttp } from "../helpers/helpHttp"; */
const initialForm = { // Objeto bacio para el formulario
    nombre:"",
    signo:"",
    id:null,
  }
const CrudForm = ({createData, handleChange, dataForm, setDataForm,dataToEdit,setDataToEdit, updateData})=>{
    
    
    useEffect(()=>{
        setDataForm(dataToEdit);

    },[dataToEdit])

    //Funcion que hace la evaluacion antes de enviar los datos
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!dataForm.nombre || !dataForm.signo){
            alert('Faltan datos');
            return;
        }
        if(dataForm.id === null){
            createData();
        }
        if(dataForm.id){
           updateData(dataForm);  
        }
        // Limpia Todo
        handleCleaning();
    }
    const handleCleaning = ()=>{
        setDataForm(initialForm); 
        setDataToEdit(initialForm);
    }
    
        return(
            <div className="container-formulario">  
            {dataToEdit.id ? (<h2 className="info-accion">Editando</h2>):(<h2 className="info-accion">Creando</h2>)}
            <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre" className="input-text" 
                   onChange={handleChange} value = {dataForm.nombre}/>  
            <input type="text" name="signo" placeholder="Signo" className="input-text"
                   onChange={handleChange} value = {dataForm.signo}/>
            <input type="submit" value="Enviar" className="input-enviar"/>   {/*Boton para enviar el formulario*/}
            <input type="button" value="Limpiar" className="input-limpiar   "
                   onClick={handleCleaning}/>
            </form>
        </div>
    );
}
export default CrudForm;