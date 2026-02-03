import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import Footer from "./components/Footer.jsx";
import CreateArea from "./components/InputArea.jsx";
import './App.css'
import { useState } from "react";
export default function App(){
  const [note,setnotes]=useState([])

  function CreateNote(){
    return note.map((item,index)=>
      <Note title={item.title} content={item.content}  ondelete={deleteNote} key={index} id={index} />
    )
  }
  function addNote(note){
    console.log(note)
    setnotes((prev)=>{
      return[
        ...prev,
        note
      ]
    })

  }
  function deleteNote(id){
    setnotes((prev)=>prev.filter((item,index)=>{
      return index !==id
    }))


  }
  return <>
  <Header/>
  <CreateArea onAdd={addNote}/>
  {CreateNote()}
  <Footer/>
  
  </>

}