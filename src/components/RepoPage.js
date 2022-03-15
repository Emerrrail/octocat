import './RepoPage.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getARepoRequest } from '../store/actions/index'

function RepoPage({ repoDetail }) {

  const { username, repo } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(getARepoRequest(username, repo));

  }, [dispatch, username])

  return (
    <div className='repoPage'>
      {repo}
    </div>
  )
}

// export default RepoPage
function mapStateToProps(state) {
  return {
    repoDetail: state.getARepo.repo
  }
}

export default connect(mapStateToProps)(RepoPage);