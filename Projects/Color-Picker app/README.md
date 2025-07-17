# React Color Picker 🎨

A simple and interactive color picker component built with React. It allows a user to select a color and instantly see a preview along with its hex code.

```
Color-Picker

+-----------------+
|                 |
| Selected Color: |
|     #56CCF2     |
|                 |
+-----------------+

Select a Color: [ 🎨 ]
```

## 🚀 About The Project

This project is a basic but functional color picker that demonstrates core React concepts. It shows how to use the `useState` hook to manage component state and how to create a "controlled input" by linking an input's value and its change handler to the component's state. It's a perfect example for learning about handling user input and dynamic inline styling in React.

## ✨ Features

  * **Interactive Color Selection:** Uses the browser's native color picker interface.
  * **Live Preview:** Instantly updates a display box with the selected color.
  * **Displays Hex Code:** Shows the hexadecimal code of the current color.
  * **Controlled Component:** The color input's state is fully managed by React.
  * **Dynamic Styling:** Demonstrates how to apply inline CSS styles dynamically based on state.

-----

## 🔧 How It Works

The component is elegantly simple, relying on a single state variable and one event handler.

### 1\. State Management (`useState`)

A single state variable is all that's needed to power the component:

  * `const [color, setColor] = useState("#FFFFFF");`
      * The `color` state holds the hex code string of the currently selected color.
      * It is initialized with a default value of white (`#FFFFFF`). When `setColor` is called, the component re-renders to reflect the new color.

### 2\. Event Handling

  * `function handleColorChange(event)`
      * This function is triggered whenever the user selects a new color using the `<input type="color">`.
      * It captures the new color's hex value from `event.target.value` and updates the `color` state by calling `setColor`.

### 3\. Rendering and Dynamic Styles (JSX)

The UI is rendered with JSX, featuring a key part for dynamic styling:

  * **Controlled Input:** The `<input type="color">` is a **controlled component**. Its `value` is set to the `color` state, and its `onChange` event is tied to the `handleColorChange` function. This ensures that React state is always the single source of truth.
  * **Inline Styling:** The preview `div` changes color using an inline `style` attribute.
      * `style={{backgroundColor: color}}`
      * The outer curly braces `{}` are for embedding a JavaScript expression into JSX.
      * The inner curly braces `{}` create a JavaScript object. React expects the `style` prop to be an object where CSS properties are written in camelCase (e.g., `backgroundColor`). The value of this property is set to the current `color` from the state.

-----

## 🛠️ Getting Started

To use this component in your own React project, follow these simple steps.

### Prerequisites

You need to have a React project set up. You can create one using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html).

`npx create-react-app my-app`

### Usage

1.  Create a new file named `ColorPicker.js` in your `src/components` directory.
2.  Copy and paste the code below into the `ColorPicker.js` file.
3.  Import and use the component in any other component, like `App.js`.

<!-- end list -->

```javascript
// In App.js or another component
import React from 'react';
import ColorPicker from './components/ColorPicker';
import './App.css'; // Add some basic styling

function App() {
  return (
    <div className="App">
      <ColorPicker />
    </div>
  );
}

export default App;
```

-----

## 📄 Code

Here is the complete code for the `ColorPicker.js` component.

```javascript
import React, { useState } from "react"

function ColorPicker() {
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className="color-picker-container">
            <h1>Color-Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker;
```
