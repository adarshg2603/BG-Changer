import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen"
      style={{backgroundColor: color}}>
        <div className=" flex fixed w-full  justify-center bottom-12 inset-x-0 p-4 text-white text-2xl font-bold rounded-lg">
          <div className="flex justify-center bg-white text-black px-4 py-1 gap-7">
            <button className=" h-full outline-0 "
            onClick={() => setColor("Red")}
            style={{backgroundColor: "red"}}>Red</button>

            <button className="w-full h-full outline-0 "
            onClick={() => setColor("green")}
            style={{backgroundColor: "green"}}>Green</button>

            <button className="w-full h-full outline-0 "
            onClick={() => setColor("blue")}
            style={{backgroundColor: "blue"}}>Blue</button>

            <button className="w-full h-full outline-0 "
            onClick={() => setColor("yellow")}
            style={{backgroundColor: "yellow"}}>Yellow</button>

            <button className="w-full h-full outline-0 "
            onClick={() => setColor("purple")}
            style={{backgroundColor: "purple"}}>Purple</button>

            <button className="w-full h-full outline-0 "
            onClick={() => setColor("olive")}
            style={{backgroundColor: "olive"}}>Olive</button>

            <button className="w-full h-full outline-0 "
            onClick={() => setColor("skyblue")}
            style={{backgroundColor: "skyblue"}}>Skyblue</button>

            <button className="w-full h-full outline-0 "
            onClick={() => setColor("teal")}
            style={{backgroundColor: "teal"}}>Teal</button>

            <button className="w-full h-full outline-0 "
            onClick={() => setColor("orange")}
            style={{backgroundColor: "orange"}}>Orange</button> 


          </div>
        </div>
    </div>
  );
}

export default App;
