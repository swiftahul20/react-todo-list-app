import React, { useState } from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg items-center space-x-4 mb-4">
      <div className="flex flex-wrap -mx-3">
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row px-3 gap-6">
              <div className="basis-3/4">
                <input
                  type="text"
                  className="px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer"
                  placeholder="Input To-Do"
                  value={userInput}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="basis-1/4">
                <button
                  type="submit"
                  className="text-white shadow-sm max-h-[38px] bg-[#3c70f5] hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2 focus:outline-none"
                >
                  {" "}
                  Add{" "}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToDoForm;
