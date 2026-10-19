import { useState } from "react";

const initialTasks = [
  {
    id: 1,
    title: "JSXを理解する",
    completed: false,
  },
  {
    id: 2,
    title: "React のレンダリングを理解する",
    completed: false,
  },
];

function TaskList({ tasks, onToggle }) {
  const taskItems = tasks.map((task) => {
    return (
      <li key={task.id}>
        <input
          type="checkbox"
          id={task.id}
          onChange={() => {
            onToggle(task.id);
          }}
          checked={task.completed}
        />
        <label htmlFor={task.id}>{task.title}</label>
      </li>
    );
  });

  return <ul>{taskItems}</ul>;
}

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleToggle(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <h1>タスク一覧</h1>
      <TaskList tasks={tasks} onToggle={handleToggle} />
    </>
  );
}

export default App;
