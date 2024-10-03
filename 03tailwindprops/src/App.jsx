import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componants/Card'

function App() {
  const [count, setCount] = useState(1)
  let myObj = {
    userName: "Pavan",
    age: 20
  }
  let myArr = [1, 2, 3]
  const [counter, setCounter] = useState(1)

  const addValue = () => {
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounte => prevCounte+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded mb-5'>Pavankumar BM</h1>
      <h1>Lets play :{counter}</h1>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value </button>
      <Card userName="Pavan" btnText="Visit me" />
      <Card userName="Kumar" />



    </>
  )
}

export default App
