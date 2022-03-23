import './OwnerInfo.css';
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import Followers from './icon/Followers';
import Location from './icon/Location';
import Mail from './icon/Mail';
import LinkIcon from './icon/LinkIcon';
import Repositories from './icon/Repositories';
import { onClickUrl } from './helper-function/onClickUrl';
import { getOwnerDataRequest } from '../store/actions/index';

function OwnerInfo({ ownerData }) {

    const dispatch = useDispatch();

    const { username } = useParams();

    const reposSelected = window.location.pathname === `/users/${username}/repos`;

    const followersSelected = window.location.pathname === `/users/${username}/followers`;

    const followingSelected = window.location.pathname === `/users/${username}/following`;

    useEffect(() => {

        dispatch(getOwnerDataRequest(username));

    }, [dispatch, username])

    return (
        <div className='ownerInfo'>
            <div className='ownerInfo__container'>
                <div className='ownerInfo__info'>
                    <img className='ownerInfo__avatar' src={ownerData.avatar_url} alt={ownerData.name} />
                    <h3 className='ownerInfo__name'>
                        {ownerData.name}
                    </h3>
                    <h5 className='ownerInfo__username'>
                        @<span>{ownerData.login}</span>
                    </h5>
                    <p className='ownerInfo__bio'>
                        {ownerData.bio}
                    </p>
                </div>
                <div className='ownerInfo__info_detail'>
                    <div className='ownerInfo__location'>
                        <Location />
                        {ownerData.location || "-"}
                    </div>
                    <div className='ownerInfo__mail'>
                        <Mail />
                        {ownerData.email || "-"}
                    </div>
                    <div className='ownerInfo__link' onClick={onClickUrl(ownerData.blog)}>
                        <LinkIcon />
                        {ownerData.blog || "-"}
                    </div>
                </div>
            </div>
            <div className='ownerInfo__menu'>
                <Link to={`/users/${username}/repos`}>
                    <div className={`ownerInfo__repositories${reposSelected ? ' selected' : ''}`}>
                        <Repositories />
                        Repositories
                    </div>
                </Link>
                <Link to={`/users/${username}/followers`}>
                    <div className={`ownerInfo__followers${followersSelected ? ' selected' : ''}`}>
                        <Followers />
                        Followers
                    </div>
                </Link>
                <Link to={`/users/${username}/following`}>
                    <div className={`ownerInfo__following${followingSelected ? ' selected' : ''}`}>
                        <Followers />
                        Following
                    </div>
                </Link>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        ownerData: state.getOwnerData.ownerData
    }
}

export default connect(mapStateToProps)(OwnerInfo);
// export default OwnerInfo;