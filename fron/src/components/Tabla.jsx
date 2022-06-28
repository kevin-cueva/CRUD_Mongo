import React from "react";
import { useState, useEffect} from 'react';
import {helpHttp} from '../helpers/helpHttp';

const Tabla = ()=>{
    const [data, setData]=useState([]);
    let URL = 'http://localhost:5000/';
    
    useEffect(()=>{
        helpHttp().get(URL).then((res)=>{
            if(!res.err){ //Manejo de errores
                res.forEach((item,index) => {
                    let servicio_res = {
                        id:item.id,
                        name:item.nombre,
                        signo:item.signo,
                        key:index
                    };
                    setData((data)=>[...data, servicio_res])
                    
                });
            }else{
                setData(null);
            }
        });
    },[URL]);
    return(
        <>
            <h3>Lista de Caballeros</h3>
            {data.map(item=><div key={item.key}>{item.name}</div>)}           
        </>
    );
}
export default Tabla;