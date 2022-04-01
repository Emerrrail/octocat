import './OwnerInfo.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, connect } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import Followers from '../icon/Followers'
import Location from '../icon/Location'
import Mail from '../icon/Mail'
import Button from '../Button/Button'
import LinkIcon from '../icon/LinkIcon'
import Repositories from '../icon/Repositories'
import { onUrlClick } from '../../helper-function/onUrlClick'
import { getOwnerDataRequest } from '../../Services/store/actions/index'

function OwnerInfo ({ ownerData, loading, open, onSwitchButtonClick }) {
    const [matches, setMatches] = useState(window.matchMedia('(max-width: 576px)').matches)

    window.matchMedia('(max-width: 576px)').addEventListener('change', (event) => setMatches(event.matches))

    const dispatch = useDispatch()

    const { username } = useParams()

    const reposSelected = window.location.pathname === `/users/${username}/repos`

    const followersSelected = window.location.pathname === `/users/${username}/followers`

    useEffect(() => {
        dispatch(getOwnerDataRequest(username))
    }, [dispatch, username])

    return (
        <div className={`ownerInfo${open ? ' open' : ''}${matches ? '' : ' open'}`}>
            <div className='ownerInfo__container'>
                <div className='ownerInfo__info'>
                    <img className='ownerInfo__avatar' src={ownerData.avatar_url} alt={ownerData.name} />
                    {loading && <h3 className="placeholder__title placeholder-glow placeholder_center_1">
                        <span className="placeholder col-6"></span>
                    </h3>}
                    {loading && <h5 className="placeholder__title placeholder-glow placeholder_center_2">
                        <span className="placeholder col-4"></span>
                    </h5>}

                    <h3 className='ownerInfo__name'>
                        {ownerData.name}
                    </h3>
                    <h5 className='ownerInfo__username'>
                        @<span>{ownerData.login}</span>
                    </h5>
                    {ownerData.bio &&
                        <p className='ownerInfo__bio'>
                            {ownerData.bio}
                        </p>}
                </div>
                <div className='ownerInfo__info_detail'>
                    {ownerData.location &&
                        <div className='ownerInfo__location'>
                            <Location />
                            {ownerData.location}
                        </div>}
                    {ownerData.email &&
                        <div className='ownerInfo__mail'>
                            <Mail />
                            {ownerData.email}
                        </div>}
                    {ownerData.blog &&
                        <div className='ownerInfo__link' onClick={onUrlClick(ownerData.blog)}>
                            <LinkIcon />
                            {ownerData.blog}
                        </div>}
                </div>
                <div className='ownerInfo__btn'>
                    <Button text='Visit Github' url={ownerData.html_url} />
                </div>
            </div>
            <div className='ownerInfo__menu'>
                <Link to={`/users/${username}/repos`}>
                    <div
                        className={`ownerInfo__repositories${reposSelected ? ' selected' : ''}`}
                        onClick={onSwitchButtonClick}
                    >
                        <Repositories />
                        Repositories
                    </div>
                </Link>
                <Link to={`/users/${username}/followers`}>
                    <div
                        className={`ownerInfo__followers${followersSelected ? ' selected' : ''}`}
                        onClick={onSwitchButtonClick}
                    >
                        <Followers />
                        Followers
                    </div>
                </Link>
            </div>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        ownerData: state.getOwnerData.ownerData,
        loading: state.getOwnerData.loading,
        open: state.toggleOwnerInfo.open
    }
}

export default connect(mapStateToProps)(OwnerInfo)
// export default OwnerInfo;
