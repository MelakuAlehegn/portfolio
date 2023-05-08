import React from 'react'
import './Button.css'
function Button(props) {
    return (
        <div>
            <button className='Resume' style={{ height: props.height, width: props.width }}>{props.name}</button>
        </div>
    )
}

export default Button