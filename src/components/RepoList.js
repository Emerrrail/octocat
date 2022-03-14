import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getReposRequest } from '../store/actions/index';

function RepoList() {

    const { username } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getReposRequest(username));

    }, [dispatch, username])

    return (
        <div>username</div>
    )
}

export default RepoList