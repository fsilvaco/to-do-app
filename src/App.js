import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...task, input]);
    setInput("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange}></input>
        <button>Add task</button>
      </form>
      {task.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
}

export default App;
