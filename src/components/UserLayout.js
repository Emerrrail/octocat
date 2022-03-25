import React from 'react'
import OwnerInfo from './OwnerInfo'

function UserLayout({ children }) {
    return (
        <div>
            <OwnerInfo />
            {children}
        </div>
    )
}

export default UserLayout