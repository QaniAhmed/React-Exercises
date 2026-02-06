import React, { useState } from 'react';
import { seatData } from '../data.js';
import './App.css';

const App = () => {
  //hooks 
  const [Price,setPrice] = useState("")
  const [SeatClass,setSeatClass] = useState("--")
  const [SeatSelected,SetSeatSelected] = useState("--")


  function handleClick(userSeat){

    //if user select the same seat => unselect directly
    console.log("****"+ userSeat+" "+ SeatSelected)
    if(userSeat==SeatSelected){
    SetSeatSelected("")
    setPrice("")
    setSeatClass("")
    return
    }
    
    const userSeatData = seatData.filter((s)=>{
      return s.id ==userSeat
    })
    const [Seatdata] = userSeatData
    const {class:SeatClass,price,occupied}= Seatdata
    
    if(occupied){return}
    SetSeatSelected(userSeat)

    //set the price 
    setPrice(price)

    //set the class 
    setSeatClass(SeatClass)
  }


  return (
    <div className="plane-app-container">
      {/* 1. SEAT MAP SECTION */}
      <div className="plane-section">
        <div className="nose-cone">Flight UI-747</div>
        <div className="seating-area">
          {seatData.map((seat) => (
            <button 
              key={seat.id} 
            className={`seat-unit ${seat.class} ${seat.occupied ? 'taken' : ''} ${SeatSelected === seat.id ? 'active' : ''}`}              onClick={()=>{handleClick(seat.id)}}
            >
              {seat.id}
            </button>
          ))}
        </div>
      </div>

      {/* 2. BOOKING SUMMARY SECTION */}
      <div className="summary-section">
        <h3>Reservation Details</h3>
        
        <div className="details-box">
          <p>Selected Seat: <span>{SeatSelected}</span></p>
          <p>Ticket Price: <span>{Price}$</span></p>
          <p>Cabin Class: <span>{SeatClass}</span></p>
        </div>

        <button className="book-now-btn">Confirm Selection</button>
      </div>

    </div>
  );
};

export default App;