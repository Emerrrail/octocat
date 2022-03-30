import './FollowerList.css'
import React from 'react'
import FollowerItem from '../FollowerItem/FollowerItem'

function FollowerList ({ followers }) {
    const renderFollowerItems = followers.map((follower, index) => {
        return <FollowerItem
            key={index}
            username={follower.login}
            avatar={follower.avatar_url}
        />
    })

    return (
        <div className='followerList'>
            {renderFollowerItems}
        </div>
    )
}

export default FollowerList
