import { useCallback, useState } from "react"

function App() {
const [length, setLength] = useState(8)
const [useNumber, setUseNumber] = useState(false)
const [useChar, setUseChar] = useState(false)
const [password, setPassword] = useState("")

const passowrdGenerator = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(useNumber) str += "0123456789"
  if(useChar) str += "@#$%^&*()_-+={}|\:;<,>.?"

  for(let i=1; i<=str.length; i++){
    let char = Math.floor(Math.random() * str.length + 1)
    pass = str.charAt(char)
  }
  setPassword(pass)
  
}, [length, useNumber, useChar, setPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg text-orange-500 px-4 my-8 bg-gray-600 ">
      <h1 className='text-center text-white text-2xl pt-5'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" 
          value={password}
          className="bg-white outline-none w-full my-4 rounded-md py-1 px-3"
          placeholder="Password"
          readOnly
          />
          <button className="bg-blue-800 text-white py-0.5 px-3 rounded-md shrink-0 outline-none">Copy</button>
        </div>
      </div>
    </>
  )
}

export default App
