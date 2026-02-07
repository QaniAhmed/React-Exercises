function Card (props){

     return <div className="card-inner">
              {/* FRONT SIDE */}
              <div className="card-front">
                <div className="card-top">
                  <div className="chip-icon"></div>
                  <div className="card-type">TRAVELER</div>
                </div>
                <div className="card-middle">
                  <h1 className="display-number">{props.cardNumber || "•••• •••• •••• ••••"}</h1>
                </div>
                <div className="card-bottom">
                  <div className="info-block">
                    <span className="label">Card Holder</span>
                    <p className="display-name">{props.name || "YOUR NAME"}</p>
                  </div>
                  <div className="info-block">
                    <span className="label">Expires</span>
                    <p className="display-expiry">{props.cardDate || "MM/YY"}</p>
                  </div>
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="card-back">
                <div className="black-bar"></div>
                <div className="cvc-section">
                  <div className="white-bar"></div>
                  <div className="display-cvc">{props.cvc || "•••"}</div>
                </div>
                <div className="back-watermark">SKY-PASS</div>
              </div>
            </div>
            

}
export default Card;