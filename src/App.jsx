// import logo from './logo.svg'/;
import './App.css';
import { useState } from 'react';
function App() {

  // These State are for Chaging the color 
  const [colorName, setColorName] = useState("Black")
  const [color, setColor] = useState("black")
  const [style, setStyle] = useState("black")


  // These State Properties are for incrementing,decrementing and Makes to Zero
  let [initialValue, setInitialValue] = useState(0)


  return (
    <div className='App'>
      <div>
        <button style={{ backgroundColor: style, color: "wheat" }} onClick={() => {
          setColor(color === "black" ? "red" : color === "red" ? "green" : "black");
          setColorName(colorName === "Black" ? "Red" : colorName === "Red" ? "Green" : "Black");
          setStyle(color === "black" ? "red" : color === "red" ? "green" : "black");

        }}>{colorName}</button>
        <h1 style={{ color: color }}>Hello My Name Is Ashok Giri</h1>
      </div>

      {/* Next exercise */}
      <div className='buttons'>
        <button onClick={() => {
          setInitialValue(initialValue + 1)
        }}>Increase</button>
        <button onClick={() => {
          setInitialValue(initialValue - 1)
        }}>Decrease</button>
        <button onClick={() => {
          setInitialValue(0)
        }}>Make Zero</button>
        <button>{initialValue}</button>
      </div>
    </div>

  );
}

export default App;
