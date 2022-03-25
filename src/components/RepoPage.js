import './RepoPage.css';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { getARepoRequest, getLanguageDataRequest } from '../store/actions/index';
import Star from './icon/Star';
import Fork from './icon/Fork';
import Watch from './icon/Watch';
import Languages from './Languages';
import { onClickUrl } from './helper-function/onClickUrl';
import { dateConverter } from './helper-function/dateConverter';
import { numberShorten } from './helper-function/numberConverter';
import { languageCalc } from './helper-function/languageCalc'

function RepoPage({ repoDetail, language }) {

	const { username, repo } = useParams();

	const dispatch = useDispatch();

	const createdAt = dateConverter(repoDetail.created_at);

	const updatedAt = dateConverter(repoDetail.updated_at);

	const pushedAt = dateConverter(repoDetail.pushed_at)

	const stargazersCount = numberShorten(repoDetail.stargazers_count);

	const forksCount = numberShorten(repoDetail.forks_count);

	const watchersCount = numberShorten(repoDetail.watchers_count);

	const languageResult = languageCalc(language);

	const renderLanguages = languageResult.map((each, index) => {
		return <Languages key={index} language={each.name} percentage={each.value} />
	})

	useEffect(() => {

		dispatch(getARepoRequest(username, repo));
		dispatch(getLanguageDataRequest(username, repo));

	}, [dispatch, username, repo])


	return (
		<div className='repoPage'>
			<div className='repoPage__content'>
				<div>
					<h3 className='repoPage__full_name'>{repoDetail.full_name}</h3>
					<p className='repoPage__description'>{repoDetail.description}</p>
					<div>
						<h5 className='repoPage__language_title'>Languages</h5>
						<div className='repoPage__language_container'>{renderLanguages}</div>
					</div>
				</div>
				<div>
					<div>
						<div className='repoPage__icon_container'>
							<Star />
							<span className='repoPage__count'>{stargazersCount}</span>stars
						</div>
						<div className='repoPage__icon_container'>
							<Fork />
							<span className='repoPage__count'>{forksCount}</span>forks
						</div>
						<div className='repoPage__icon_container'>
							<Watch />
							<span className='repoPage__count'>{watchersCount}</span>watching
						</div>
					</div>
					<div className='repoPage__date'>
						<div className='repoPage__date_container'>
							<div className='repoPage__date_title'>created at:</div>
							<span>{createdAt}</span>
						</div>
						<div className='repoPage__date_container'>
							<div className='repoPage__date_title'>updated at:</div>
							<span>{updatedAt}</span>
						</div>
						<div className='repoPage__date_container'>
							<div className='repoPage__date_title'>pushed at:</div>
							<span>{pushedAt}</span>
						</div>
					</div>
				</div>
			</div>
			<button
				className='repoPage__btn'
				onClick={onClickUrl(repoDetail.svn_url)}
			>
				Visit on Github
			</button>
		</div>
	)
}

// export default RepoPage
function mapStateToProps(state) {
	return {
		repoDetail: state.getARepo.repoDetail,
		language: state.getLanguage.language
	}
}

export default connect(mapStateToProps)(RepoPage);