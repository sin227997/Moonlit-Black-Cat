import { FaTrashCan } from "react-icons/fa6";

import React, { useState } from 'react'

const Addtodo = () => {
//   const StorageJobs = JSON.parse(localStorage.getItem('Active'))
  const [todos, settodos] = useState([]);
  const [value, setvalue] = useState("");
const handlerChange =(e) => {
  
  setvalue(e.target.value);

};
const Todoli = () =>{
  const newtodo ={
    id: todos.length + 1,
    title: value,
    isDone: <input type="checkbox"className="Check-box"/>   
  };
  const jsonJobs = JSON.stringify(newtodo)
  localStorage.setItem('Active', jsonJobs );
  settodos([...todos,newtodo]);
  setvalue("");
  

}
const Del = (todo) => {
  const newTodos = todos.filter(item=> item.id !== todo.id)
  console.log(todos)
  settodos(newTodos);


}

  return (
    <div className='Add-Todo'>
        <input type="Test" className='Text-Box' value={value} onChange={handlerChange} />
        <button className="butt-todo" onClick={Todoli}>Add</button>
        <div className='Box-Content'>
          {todos.map((todos)=>(
            <div key={todos.id} className="Box-Item">
            <div>
              <span className="status">{todos.isDone}</span>
              <span className="title">{todos.title}</span>
              
            </div>
            <button className="butt-del" onClick={() => Del(todos)}><FaTrashCan/></button>
          </div>

          ))}
          
        </div>
    </div>
  )
}

export default Addtodo