import { useState } from "react";

function App() {
  const [task, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [id, setId] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);
    setTask([...task, { id, title, category }]);
    setTitle("");
    setCategory("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <button type="submit">Enviar</button>
      </form>
      {task.map((item, index) => (
        <p key={index}>
          id: {item.id} Titulo: {item.title} - Categoria: {item.category}
        </p>
      ))}
    </>
  );
}

export default App;
