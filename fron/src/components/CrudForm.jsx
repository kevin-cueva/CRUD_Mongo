import React from "react";
import { useState} from "react";
import { helpHttp } from "../helpers/helpHttp";

const initialForm = { // Objeto bacio para el formulario
    nombre:"",
    signo:"",
    id:null,
  }
const CrudForm = ()=>{
    const [dataForm, setDataForm] = useState(initialForm);
    
    //Funcion que hace la evaluacion antes de enviar los datos
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!dataForm.nombre || !dataForm.signo){
            alert('Faltan datos');
        }
        if(dataForm.id === null){
            // Funcion Para Crear un nuevo dato dentro del objeto - POST
                //Encabezado necesarios para que se ejecute le post
                let encabezados = {body:dataForm,
                                headers:{'Content-Type': 'application/json'},
                                };

                helpHttp().post('http://localhost:5000/',encabezados).then((res)=>{
                //console.log(res);
                if(!res.err){
                    alert('correcto');
                }else{
                   alert('error');
                }
                });
    }
}
    //Funcion que captura el dato en el placeholder
    const handleChange =(e)=>{
        setDataForm({
            ...dataForm,
            [e.target.name]:e.target.value,
          });
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