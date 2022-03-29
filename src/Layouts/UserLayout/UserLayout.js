import React from 'react'
import OwnerInfo from '../../components/OwnerInfo/OwnerInfo'

function UserLayout ({ children }) {
    return (
        <div>
            <OwnerInfo />
            {children}
        </div>
    )
}

export default UserLayout
