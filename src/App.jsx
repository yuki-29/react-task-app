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

function TaskList({ tasks, onToggle, onDelete }) {
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
        <label htmlFor={task.id} className={task.completed ? "done" : ""}>
          {task.title}
        </label>
        <button
          onClick={() => {
            onDelete(task.id);
          }}
        >
          削除
        </button>
      </li>
    );
  });

  return <ul>{taskItems}</ul>;
}

function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (title.trim().length > 0) {
          onAdd(title);
          setTitle("");
        }
      }}
    >
      <h2>タスク登録</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        size="35"
      />
      <button type="submit">登録</button>
    </form>
  );
}

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
