# **To-Do List App with Reminders**

A simple and intuitive to-do list app that allows users to create, edit, and delete tasks, set deadlines, and receive reminders using browser notifications. This project is perfect for beginners learning **CRUD operations**, **local storage**, and the **Notification API**.

---

## **Features**
- **Add, edit, and delete tasks.**
- **Set deadlines** and receive reminders via notifications.
- **Mark tasks as completed** or undo completion.
- **Priority-based task sorting** (Low, Medium, High).
- **Persistent data** storage using Local Storage.
- **Responsive UI** built with Tailwind CSS.

---

## **Tech Stack**
- **React**: Frontend framework for building interactive UIs.
- **Local Storage**: For saving and retrieving tasks.
- **Notification API**: To trigger reminders for task deadlines.
- **Tailwind CSS**: For modern, responsive styling.

---

## **Getting Started**

### **1. Prerequisites**
Ensure you have the following installed:
- **Node.js** (v14+)
- **npm** or **yarn**

### **2. Installation**
1. Clone the repository:
   ```bash
   git clone git@github.com:DevZiaus/todo-with-reminders.git
   cd todo-list-reminders
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

The app will be available at [http://localhost:3000](http://localhost:3000).

---

## **Usage**

1. **Add Tasks:**
   - Enter the task title, set a deadline, and select a priority level.
   - Click **"Add Task"** to add it to the list.

2. **Mark as Completed:**
   - Click the **"Complete"** button on a task to mark it as done.
   - Click **"Undo"** to unmark it.

3. **Edit or Delete Tasks:**
   - Use the **"Delete"** button to remove a task permanently.

4. **Receive Notifications:**
   - Notifications will alert you when a task's deadline is approaching. Ensure notifications are enabled in your browser.

---

## **Project Structure**
```
/src
  ├── components
  │   ├── TaskForm.js    # Handles task creation
  │   ├── TaskList.js    # Displays all tasks
  │   ├── TaskItem.js    # Renders individual tasks
  ├── App.js             # Main application logic
  ├── index.js           # Entry point
```

---

## **Customization**

1. **Update Task Priorities:**
   - Modify the priority options or their styling in `TaskForm.js`.

2. **Notification Timing:**
   - Adjust the timing logic in `App.js` to customize when reminders are triggered.

---

## **Learning Goals**
This app is ideal for learning:
- **CRUD Operations**: Add, read, update, and delete tasks.
- **Local Storage**: Persist data between sessions.
- **Notification API**: Trigger browser-based reminders.
- **Responsive Design**: Style with Tailwind CSS.

---

## **Future Improvements**
- **Filters and Sorting:** Add functionality to filter tasks by status or sort by priority.
- **Edit Functionality:** Enable in-place editing for tasks.
- **Backend Integration:** Use a database to manage tasks across devices.

---

## **Contributing**
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push the changes and open a pull request:
   ```bash
   git push origin feature-name
   ```

---

## **License**
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments**
- **React** for the framework.
- **Tailwind CSS** for styling.
- **MDN Web Docs** for insights into the Notification API.

---

### **Contact**
For questions or suggestions, feel free to reach out via email: contact@devziaus.com.

Visit <a href="https://devziaus.xyz" target="_blank">DevZiaus</a> or <a href="https://devziausblog.tech" target="_blank">Blog</a>

**Happy coding!** 😊