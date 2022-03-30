import './AppLayout.css'
import React from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'

function AppLayout ({ children }) {
    return (
        <div className='appLayout'>
            <div className='appLayout__container'>
                <div className='appLayout__searchbar'>
                    <Searchbar />
                </div>
            </div>
            {children}
        </div>
    )
}

export default AppLayout
