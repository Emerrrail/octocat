import './Button.css'
import React from 'react'
import { onUrlClick } from '../../helper-function/onUrlClick'

function Button ({ text, url }) {
    return (
        <button
            className='button'
            onClick={onUrlClick(url)}
        >{text}
        </button>
    )
}

export default Button
