import React from "react";

const ToDo = ({ todo, handleToggle }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };
  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      name="todo"
      value={todo.id}
      onClick={handleClick}
      className= {todo.complete ? "line-through cursor-pointer" : "todo cursor-pointer"}
    >
      {todo.task}
    </div>
  );
};

export default ToDo;
