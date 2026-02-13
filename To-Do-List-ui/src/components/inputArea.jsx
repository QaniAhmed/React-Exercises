export default function InputArea(props){
    return <>
    <input type="text" onChange={props.change}/>
        <button onClick={props.click}>
          <span>Add</span>
        </button>

    </>
}