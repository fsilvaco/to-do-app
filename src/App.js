import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);

  // const handleChange = (e) => {
  //   setTask([...task, { [e.target.name]: e.target.value }]);
  // };

  // const handleChange = () => {
  //   setTask([...task, { nome: "teste", idade: 32 }]);
  //   console.log(task);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([...task, { [e.target.name]: e.target.value }]);
    console.log(task);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={(e) => e.target.value}
        ></input>
        <br />
        <input
          type="text"
          name="category"
          value={task.category}
          onChange={(e) => e.target.value}
        ></input>
        <button type="submit">Add task</button>
      </form>
    </>
  );
}

export default App;
