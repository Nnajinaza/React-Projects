const Square = ({colorValue, hexValue}) => {
    return (
        <section
            className="square"
            style={{backgroundColor: colorValue}}>
                <p>{colorValue ? colorValue : "Add a color"}</p>
                <p>{hexValue ? hexValue : null}</p>
            
        </section>
    )
}
Square.defaultProps = { colorValue: "Empty Value Of Color"}

export default Square