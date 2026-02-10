import { useState } from 'react'
import './App.css'
export default function App(){
  //create the turn state 
  const [Turn,setTurn] = useState('X')
  const [state,setState] = useState(Array(9))
  const [counter,setCounter]= useState(0)
  const TurnTitle = "Player"+ (Turn=='X'?'X':'O') + "s Turn" ; 
  const[GG,setGG] = useState(false) ;
  //wining array
  const WinningArray = [[0,1,2],[3,4,5],[6,7,8], //row
                        [0,3,6],[1,4,7],[2,5,8], //col
                         [0,4,8],[2,4,6]]; //diagonal 
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
      // console.log("init counter:"+counter);
      newBoard[index]=Turn; //write the chararacter X|O

      //check if there's winner here for current turn
      WinningArray.map((WinningCase)=>{ //0,1,2
        if(newBoard[WinningCase[0]]==newBoard[WinningCase[1]]&&newBoard[WinningCase[0]]==newBoard[WinningCase[2]] && newBoard[WinningCase[0]]!=null )
          {
            console.log(Turn+" Winner")
            setGG(true);
            return
        }
      })
      console.log(newBoard)
      Turn=='X'? setTurn('O') : setTurn('X') //change the turn after write
      setCounter(counter+1)
      // console.log("last counter:"+counter);

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
    {GG?"Game over":TurnTitle}
  </div>

  <div className="board">
    {Boxes.map((value,index)=><button className="square" name={index} onClick={()=>handleClick(index)}>{state[index]}</button>)}
  </div>

  <button className="reset-btn" onClick={ResetGame}>
    Restart Game
  </button>
</div>

}
