const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <div
      className={`p-4 mb-2 rounded-md shadow-md flex justify-between items-center ${
        task.completed ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <div>
        <h3 className="text-lg font-bold">{task.title}</h3>
        <p className="text-sm">Due: {new Date(task.deadline).toLocaleString()}</p>
        <p className="text-sm">Priority: {task.priority}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => toggleComplete(task.id)}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => deleteTask(task.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;