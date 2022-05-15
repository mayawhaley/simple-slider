import './App.css';
import React from 'react';
import {useState} from 'react'

function App() {
  const [xValue, setXValue] = useState(0)
  const [yValue, setYValue] = useState(0)
  const [emoji, setEmoji] = useState('😝')
  
  function onClick(e) {
    setEmoji(e.target.outerText)
  }

  function onXSlide(e) {
    const app = document.getElementById('emoji');
    setXValue(e.target.value)
    app.style.transform = `translate(${xValue}%, ${yValue}%)`;
  }
  function onYSlide(e) {
    const app = document.getElementById('emoji');
    setYValue(e.target.value)
    app.style.transform = `translate(${xValue}%, ${yValue}%)`;
  }
  
  return (
    <div className="App" id='App'>
      <div className='container' id='container'>
        <div className='buttons'>
          <button onClick={(e) => onClick(e)} id='heart'>❤️</button>
          <button onClick={(e) => onClick(e)} id='face'>😝</button>
          <button onClick={(e) => onClick(e)} id='eyes'>👀</button>
        </div>
       
        <div className='inputs'>
          <input type="range" value={xValue} min="-200" max="200"  className="slider" id="myRange" onChange={(e)=> onXSlide(e)}></input>

          <input type="range" value={yValue} min="-50" max="350"  className="slider"  onChange={(e)=> onYSlide(e)}></input>
        </div>
        
        <div className='playground'>
          <h1 className='emoji' id='emoji'>{emoji}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
