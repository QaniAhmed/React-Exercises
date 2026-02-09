import { useState } from 'react'
import './App.css'
export default function App(){
  //create the turn state 
  const [Turn,setTurn] = useState('X')
  const [state,setState] = useState(Array(9))
  const [counter,setCounter]= useState(0)
  const Title = "Player"+ (Turn=='X'?'X':'O') + "s Turn" ; 
  const[GG,setGG] = useState(false) ;
  //create box array 
const Boxes = [...Array(9)].map((_, index) => index + 1);

  function handleClick(index)
  {
    //take a copy 
  let newBoard = [...state];

  //avoid duplicate (if null use it or avoid)
  if(newBoard[index]==null)
    {
      if(GG)return
      console.log("init counter:"+counter);
      newBoard[index]=Turn; //write the chararacter X|O
      Turn=='X'? setTurn('O') : setTurn('X') //change the turn after write
      setCounter(counter+1)
      console.log("last counter:"+counter);

      //update the board
      setState(newBoard)
    } 
    //check Game Over
    if(counter == 8)
    {
      setGG(true);
      return
    }
  }
  function ResetGame(){
    //make all boxes null 
    setState((Array(9)));
    //reset the counter 
    setCounter(0);
    //reset the Game over (GG)
    setGG(false);
    //set Turn
    setTurn('X')
  }

  return <div className="game-container">
  <h1 className="title">Tic-Tac-Toe</h1>
  
  <div className="status-message" style={{fontSize:GG?'4.5rem':'1.5rem'}}>
    {GG?"Game over":Title}
  </div>

  <div className="board">
    {Boxes.map((value,index)=><button className="square" name={index} onClick={()=>handleClick(index)}>{state[index]}</button>)}
  </div>

  <button className="reset-btn" onClick={ResetGame}>
    Restart Game
  </button>
</div>

}
