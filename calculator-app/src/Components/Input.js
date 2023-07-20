export default function Input(props) {
    return (
        <div className="inputForm">
            <input type="text" readOnly value={props.value} />
        </div>
    )
}