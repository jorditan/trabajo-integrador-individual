import { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {

  class Task {
    constructor(id, desc, importancia){
      this.id = id,
      this.desc = desc,
      this.importancia = importancia,
      this.completada = false
    }
  }


  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      console.log(tasks)
  },[tasks])

  return (
    <>
      <TaskList tasks={tasks} setTasks={setTasks}/>
      <TaskForm tasks={tasks} task={Task} setTasks={setTasks}/>
    </>
  )
}

export default App
