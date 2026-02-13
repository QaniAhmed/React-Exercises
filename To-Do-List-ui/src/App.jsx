import React, { useState } from "react";
import "./App.css"
import ToDoList from "./components/ToDolist.jsx";
import Heading from "./components/Heading.jsx";
import InputArea from "./components/inputArea.jsx";

function App() {
  const [ItemText,setItemText] = useState("")
  const [dataList, setdataList] = useState([]);

  function handleChange(event){
    let data = event.target.value;
    setItemText(data)
    console.log(data)
  }
  function handleClick(){
    setdataList((prev)=>[...prev,ItemText])
    console.log(dataList)
  }
  function deleteItem(id){
    setdataList((prev)=>{
      return prev.filter((item,index)=>index!=id)})


  }
  return (
    <div className="container">
      <Heading/>

      <div className="form">
        <InputArea change={handleChange} click={handleClick}/>
      </div>
      <div>
        <ul>
          {dataList.map((data,index)=><ToDoList list={data} key={index} id={index} delete={deleteItem} />)}
        </ul>
      </div>
    </div>
  );
}

export default App;
