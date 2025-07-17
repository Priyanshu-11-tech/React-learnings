# My React Learning Journey 🚀

## 👋 About This Repository

This repository is where I'm documenting my journey of learning React. It serves as a personal collection of the projects I've built to practice and solidify my understanding of core React concepts.

Each project here represents a step forward in my learning process, focusing on specific skills. My goal is to create a portfolio of small, practical applications that showcase my progress.

## 🧠 Core Concepts I've Learned

These are the foundational ideas that I've applied in my projects.

### 1\. Components

Components are the building blocks of any React application. They are reusable, self-contained pieces of UI. I've focused on using **Functional Components**, which are simple JavaScript functions that return JSX.

```javascript
// A simple functional component
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### 2\. JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that lets me write HTML-like code directly in my JavaScript files. It's a powerful feature that makes writing UI intuitive and clean.

```javascript
// This is JSX
const element = <h1>Hello, world!</h1>;
```

### 3\. Props (Properties)

Props are how I pass data from a parent component down to a child. I've used them to make my components reusable and dynamic. This one-way data flow helps keep the application logic predictable.

```javascript
// Passing a 'name' prop to the Welcome component
<Welcome name="Sara" />
```

### 4\. State

State is data managed *within* a component. When state changes, React automatically re-renders the component. Mastering state is key to building interactive and dynamic applications.

## 🎣 Essential Hooks I've Used

Hooks are functions that let me "hook into" React state and lifecycle features from functional components. These are the ones I've practiced with so far.

### 1\. `useState`

I use the `useState` hook to add state to my components. It's essential for tracking any data that changes over time, like user input or a counter's value.

```javascript
// 'count' is the state, 'setCount' is the function to update it
const [count, setCount] = useState(0);
```

### 2\. `useEffect`

I use the `useEffect` hook to handle "side effects" like fetching data from an API, setting up timers with `setInterval`, or manually interacting with the DOM after a component renders.

```javascript
// This code runs after the component renders
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if 'count' changes
```

### 3\. `useRef`

The `useRef` hook has been useful for storing values that persist across renders without causing a re-render, like a timer ID, or for accessing DOM elements directly.

```javascript
// Stores the ID from setInterval without causing a re-render
const intervalIdRef = useRef(null);
```

## 📂 Projects I've Built

This repository contains the following projects that demonstrate my understanding of these concepts.

| Project          | Description                                | Core Concepts Illustrated                               |
| ---------------- | ------------------------------------------ | ------------------------------------------------------- |
| **⏰ Digital Clock** | A real-time clock that updates every second. | `useState`, `useEffect` (with cleanup), `setInterval`   |
| **⏱️ Stopwatch** | A functional stopwatch with start, stop, & reset. | `useState`, `useEffect`, `useRef`                       |
| **✅ To-Do List** | A list where I can add, delete, & reorder tasks. | Managing arrays in state, event handling, mapping lists |
| **🎨 Color Picker** | A tool to select a color & see a live preview. | Controlled inputs, dynamic inline styling             |

## 🛠️ How to Run These Projects

To run any of these projects on a local machine:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd your-repo-name
    ```
3.  **Choose a project and install its dependencies:**
    ```bash
    cd 01-digital-clock  // Example project folder
    npm install
    ```
4.  **Run the project:**
    ```bash
    npm start
    ```
    This will open the project in your browser at `http://localhost:3000`.

## Happy Coding\! 🎉
