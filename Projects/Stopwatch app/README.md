# React Stopwatch ⏱️

A clean and functional stopwatch component built with React. It provides start, stop, and reset capabilities, displaying elapsed time in `MM:SS:MS` format.

**Initial State:**

```
00:00:00
[START] [STOP] [RESET]
```

**Running State:**

```
00:05:32
[START] [STOP] [RESET]
```

## 🚀 About The Project

This project is a high-precision stopwatch built as a standalone React component. It leverages modern React Hooks (`useState`, `useEffect`, and `useRef`) to create an accurate and efficient timer without any external dependencies. It's a great example of managing state and side effects in a functional React component.

## ✨ Features

  * **Start, Stop, and Reset:** Full stopwatch functionality.
  * **Pause & Resume:** The "stop" button acts as a pause, and "start" will resume from where it left off.
  * **Accurate Timing:** Uses `Date.now()` for a precise calculation of elapsed time, avoiding inaccuracies from `setInterval` drift.
  * **Efficient:** Uses `useRef` to store references without causing unnecessary re-renders and `useEffect`'s cleanup function to prevent memory leaks.
  * **Zero Dependencies:** Built purely with React.

-----

## 🔧 How It Works

The component's logic is a great illustration of using React Hooks together to manage a complex stateful component.

### 1\. State Management (`useState`)

Two state variables manage the component's core data:

  * `const [isRunning, setIsRunning] = useState(false);`
      * A boolean that tracks if the stopwatch is currently running or paused.
  * `const [elapsedTime, setElapsedTime] = useState(0);`
      * A number that stores the total time passed in milliseconds. Updating this state causes the displayed time to re-render.

### 2\. Refs for Persistent Values (`useRef`)

Refs are used to store values that need to persist across renders but should not trigger a re-render themselves:

  * `const intervalIdRef = useRef(null);`
      * Holds the ID of the `setInterval` timer. This is necessary so we can clear the interval later.
  * `const startTimeRef = useRef(0);`
      * Holds the timestamp of when the stopwatch was started or resumed. This is the reference point for calculating the elapsed time.

### 3\. The Timer Logic (`useEffect`)

The `useEffect` hook manages the timer's lifecycle based on the `isRunning` state:

  * **When `isRunning` is `true`:** It starts an interval that runs every 10 milliseconds. Inside the interval, it calculates `Date.now() - startTimeRef.current` to get the current elapsed time and updates the state.
  * **When `isRunning` is `false`:** The `useEffect`'s **cleanup function** is triggered. It calls `clearInterval()` to stop the timer, preventing it from running in the background.

<!-- end list -->

```javascript
useEffect(() => {
    if (isRunning) {
        intervalIdRef.current = setInterval(() => {
            setElapsedTime(Date.now() - startTimeRef.current);
        }, 10);
    }

    return () => {
        clearInterval(intervalIdRef.current);
    }
}, [isRunning]);
```

### 4\. Control Functions (`start`, `stop`, `reset`)

These functions are triggered by the user's button clicks:

  * `start()`: Sets `isRunning` to `true` and cleverly calculates the starting reference point to handle both a fresh start and resuming from a pause: `startTimeRef.current = Date.now() - elapsedTime;`
  * `stop()`: Sets `isRunning` to `false`, which pauses the timer.
  * `reset()`: Resets the `elapsedTime` to `0` and sets `isRunning` to `false`.

### 5\. Time Formatting

The `formatTime()` function converts the raw `elapsedTime` in milliseconds into a user-friendly `MM:SS:MS` string, using `padStart` to ensure double digits.

-----

## 🛠️ Getting Started

To use this component in your own React project, follow these simple steps.

### Prerequisites

You need to have a React project set up. You can create one using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).

`npx create-react-app my-app`

### Usage

1.  Create a new file named `Stopwatch.js` in your `src/components` directory.
2.  Copy and paste the code below into the `Stopwatch.js` file.
3.  Import and use the component in any other component, like `App.js`.

<!-- end list -->

```javascript
// In App.js or another component
import React from 'react';
import Stopwatch from './components/Stopwatch';
import './App.css'; // Add some basic styling for the stopwatch

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Stopwatch</h1>
        <Stopwatch />
      </header>
    </div>
  );
}

export default App;
```

-----

## 📄 Code

Here is the complete code for the `Stopwatch.js` component.

```javascript
import React, { useState, useEffect, useRef } from "react"

function Stopwatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        // Use this line if you want to include hours
        // return `${hours}:${minutes}:${seconds}:${milliseconds}`;
        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return (
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={start} className="start-button">START</button>
                <button onClick={stop} className="stop-button">STOP</button>
                <button onClick={reset} className="reset-button">RESET</button>
            </div>
        </div>
    );
}

export default Stopwatch;
```
