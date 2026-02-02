import Header from "./components/Header.jsx";
import Note from "./components/Note.jsx";
import Footer from "./components/Footer.jsx";
import CreateArea from "./components/InputArea.jsx";
import './App.css'
import { useState } from "react";
export default function App(){
  const [note,setnote]=useState([])

  function CreateNote(){
    return note.map((item)=>
      <Note title={item.title} content={item.content} />
    )
  }
  function addNote(note){
    console.log(note)
    setnote((prev)=>{
      return[
        ...prev,
        note
      ]
    })

  }
  return <>
  <Header/>
  <CreateArea onAdd={addNote}/>
  {CreateNote()}
  <Footer/>
  
  </>

}