
import React,{useState,useEffect} from "react";
import './../styles/App.css';

const App = () => {
   const [todo,setTodo] = useState("");
   const[list,setList] = useState({});
   const[idx,setIdx] = useState(0);

   function handleSubmit(e){
    e.preventDefault();
        setList({...list,[idx]:todo});
        setIdx(idx+1);
        setTodo("");
        
    }
    function handleDelete(keyName){
     
      delete list[keyName]; 
      setList({...list});
    }
  return (
    <div>
      <h2>To-Do List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" required onChange={(e)=>setTodo(e.target.value)} value={todo}></input>
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {
              Object.keys(list).map((keyName) => (
                <li>
                    <span>{list[keyName]}</span>
                    <button  type="delete" onClick={()=>handleDelete(keyName)}>Delete</button>
                </li>
            ))
        }
      </ul>
       
    </div>
  )
}

export default App
