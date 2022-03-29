import './FollowerItem.css'
import React from 'react'
import { Link } from 'react-router-dom'

function FollowerItem ({ username, avatar }) {
    return (
        <Link to={`/users/${username}/repos`}>
            <div className='followerItem'>
                <img className='followerItem__avatar' src={avatar} alt={username} />
                <h5 className='followerItem__username'>
                    @<span>{username}</span>
                </h5>
            </div>
        </Link>
    )
}

export default FollowerItem
