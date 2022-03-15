import './AppLayout.css';
import React from 'react'
import Searchbar from './Searchbar';

function AppLayout({ children }) {
    return (
        <div>
            <div className='appLayout__searchbar'>
                <Searchbar />
            </div>
            {children}
        </div>
    )
}

export default AppLayout