import './Error.css';
import React from 'react'

function Error({ message }) {
    return (
        <div className='error'>
            <p className='error__text'>
                {message}
            </p>
        </div>
    )
}

export default Error