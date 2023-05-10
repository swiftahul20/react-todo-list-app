import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Header from './component/Header';
import ToDoList from './component/ToDoList';
import ToDoForm from './component/ToDoForm';

function App() {
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  console.log(data.filter((x) => { return x.complete; }).length) // completed todo.


  // const count = () => {
  //   let count = toDoList.filter(Boolean).length;
  //   console.log(count)
  // }

  return (
    <div className="App">
    	<Header />
      <ToDoForm addTask={addTask} />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
   </div>
  );
}

export default App;
