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
         <h3>Tabla de datos</h3>
        <table>
          <thead>
            <tr>

             <th>Nombre</th>
             <th>Constelacion</th>
             <th>Acciones</th>

            </tr>
          </thead>

          <tbody>
            {data.length >0?
            (
                data.map(item=><tr key={item.key}>
                    <td>{item.name}</td>
                    <td>{item.signo}</td>
                    </tr>)           
                
            ):(
                <tr><td colSpan="3">Sin datos</td></tr>
            )
            }
          </tbody>
          </table>
        </>
    );
}
export default Tabla;