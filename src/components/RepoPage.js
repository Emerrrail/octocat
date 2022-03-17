import './RepoPage.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getARepoRequest } from '../store/actions/index';
import Star from './icon/Star';
import Fork from './icon/Fork';
import Watch from './icon/Watch';

function RepoPage({ repoDetail }) {

	const { username, repo } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {

		dispatch(getARepoRequest(username, repo));

	}, [dispatch, username])

	//再做外開網頁

	return (
		<div className='repoPage'>
			<div className='repoPage__content'>
				<div>
					<h3 className='repoPage__full_name'>{repoDetail.full_name}</h3>
					<p className='repoPage__description'>{repoDetail.description}</p>
				</div>
				<div>
					<div className='repoPage__icon_container'>
						<Star />
						{repoDetail.stargazers_count} stars
					</div>
					<div className='repoPage__icon_container'>
						<Watch />
						{repoDetail.watchers_count} watching
					</div>
					<div className='repoPage__icon_container'>
						<Fork />
						{repoDetail.forks_count} forks
					</div>
				</div>
			</div>
			<a href={repoDetail.svn_url}>
				<button className='repoPage__btn'>Visit on Github</button>
			</a>
		</div>
	)
}

// export default RepoPage
function mapStateToProps(state) {
	return {
		repoDetail: state.getARepo.repoDetail
	}
}

export default connect(mapStateToProps)(RepoPage);