import './Button.css'
import React from 'react'
import { onClickUrl } from '../../helper-function/onClickUrl'

function Button ({ text, url }) {
    return (
        <button
            className='button'
            onClick={onClickUrl(url)}
        >{text}
        </button>
    )
}

export default Button
