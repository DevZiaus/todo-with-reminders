import { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return alert("Task title is required");

    addTask({ 
      id: Date.now(), 
      title, 
      deadline, 
      priority, 
      completed: false 
    });

    setTitle("");
    setDeadline("");
    setPriority("Low");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="w-full p-2 mb-4 border rounded-md"
      >
        <option value="Low">Low Priority</option>
        <option value="Medium">Medium Priority</option>
        <option value="High">High Priority</option>
      </select>
      <button className="w-full bg-blue-600 text-white py-2 rounded-md">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
