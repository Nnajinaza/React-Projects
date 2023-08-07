import colorNames from "colornames"

const  Input = ({colorValue, setColorValue, setHexValue}) => {
    // const [colorValue, setColorValue] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Add a color name</label>
            <input 
                autoFocus
                type="text"
                placeholder="Add a color name"
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value))
                }}/>
        </form>
    )
}

export default Input