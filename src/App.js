import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTask([
      ...task,
      {
        title: title,
        category: category,
      },
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <br />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <button>Add task</button>
      </form>
      <ul>
        {task.map((item, index) => (
          <li key={index}>
            Title: {item.title} | Categoria: {item.category}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
