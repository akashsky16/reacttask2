import './App.css';
import React, { useState} from 'react'
import { Header } from './MyComponents/Header';
import { Display } from './MyComponents/Display';

function App() {

  const [tasks,settasks] = useState([
    {
      sno : 0,
      name : "Test Input",
      rating : "Test Input"
    } 
  ]);


  const addTask = (name,rating) => {
    console.log("Added",name,rating);
    let sno = tasks[tasks.length-1].sno;
    const myTask = {
      sno:sno+1,
      name:name,
      rating:rating
    }
    settasks([...tasks,myTask]);
    console.log(myTask);
  };

  
  return (
    <>
    <div style={{width:"100%",height:"700px",backgroundColor:"yellow"}}>
    <Header addTask={addTask} />
    <Display tasks={tasks} />
    </div>
    </>
  );
}

export default App;
