export default function Output(props) {
    return (
        <div className="outputForm">
            <input type="text" readOnly value={props.value}/>
        </div>
    )
}