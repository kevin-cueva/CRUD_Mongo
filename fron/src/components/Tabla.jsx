import React from "react";
/* import { useState, useEffect} from 'react';
import {helpHttp} from '../helpers/helpHttp'; */
import edit from "../img/edit1.svg"

const Tabla = ({data, deleteData, setDataToEdit})=>{
    
    
    
    return(
        <div className="container-table">
        <table>
          <thead>
            <tr className="title-table">

             <th>Nombre</th>
             <th>Constelacion</th>
             <th>Acciones</th>

            </tr>
          </thead>

          <tbody>
            {data.length >0?
            (
                data.map((item,index)=><tr key={index} className='fila-table'>
                    <td>{item.nombre}</td>
                    <td>{item.signo}</td>
                    <td>
                      <button onClick={()=>setDataToEdit(item)} className="boton">
                        <span class="material-symbols-outlined">edit_note</span>
                      </button>
                      <button onClick={()=>deleteData(item)}>
                        <span class="material-symbols-outlined delete">delete</span>
                      </button>
                    </td>
                    </tr>)           
                
            ):(
                <tr><td colSpan="3">Sin datos</td></tr>
            )
            }
          </tbody>
          </table>
        </div>
    );
}
export default Tabla;