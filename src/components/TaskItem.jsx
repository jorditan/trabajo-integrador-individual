import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";



function TaskItem({task, onCompleteTask, onDeleteTask}) {
     return (
          <div className="taskItem flex row">
               <div className="id">
                    <span>{task.id}</span>
               </div>
               <div className="tarea">
                    <p>{task.desc}</p>
               </div>

               <span className="divisor"></span>

               <div className="etiqueta flex column">
                    <p className="underline">Importancia</p>
                    <span className="enfasis">{task.importancia}</span>
               </div>


               <div className="botones flex column">
                    <FaCheckCircle  className="icon" onClick={onCompleteTask}/>
                    <MdOutlineCancel className="icon" onClick={onDeleteTask}/>
               </div>
          </div>
     );
}

export default TaskItem;