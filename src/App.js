import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Todoitem from "./components/todoitem";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState(["Todo App"]);
  const [message, sentmessage] = useState("");

  const valueChangeHandier = (e) => {
    setInputValue(e.target.value);
  };

  const addHandler = () => {
    if (inputValue=="") {
      return;
    }
    setTodoList((prevValue) => [...prevValue, inputValue]);
    setInputValue("");
    sentmessage("Successfully Added");
    setTimeout(() => {
      sentmessage("");
    }, 1000);

  };

  const deleteHandler = (name) => {
    const newList = todoList.filter((item) => item != name);
    setTodoList(newList);
    sentmessage("Successfully Deleted");
    setTimeout(() => {
      sentmessage("");
    }, 1000);
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="container">
        <div className="inputContainer">
          <input type="text" placeholder="Enter Your Type" value={inputValue} onChange={valueChangeHandier} />
          <button onClick={addHandler}>
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#fff"
              class="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
              />
            </svg>
            Add
          </button>
        </div>
        <p className="a-d">{message}</p>
        <div className="listContainer">
          {todoList.map((item) => (
            <Todoitem
              key={item}
              title={item}
              onDelete={() => {
                deleteHandler(item);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
