import { useState } from 'react';
import Card from './components/Card.jsx';
import './App.css';

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [name, setName] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [isFlipped, setIsFlipped] = useState(false); // New state for flipping

  return (
    <div className="checkout-wrapper">
      <div className="container">
        
        {/* FORM SIDE */}
        <section className="form-section">
          <h2>Payment Details</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-box">
              <label>Cardholder Name</label>
              <input type="text" placeholder="e.g. John Doe" onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="input-box">
              <label>Card Number</label>
              <input type="text" maxLength="19" placeholder="0000 0000 0000 0000" onChange={(e) => setCardNumber(e.target.value)} />
            </div>

            <div className="flex-row">
              <div className="input-box">
                <label>Expiration Date</label>
                <input type="text" placeholder="MM/YY" onChange={(e) => setCardDate(e.target.value)} />
              </div>
              <div className="input-box">
                <label>CVC</label>
                <input 
                  type="text" 
                  maxLength="3" 
                  placeholder="***" 
                  onFocus={() => setIsFlipped(true)}  // Flip on focus
                  onBlur={() => setIsFlipped(false)} // Flip back on blur
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
            </div>
            <button className="pay-btn">Confirm Payment</button>
          </form>
        </section>

        {/* PREVIEW SIDE */}
        <section className="preview-section">
          {/* We apply a class based on the isFlipped state */}
          <div className={`card-visual ${isFlipped ? 'flipped' : ''}`}>

            <Card cardNumber={cardNumber} name={name} cardDate={cardDate} cvc={cvc} />
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;