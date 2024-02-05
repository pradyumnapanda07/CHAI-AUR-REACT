import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(34)


//  let counter = 34
 const addvalue = () => {
  console.log("clicked", counter);
  counter  = counter + 1
setCounter (counter)
 }
 
 const removevalue = () => {
  setCounter(counter - 1)
 }

  return (
    <>
     <h1>React got Jerked</h1>
     <h2>counter value:{counter}</h2>
     <button 
     onClick={addvalue}>
      Add values</button>
     <br />
     <button
     onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
