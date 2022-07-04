import React from "react";
/* import { useState, useEffect} from 'react';
import {helpHttp} from '../helpers/helpHttp'; */

const Tabla = ({data, deleteData, setDataToEdit})=>{
    
    
    
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
                data.map((item,index)=><tr key={index}>
                    <td>{item.nombre}</td>
                    <td>{item.signo}</td>
                    <td>
                      <button onClick={()=>setDataToEdit(item)}>Editar</button>
                      <button onClick={()=>deleteData(item)}>Eliminar</button>
                    </td>
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