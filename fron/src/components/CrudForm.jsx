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
            <>  
            {dataToEdit.id ? (<h2>Editando</h2>):(<h2>Creando</h2>)}
            <form onSubmit={handleSubmit}>
            <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} value = {dataForm.nombre}/>  
            <input type="text" name="signo" placeholder="Signo" onChange={handleChange} value = {dataForm.signo}/>
            <input type="submit" value="Enviar"/>   {/*Boton para enviar el formulario*/}
            <input type="button" value="Limpiar" onClick={handleCleaning}/>
            </form>
        </>
    );
}
export default CrudForm;