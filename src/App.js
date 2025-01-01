import './App.css';
import { useState } from 'react';
function App() {

let [todoList, setTodoList] = useState([
  {
    id: 1,
    task: 'Default task'
  },
]);

  const addTask = () => {
    const newTask = {
      id: todoList.length + 1,
      task: document.querySelector('.form-control').value
    };
    setTodoList([...todoList, newTask]);
    document.querySelector('.form-control').value = '';
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      addTask();
    }
  }
  
  return (
    <div className="container mt-5 w-50">

      <h3 className='text-center'>To-Do App Using React</h3>
      <div className="input-group">
        <input type="text" className="form-control" onKeyDown={handleKeyDown}/>
        <button className="btn btn-primary" onClick={addTask}>ADD</button>
      </div>

      <ul className="list-group mt-4">  
        {
          todoList.map((todo)=>{
            return( 
              <li className="list-group-item">
              <p>{todo.task}</p>
              <button className='btn' onClick={()=>{
                setTodoList(todoList.filter((t)=> t.id !== todo.id));
              }}>❌</button>
            </li>
            )
          })
        }
      </ul>

    </div>
  );
}

export default App;
