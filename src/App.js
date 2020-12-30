const task = [
  {
    title: "Task 1",
    category: "Finace",
    emoji: "💰",
    isCheck: false,
  },
  {
    title: "Task 2",
    category: "Finace",
    emoji: "💰",
    isCheck: true,
  },
  {
    title: "Task 3",
    category: "Finace",
    emoji: "💰",
    isCheck: false,
  },
  {
    title: "Task 4",
    category: "Finace",
    emoji: "💰",
    isCheck: true,
  },
];

const incomplete = task.filter((t) => t.isCheck === false);
const complete = task.filter((t) => t.isCheck === true);

function App() {
  return (
    <>
      <h2>Incomplete</h2>
      {incomplete.map((item, index) => (
        <p key={index}>
          {item.title}
          <br />
          {item.emoji} {item.category}
        </p>
      ))}

      <h2>Completed</h2>
      {complete.map((item, index) => (
        <p key={index}>
          {item.title}
          <br />
          {item.emoji} {item.category}
        </p>
      ))}
    </>
  );
}

export default App;
