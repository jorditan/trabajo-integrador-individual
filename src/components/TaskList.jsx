import TaskItem from "./TaskItem";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function TaskList({ tasks, setTasks}) {
     // Este componente devuelve el contenedor con la lista de tareas a realizar
     useEffect(() => {
          AOS.init({
               duration: 2000,
          });
     }, []);


     const taskCompletada = (taskId) => {
          const taskActualizadas = [];
          
          for (let i = 0; i < tasks.length; i++) {
               if (tasks[i].id !== taskId) {
                    taskActualizadas.push(tasks[i])
               }
          }

          setTasks(taskActualizadas);
     }

     const eliminarTask = (taskId) => {
          const taskActualizadas = [];

          for (let i = 0; i < tasks.length; i++) {
               if (tasks[i].id !== taskId) {
                    taskActualizadas.push(tasks[i])
               }
          }

          setTasks(taskActualizadas);
     }

     return (
          <div>
               <div className="contenedorTareas flex column" data-aos="zoom-in-right">
                    <h2 className="titulo">Mi lista de tareas</h2>
                    <p>Tareas pendientes: {tasks.length}</p>

                    <div className="container flex">
                         <ul className="taskList flex column">
                              {
                                   tasks.map((task) => {
                                        return (
                                             <TaskItem
                                                  task={task}
                                                  key={task.id}
                                                  onCompleteTask={() => taskCompletada(task.id)}
                                                  onDeleteTask={() => eliminarTask(task.id)}
                                             />
                                        )
                                   })
                              }
                         </ul>
                    </div>

               </div>
          </div>
     );
}

export default TaskList;