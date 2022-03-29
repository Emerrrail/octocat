import './AppLayout.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Searchbar from '../../components/Searchbar/Searchbar'
import Toggler from '../../components/icon/Toggler'
import { toggleOwnerInfo } from '../../Services/store/actions/index'

function AppLayout ({ children }) {
    const [matches, setMatches] = useState(window.matchMedia('(max-width: 576px)').matches)

    window.matchMedia('(max-width: 576px)').addEventListener('change', event => setMatches(event.matches))

    const dispatch = useDispatch()

    const onTogglerClick = () => {
        dispatch(toggleOwnerInfo())
    }

    return (
        <div className='appLayout'>
            <div className='appLayout__container'>
                <div
                    className={`appLayout__toggler_container${matches ? '' : ' hidden'}`}
                    onClick={onTogglerClick}
                >
                    <Toggler />
                </div>
                <div className='appLayout__searchbar'>
                    <Searchbar />
                </div>
            </div>
            {children}
        </div>
    )
}

export default AppLayout
