import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen"
      style={{backgroundColor: color}}>
        <div className="bg-amber-100 w-full  flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white  font-bold rounded-lg">
          <div className="flex w-screen flex-wrap h-10  justify-center bg-white  px-4 py-1 gap-9 rounded-lg shadow-lg">
            <button className=" w-15  outline-0"
            onClick={() => setColor("Red")}
            style={{backgroundColor: "red"}}>Red</button>

            <button className="w-15  outline-0 "
            onClick={() => setColor("green")}
            style={{backgroundColor: "green"}}>Green</button>

            <button className=" w-15  outline-0 "
            onClick={() => setColor("blue")}
            style={{backgroundColor: "blue"}}>Blue</button>

            <button className=" w-15  outline-0 "
            onClick={() => setColor("yellow")}
            style={{backgroundColor: "yellow"}}>Yellow</button>

            <button className="w-15  outline-0 "
            onClick={() => setColor("purple")}
            style={{backgroundColor: "purple"}}>Purple</button>

            <button className="w-15 outline-0 "
            onClick={() => setColor("olive")}
            style={{backgroundColor: "olive"}}>Olive</button>

            <button className="w-15  outline-0 "
            onClick={() => setColor("skyblue")}
            style={{backgroundColor: "skyblue"}}>Skyblue</button>

            <button className="w-15  outline-0"
            onClick={() => setColor("teal")}
            style={{backgroundColor: "teal"}}>Teal</button>

            <button className="w-15  outline-0 "
            onClick={() => setColor("orange")}
            style={{backgroundColor: "orange"}}>Orange</button> 


          </div>
        </div>
    </div>
  );
}

export default App;
