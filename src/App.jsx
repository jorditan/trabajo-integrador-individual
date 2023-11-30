import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {

  const recuperarTasks = () => {
    const tasksHechas = localStorage.getItem('tasks');
    
    if (tasksHechas) {
      return JSON.parse(tasksHechas);
    }
    else {
      return []
    }
  }

  class Task {
    constructor(id, desc, importancia){
      this.id = id,
      this.desc = desc,
      this.importancia = importancia,
      this.completada = false
    }
  }


  const [tasks, setTasks] = useState(recuperarTasks());


  useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <TaskList tasks={tasks} setTasks={setTasks}/>
      <TaskForm tasks={tasks} task={Task} setTasks={setTasks}/>
    </>
  )
}

export default App
