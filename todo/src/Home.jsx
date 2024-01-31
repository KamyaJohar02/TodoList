import Create from "./Create";
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'
import { MdDelete } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Home = () => {
  const [toDos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  }, []);

  const handleEdit = (id) => {
    axios.put(`http://localhost:3001/update/${id}`, { done: true })
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  const handleDelete =(id) => {
    axios.delete(`http://localhost:3001/delete/${id}`, { done:true})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className="home container">
      <h2>This is my To Do List</h2>

      <Create setTodos={setTodos} />
      <div className="contain">
        {toDos.length === 0 ? (
          <div>
            <h2>No Task added</h2>
          </div>
        ) : (
          toDos.map((todo, index) => (
            <div key={index}>
              <h2 className="task">
                {todo.done  ? (
                  <FaHeart className="checkbox  colour" />
                ) : (
                  <FaRegHeart onClick={() => handleEdit(todo._id)} className="checkbox" />
                )}
                <span className={todo.done ? "line_through" : " "}>
                
                  Task {index + 1}: {todo.task}</span>
                <span> <MdDelete onClick={() => handleDelete(todo._id)} /></span>
              </h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
