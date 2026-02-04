import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';



function CreateArea(props) {
   const  [notesList,setnotesList] = useState([
    {
        "title":"",
        "content":""
    }
   ]);
   function handleChange(e){
    const {name,value}=e.target
    setnotesList((prev)=>{
        return{
             ...prev,
        [name]:value
        }
       
    })
   }
   function handleClick(event){
    event.preventDefault();
    props.onAdd(notesList)
    
   }


  return (
    <div>
      <form className="create-note">
        <input name="title" placeholder="Title" onChange={handleChange}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} />
        <button onClick={handleClick}><AddIcon /></button>
      </form>
    </div>
  );
}

export default CreateArea;
