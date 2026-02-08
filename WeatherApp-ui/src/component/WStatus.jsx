export default function WStatus(props){
    return <div className="stats-grid">
          <div className="stat-item">
            <span className="label">Humidity</span>
            <span className="value">{props.Humidity}</span>
          </div>
          <div className="stat-item">
            <span className="label">Wind</span>
            <span className="value">{props.Wind}</span>
          </div>
          <div className="stat-item">
            <span className="label">Pressure</span>
            <span className="value">{props.Pressure}</span>
          </div>
        </div>
}