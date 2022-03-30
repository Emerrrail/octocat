import './UserLayout.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import OwnerInfo from '../../components/OwnerInfo/OwnerInfo'
import Toggler from '../../components/icon/Toggler'
import { toggleOwnerInfo } from '../../Services/store/actions/index'

function UserLayout ({ children }) {
    const [matches, setMatches] = useState(window.matchMedia('(max-width: 576px)').matches)

    window.matchMedia('(max-width: 576px)').addEventListener('change', event => setMatches(event.matches))

    const dispatch = useDispatch()

    const onTogglerClick = () => {
        dispatch(toggleOwnerInfo())
    }

    return (
        <div>
            <div
                className={`userLayout__toggler_container${matches ? '' : ' hidden'}`}
                onClick={onTogglerClick}
            >
                <Toggler />
            </div>
            <OwnerInfo />
            {children}
        </div>
    )
}

export default UserLayout
