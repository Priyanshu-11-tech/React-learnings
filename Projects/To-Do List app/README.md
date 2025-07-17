# React To-Do List ✅

A dynamic and interactive to-do list application built with React. This project demonstrates fundamental React concepts like state management with hooks, event handling, and rendering lists.

```
TO-DO-LIST
[Enter a task... ] [Add]

1. Learn React      [Delete] [☝️] [👇]
2. Build a project  [Delete] [☝️] [👇]
3. Drink water      [Delete] [☝️] [👇]
```

## 🚀 About The Project

This is a classic to-do list application where users can add, delete, and reorder their tasks. It's a great example of how to manage a list of items in a React application's state and how to manipulate that state in an immutable way.

## ✨ Features

  * **Add Tasks:** Easily add new tasks to your list.
  * **Delete Tasks:** Remove tasks you've completed.
  * **Reorder Tasks:** Move tasks up or down to prioritize them.
  * **Input Validation:** Prevents adding empty or whitespace-only tasks.
  * **Component-Based:** Built as a single, self-contained React component.
  * **Modern React:** Uses the `useState` hook for all state management.

-----

## 🔧 How It Works

The component's logic is built around state management, event handling functions, and list rendering.

### 1\. State Management (`useState`)

Two state variables are used to manage the application's data:

  * `const [tasks, setTask] = useState([]);`
      * An array that holds the list of all to-do items. It starts as an empty array.
  * `const [newTask, setNewTask] = useState("");`
      * A string that holds the current value of the text input field where a user types a new task.

### 2\. Core Functions

Several functions handle the logic for adding, deleting, and moving tasks. They all work by creating a **new** array rather than modifying the original state directly, which is a core principle of React.

  * `handleInputChange()`: Updates the `newTask` state every time the user types in the input field.
  * `addTask()`: Adds the current `newTask` to the `tasks` array. It first checks if the task is not empty using `trim()`.
  * `deleteTask(index)`: Creates a new array by filtering out the task at the specified `index`.
  * `moveTaskUp(index)` & `moveTaskDown(index)`: These functions reorder tasks. They create a copy of the `tasks` array and then swap the elements at the target `index` with the one above or below it using array destructuring for a clean and readable swap.

<!-- end list -->

```javascript
// Example: Swapping logic in moveTaskUp
if(index > 0){
    const updatedTasks = [...tasks];
    // Swaps the elements at index and index-1
    [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
    setTask(updatedTasks);
}
```

### 3\. Rendering the List (JSX)

The user interface is rendered using JSX.

  * An `<input>` field is controlled by the `newTask` state.
  * The `tasks.map()` method is used to iterate over the `tasks` array. For each task, it renders a list item (`<li>`) containing the task text and buttons for deleting and moving it.
  * The `key={index}` prop is essential for React to efficiently update the list.
  * Event handlers like `onClick` are used to call the appropriate functions, passing the task's `index` so the function knows which item to act on.

-----

## 🛠️ Getting Started

To use this component in your own React project, follow these simple steps.

### Prerequisites

You need to have a React project set up. You can create one using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).

`npx create-react-app my-app`

### Usage

1.  Create a new file named `ToDoList.js` in your `src/components` directory.
2.  Copy and paste the code below into the `ToDoList.js` file.
3.  Import and use the component in any other component, like `App.js`.

<!-- end list -->

```javascript
// In App.js or another component
import React from 'react';
import ToDoList from './components/ToDoList';
import './App.css'; // Add some basic styling for the list

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

export default App;
```

-----

## 📄 Code

Here is the complete code for the `ToDoList.js` component.

```javascript
import React, { useState } from "react"

function ToDoList() {
    const [tasks, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTask(prevTasks => [...prevTasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTask(updatedTasks);
        }
    }

    return (
        <div className="to-do-list">
            <h1>TO-DO-LIST</h1>
            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange} />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>☝️</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;
```
