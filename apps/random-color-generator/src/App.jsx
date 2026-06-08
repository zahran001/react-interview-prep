import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [randomColor, setRandomColor] = useState("")
  // button updates the state

  function generateHexColor() {
  // build a "#......" string and return it - starts with the hash

  let color = "#";
  
  for(let i=0; i<6; i++){
    const hex = "0123456789abcdef"; // hex characters
    const randomIndex = Math.floor(Math.random() * 16);
    const onechar = hex[randomIndex];
    color = color + onechar;
  }

  return color;

}

function generateRgbColor() {
  let color = [];

  const ceiling = 256; // ditching off-by-one on the range (allows 255)

  for(let i=0; i<3; i++){
    const randomInt = Math.floor(Math.random() * ceiling);
    color.push(randomInt);
  }

  return "rgb(" + color.join(", ") + ")"; // "rgb(63, 138, 44)"
}


  function generateRGB() {
    let newColor = generateRgbColor();
    setRandomColor(newColor);


  }

  function generateHEX() {
    let newColor = generateHexColor();
    setRandomColor(newColor);

  }

  return (
    
    <>
  
      <button onClick={generateRGB}>Generate RGB Color</button>
      <button onClick={generateHEX}>Generate Hex Color</button>


      <div style={{ height:200, width:200, background: randomColor}} />
      <div>
        <h1>{randomColor}</h1>
      </div>

    </>
  )
}

export default App
