import React, { useState } from "react";
import "./App.css"

function App() {
  const [ItemText,setItemText] = useState("")
  const [dataList, setdataList] = useState([]);

  function handleChange(event){
    let data = event.target.value;
    setItemText(data)
  }
  function handleClick(){
    console.log("the Value is :",ItemText)
    setdataList((prev)=>[...prev,ItemText])
    console.log(dataList)
  }
  function showList(list){
    return <li>{list}</li>
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {dataList.map(showList)}
        </ul>
      </div>
    </div>
  );
}

export default App;
