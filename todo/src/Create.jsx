import { useState } from "react"
import axios from "axios"
import './App.css'

const Create = () => {
  const[task, setTask] = useState()

  const handleChange= () => {

    axios.post('http://localhost:3001/add', { task: task })
    .then(result => {
      console.log(result);
      
    })
    .catch(err => {
      console.log(err);
    });
  
    

  }
  return (
    <div className="container">
    <div className="create_form home">
      <input type="text" id= "taskInput" onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleChange}>Add task</button>
    </div>
    </div>
  )
}

export default Create
