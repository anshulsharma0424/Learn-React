import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
    
  function addValue(){
    // console.log("Value added", Math.random())
    if(counter < 20){
      counter += 1;
      setCounter(counter);
    }
  }
  
  function removeValue(){
    // console.log("Value removed", Math.random())
    if(counter > 0){
      counter -= 1;
      setCounter(counter);
    }
  }
  
  return (
    <>
      <h1>Counter Application - Increase or Decrease values</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button> <span></span>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
