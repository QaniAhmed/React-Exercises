import { useState } from "react"

export default function ToDoList(prop){
    const [isDone,setisDone] = useState(0)
    function handleClick(){
        setisDone(!isDone)
    }
    
    return <li onDoubleClick={()=>prop.delete(prop.id)} onClick={handleClick} style={{ textDecoration:isDone?'line-through' : 'none'}} >{prop.list}</li>
}