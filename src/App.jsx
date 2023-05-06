// import logo from './logo.svg'/;
import './App.css';
import { useState } from 'react';
// import ToDoList from './components/ToDoList';
import UseReducer from './components/UseReducer';
import UseReducer2 from './components/UseReducer2';
// import FetchApi from './components/FetchApi';
import UseRef from './components/UseRef';
import UseContext from './components/UseContext';
function App() {



  // These State are for Chaging the color 
  const [colorName, setColorName] = useState("Black")
  const [color, setColor] = useState("black")
  const [style, setStyle] = useState("black")


  // These State Properties are for incrementing,decrementing and Makes to Zero
  let [initialValue, setInitialValue] = useState(0)


  // This State is for toggling
  const [toggle, setToggle] = useState(true)

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
          // this is annonous function
          setInitialValue(initialValue + 1)
        }}>Increase</button>

        <button onClick={() => {
          // this is annonous function
          setInitialValue(initialValue - 1)
        }}>Decrease</button>


        <button onClick={() => {
          // this is annonous function
          setInitialValue(0)
        }}></button>
        <button>{initialValue}</button>
      </div>



      {/* Show and Hide  */}
      <button onClick={() =>
      // this is annonous function
      {
        setToggle(!toggle)
      }}>{toggle === true ? "Hide" : "Show"}</button>
      {toggle && <h1>Hello My Name is Ashok Giri</h1>}



      {/* Working With Use Reducer */}
      <UseReducer />
      <UseReducer2 />


      {/* Working With Fetch Api */}
      {/* <FetchApi/> */}
      <UseRef />



      {/* Importing UseContext */}
      <UseContext />
    </div >
  );
}

export default App;
