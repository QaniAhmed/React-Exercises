export default function Header(props){
    return <div className="header">
          <h1 className="location">{props.city}</h1>
          <p className="region-country">{props.country}</p>
        </div>
}