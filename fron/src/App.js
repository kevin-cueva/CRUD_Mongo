import { useState, useEffect } from "react";
import { helpHttp } from "./helpers/helpHttp";
import Tabla from "./components/Tabla";
import CrudForm from "./components/CrudForm";

const initialForm = { // Objeto bacio para el formulario
  nombre:"",
  signo:"",
  id:null,
}
function App() {
  //Variables
  const [dataForm, setDataForm] = useState(initialForm); // Variable para recueperar lo que se escribe en los input
  const [dataGet, setDataGet] = useState([]); //Datos tomados del Get inicila

  //Constantes
  const URL = 'http://localhost:5000/';

  useEffect(()=>{
    helpHttp().get(URL).then((res)=>{
        if(!res.err){ //Manejo de errores
            console.log('entre..');
            res.forEach((item,index) => {
                let servicio_res = {
                    id:item.id,
                    nombre:item.nombre,
                    signo:item.signo,
                    key:index
                };
                setDataGet((dataGet)=>[...dataGet, servicio_res])  
            });
        }else{
            setDataGet(null);
        }
        console.log(dataGet);
    });
},[URL]); 

 //Funcion que captura el dato en el placeholder
 const handleChange =(e)=>{
  setDataForm({
      ...dataForm,
      [e.target.name]:e.target.value,
    });
  }

  //Eliminar datos
  const deleteData=(data)=>{
    let isDelete = window.confirm(`Estas seguro de eliminar el registro con el ID:${data.id} ?`); //Alerta de elimininacion
    let endpoint = `${URL}`;
    let encabezados = {body:{'id':`${data.id}`},
                        headers:{'Content-Type': 'application/json'},
                      };
    //Eliminando el elemento
    if(isDelete){ // si le dio OK
      helpHttp().del(endpoint,encabezados).then((res)=>{
        if(!res.err){

          let newData = dataGet.filter(item=>item.id !== data.id); // llena este nuevo arreglo sin el id que se va eliminar
          setDataGet(newData); //Actualizalo pero con los nuevos datos

        }else{
          alert('Error');
        }
      })
    }else{
      return;
    }

  }

  //Crear dato
  const createData = ()=>{
    // Funcion Para Crear un nuevo dato dentro del objeto - POST
                //Encabezado necesarios para que se ejecute le post
                let encabezados = {body:dataForm,
                  headers:{'Content-Type': 'application/json'},
                  };

                  helpHttp().post('http://localhost:5000/',encabezados).then((res)=>{
                  //console.log(res);
                  if(!res.err){         
                     setDataGet([...dataGet,dataForm]);
                  }else{
                    alert('error');
                  }
                  });
  }

 
  return (
   <>
   <CrudForm handleChange={handleChange}
             createData={createData} 
             dataForm={dataForm}>
          
  </CrudForm>
   {dataGet && <Tabla data={dataGet} deleteData={deleteData}></Tabla>}
   </>
  );
}

export default App;
