import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-white text-black p-4 rounded-4xl border-4 border-amber-600'>Tailwind & Props Tutorial</h1>
    <Card username="Anshul Sharma" profession='Full stack developer' /> 
    <Card  /> 
    </>
  )
}

export default App
