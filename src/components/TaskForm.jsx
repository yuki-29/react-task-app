import { useState } from "react";

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

export default TaskForm;
