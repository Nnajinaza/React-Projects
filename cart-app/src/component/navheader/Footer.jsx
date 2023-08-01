import React from 'react'

const style = {sticky: 'bottom'}

function Footer() {
    return (
        <footer style={style}>
            <h3 style={{float: 'left'}}>Copyright @ {new Date().getFullYear()}</h3>
        </footer>
    )
}

export default Footer
