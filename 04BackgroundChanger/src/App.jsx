import { useState } from "react";

function App() {
  const [bgcolor, setbgcolor] = useState("olive");
  return (
    <div className="w-full h-screen" style={{ backgroundColor: bgcolor }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 rounded-full border-2 border-white shadow-xl ml-115 mr-115 bg-gray-900">
        <button
          onClick={() => {setbgcolor("red")}}
          className="outline-none px-5 py-1 rounded-full m-1"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
        onClick={() => {setbgcolor("blue")}}
          className="outline-none px-5 py-1 rounded-full m-1"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
        onClick={() => {setbgcolor("green")}}
          className="outline-none px-5 py-1 rounded-full m-1"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
        onClick={() => {setbgcolor("yellow")}}
          className="outline-none px-5 py-1 rounded-full m-1"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
        onClick={() => {setbgcolor("pink")}}
          className="outline-none px-5 py-1 rounded-full m-1"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
        <button
        onClick={() => {setbgcolor("purple")}}
          className="outline-none px-5 py-1 rounded-full m-1"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
        <button
        onClick={() => {setbgcolor("olive")}}
          className="outline-none px-5 py-1 rounded-full m-1"
          style={{ backgroundColor: "olive" }}
        >
          Olive
        </button>
        <button
        onClick={() => {setbgcolor("orange")}}
          className="outline-none px-5 py-1 rounded-full m-1"
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>
        <button
        onClick={() => {setbgcolor("gray")}}
          className="outline-none px-5 py-1 rounded-full m-1"
          style={{ backgroundColor: "gray" }}
        >
          Gray
        </button>
      </div>
    </div>
  );
}

export default App;
