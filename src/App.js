// src/App.js
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const sendNotification = (task) => {
    if (Notification.permission === "granted") {
      new Notification("Task Reminder", {
        body: `Don't forget: ${task.title}`,
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    tasks.forEach((task) => {
      if (!task.completed && task.deadline) {
        const timeLeft = new Date(task.deadline).getTime() - Date.now();
        if (timeLeft > 0) {
          setTimeout(() => sendNotification(task), timeLeft);
        }
      }
    });
  }, [tasks]);

  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">To-Do List App</h1>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
