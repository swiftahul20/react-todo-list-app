import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div className="px-6 py-2 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center space-x-4">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full text-xs tracking-wide mt-4 px-3">
          <span className="float-left">
            {" "}
            Pending task: <strong> - </strong>{" "}
          </span>

          <span className="float-right">
            {" "}
            Completed task: <strong> - </strong>{" "}
          </span>
        </div>
        <div className="w-full py-3 px-3 mt-6">
          <ul className="flex flex-col gap-2">
            {toDoList.map((todo) => {
              return (
                <ToDo
                  todo={todo}
                  handleToggle={handleToggle}
                  handleFilter={handleFilter}
                />
              );
            })}
            <button
              type="button"
              onClick={handleFilter}
              className="text-black shadow-sm max-h-[38px] bg-yellow-300 hover:bg-yellow-400 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
            >
              {" "}
              Clear Completed{" "}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
