import { useState } from "react";

function App() {
  const [task, setTask] = useState({
    title: "",
    category: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
        ></input>
        <br />
        <input
          type="text"
          name="category"
          value={task.category}
          onChange={handleChange}
        ></input>
        <button type="submit">Add task</button>
      </form>
    </>
  );
}

export default App;
