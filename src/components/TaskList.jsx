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

export default TaskList;
