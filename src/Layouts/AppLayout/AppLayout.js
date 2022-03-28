import './AppLayout.css';
import React from 'react';
import Searchbar from '../../components/Searchbar/Searchbar';

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