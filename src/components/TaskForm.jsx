
import Etiqueta from "./Etiqueta";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosAddCircleOutline } from "react-icons/io";


function TaskForm({ tasks, setTasks, task }) {

     useEffect(() => {
          AOS.init({
               duration: 2000,
          });
     }, []);

     const [inputValue, setInputValue] = useState('');

     const [importanciaValue, setImportancia] = useState('');

     const handleImportanciaClick = (importancia) => {
          setImportancia(importancia.valor);
     }

     const agregarTarea = (nuevaTask) => {
          setTasks([...tasks, nuevaTask]);
          console.log(nuevaTask);
     }

     const handleAgregarTarea = (event) => {
          event.preventDefault();
          if (inputValue == '' || importanciaValue == '') {
               alert('No puede agregar una tarea sin descripción y/o sin una etiqueta de importancia')
          }
          else {
               const nuevaTask = new task(tasks.length + 1, inputValue, importanciaValue);
               agregarTarea(nuevaTask);
               setInputValue('');
               setImportancia('');
          }
     }

     return (
          <>
               <div className="flex column" data-aos="fade-up">
                    <form className="contenedorFormulario  flex column">
                         <label htmlFor="taskInput">Añada una <span className="enfasis">tarea</span> la lista</label>

                         <input name="taskInput" id="taskInput" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
                         </input>

                         <div className="seleccion flex column">
                              <div className="tituloSecundario">
                                   Agregale una <span className="enfasis">etiqueta</span> de importancia a la tarea
                              </div>



                              <div className="opciones flex row">
                                   <Etiqueta importancia={{ valor: "Baja" }} onClick={handleImportanciaClick}/>
                                   <Etiqueta importancia={{ valor: "Media" }} onClick={handleImportanciaClick}/>
                                   <Etiqueta importancia={{ valor: "Alta" }} onClick={handleImportanciaClick}/>
                              </div>
                         </div>

                         <button id="botonAgregar" onClick={handleAgregarTarea} type="button">
                              <IoIosAddCircleOutline id="icon" /> Agregar tarea
                         </button>
                    </form>
               </div>
          </>
     );
}

export default TaskForm;