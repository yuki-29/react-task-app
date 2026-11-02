import { useState } from "react";
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";

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

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAdd(title) {
    setTasks([...tasks, { id: crypto.randomUUID(), title, completed: false }]);
  }

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

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <h1>タスク一覧</h1>
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
      <TaskForm onAdd={handleAdd} />
    </>
  );
}

export default App;
