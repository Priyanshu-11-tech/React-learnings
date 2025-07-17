# React Digital Clock ⏰

A simple and elegant digital clock component built with React. It displays the current time in a `HH:MM:SS AM/PM` format and updates every second.

```
02:11:13 AM
```

## 🚀 About The Project

This project is a lightweight, standalone React component that shows the current local time. It's built using modern React Hooks (`useState` and `useEffect`) and has no external dependencies, making it easy to integrate into any React application.

## ✨ Features

  * **Real-time:** Updates every second to always show the current time.
  * **12-Hour Format:** Displays time in a familiar 12-hour format with an AM/PM indicator.
  * **Efficient:** Uses React's `useEffect` hook with proper cleanup to prevent memory leaks.
  * **Zero Dependencies:** Built purely with React.
  * **Easy to Use:** Simply drop the component into your project.

-----

## 🔧 How It Works

The clock's logic is handled by three main parts: state management, the timer effect, and time formatting functions.

### 1\. State Management (`useState`)

The component stores the current time in its state using the `useState` hook. This state is initialized with a new `Date` object, capturing the time when the component first renders.

```javascript
const [time, setTime] = useState(new Date());
```

Whenever the `time` state is updated, the component re-renders to display the new time.

### 2\. Timer Logic (`useEffect`)

The `useEffect` hook is used to set up a timer that updates the time state every second.

  * An interval is created using `setInterval` that calls `setTime(new Date())` every 1000 milliseconds (1 second).
  * A **cleanup function** is returned from the effect. This function calls `clearInterval` to stop the timer when the component is removed from the screen, preventing memory leaks.
  * An empty dependency array `[]` is used to ensure the effect runs only **once** when the component mounts.

<!-- end list -->

```javascript
useEffect(() => {
    const intervalID = setInterval(() => {
        setTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => {
        clearInterval(intervalID);
    }
}, []); // Empty array ensures this effect runs only once
```

### 3\. Time Formatting

Two helper functions format the `Date` object from the state into a readable string.

  * `formatTime()`: Extracts hours, minutes, and seconds. It converts the 24-hour format to 12-hour and determines whether it's "AM" or "PM".
  * `padZero()`: A utility that adds a leading zero to numbers less than 10 (e.g., `7` becomes `07`).

-----

## 🛠️ Getting Started

To use this component in your own React project, follow these simple steps.

### Prerequisites

You need to have a React project set up. You can create one using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).

`npx create-react-app my-app`

### Usage

1.  Create a new file named `DigitalClock.js` in your `src/components` directory (or wherever you keep your components).
2.  Copy and paste the code below into the `DigitalClock.js` file.
3.  Import and use the component in any other component, like `App.js`.

<!-- end list -->

```javascript
// In App.js or another component
import React from 'react';
import DigitalClock from './components/DigitalClock';
import './App.css'; // Make sure to add some basic styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Digital Clock</h1>
        <DigitalClock />
      </header>
    </div>
  );
}

export default App;
```

-----

## 📄 Code

Here is the complete code for the `DigitalClock.js` component.

```javascript
import React, { useState, useEffect } from "react";

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(intervalID);
        }
    }, []); // Empty dependency array means this effect runs only once on mount

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        // Convert to 12-hour format
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
    );
}

export default DigitalClock;
```
