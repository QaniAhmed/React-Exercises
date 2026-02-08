export default function Weather(props){
    return  <div className="main-info">
          <img 
            src={props.icon}
            alt="Weather Icon" 
            className="weather-icon"
          />
          <div className="temp-container">
            <span className="temperature">{props.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <p className="condition-text">{props.text}</p>
        </div>

}