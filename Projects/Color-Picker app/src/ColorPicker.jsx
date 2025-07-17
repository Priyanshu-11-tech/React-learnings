import React,{useState} from "react"

function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(<>
        <div className="color-picker-container">
            <h1>Color-Picker</h1>
            {/* if you are embedding some JS and then you are changing some CSS properties then enclose it in another "{}" */}
            <div className="color-display"  style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select a Color: <input type="color" value={color} onChange={handleColorChange}/></label>
        </div>
    </>);
}

export default ColorPicker