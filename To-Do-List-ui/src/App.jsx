import React, { useState } from "react";
import "./App.css"
import ToDoList from "./components/ToDolist.jsx";
import Heading from "./components/Heading.jsx";

function App() {
  const [ItemText,setItemText] = useState("")
  const [dataList, setdataList] = useState([]);

  function handleChange(event){
    let data = event.target.value;
    setItemText(data)
  }
  function handleClick(){
    setdataList((prev)=>[...prev,ItemText])
    console.log(dataList)
  }
  return (
    <div className="container">
      <Heading/>

      <div className="form">
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {dataList.map((data)=><ToDoList list={data}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
