import { GET_A_REPO_REQUEST, GET_A_REPO_SUCCESS, GET_A_REPO_ERROR } from "../../actions/index";
import github from "../../../apis/github";
import { call, put, takeLatest } from "redux-saga/effects";


export function* watcherGetARepoSaga() {
    yield takeLatest(GET_A_REPO_REQUEST, fetchARepo);
}

export function* fetchARepo(action) {
    const { payload } = action;
    try {
        // const { data } = yield call(getApi, ...[payload.owner, payload.repo]);
        yield put(fetchARepoSuccess(dataTemp));
    } catch (error) {
        yield put(fetchARepoError(error));
    }
}

const getApi = async (owner, repo) => {
    const response = await github.get(`/repos/${owner}/${repo}`)
    return response;
}

export const fetchARepoSuccess = (data) => {

    console.log(data, 'fetch a repo success');

    return {
        type: GET_A_REPO_SUCCESS,
        payload: {
            repoDetail: data
        }
    }
}

export const fetchARepoError = (error) => {

    console.log('fetch a repo error', error);

    return {
        type: GET_A_REPO_ERROR,
        payload: {
            error: error
        }
    }
}

const dataTemp = {
    "id": 20978623,
    "node_id": "MDEwOlJlcG9zaXRvcnkyMDk3ODYyMw==",
    "name": "hello-worId",
    "full_name": "octocat/hello-worId",
    "private": false,
    "owner": {
        "login": "octocat",
        "id": 583231,
        "node_id": "MDQ6VXNlcjU4MzIzMQ==",
        "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/octocat",
        "html_url": "https://github.com/octocat",
        "followers_url": "https://api.github.com/users/octocat/followers",
        "following_url": "https://api.github.com/users/octocat/following{/other_user}",
        "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
        "organizations_url": "https://api.github.com/users/octocat/orgs",
        "repos_url": "https://api.github.com/users/octocat/repos",
        "events_url": "https://api.github.com/users/octocat/events{/privacy}",
        "received_events_url": "https://api.github.com/users/octocat/received_events",
        "type": "User",
        "site_admin": false
    },
    "html_url": "https://github.com/octocat/hello-worId",
    "description": "My first repository on GitHub.",
    "fork": false,
    "url": "https://api.github.com/repos/octocat/hello-worId",
    "forks_url": "https://api.github.com/repos/octocat/hello-worId/forks",
    "keys_url": "https://api.github.com/repos/octocat/hello-worId/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/octocat/hello-worId/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/octocat/hello-worId/teams",
    "hooks_url": "https://api.github.com/repos/octocat/hello-worId/hooks",
    "issue_events_url": "https://api.github.com/repos/octocat/hello-worId/issues/events{/number}",
    "events_url": "https://api.github.com/repos/octocat/hello-worId/events",
    "assignees_url": "https://api.github.com/repos/octocat/hello-worId/assignees{/user}",
    "branches_url": "https://api.github.com/repos/octocat/hello-worId/branches{/branch}",
    "tags_url": "https://api.github.com/repos/octocat/hello-worId/tags",
    "blobs_url": "https://api.github.com/repos/octocat/hello-worId/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/octocat/hello-worId/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/octocat/hello-worId/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/octocat/hello-worId/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/octocat/hello-worId/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/octocat/hello-worId/languages",
    "stargazers_url": "https://api.github.com/repos/octocat/hello-worId/stargazers",
    "contributors_url": "https://api.github.com/repos/octocat/hello-worId/contributors",
    "subscribers_url": "https://api.github.com/repos/octocat/hello-worId/subscribers",
    "subscription_url": "https://api.github.com/repos/octocat/hello-worId/subscription",
    "commits_url": "https://api.github.com/repos/octocat/hello-worId/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/octocat/hello-worId/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/octocat/hello-worId/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/octocat/hello-worId/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/octocat/hello-worId/contents/{+path}",
    "compare_url": "https://api.github.com/repos/octocat/hello-worId/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/octocat/hello-worId/merges",
    "archive_url": "https://api.github.com/repos/octocat/hello-worId/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/octocat/hello-worId/downloads",
    "issues_url": "https://api.github.com/repos/octocat/hello-worId/issues{/number}",
    "pulls_url": "https://api.github.com/repos/octocat/hello-worId/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/octocat/hello-worId/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/octocat/hello-worId/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/octocat/hello-worId/labels{/name}",
    "releases_url": "https://api.github.com/repos/octocat/hello-worId/releases{/id}",
    "deployments_url": "https://api.github.com/repos/octocat/hello-worId/deployments",
    "created_at": "2014-06-18T21:26:19Z",
    "updated_at": "2022-03-15T03:48:12Z",
    "pushed_at": "2022-02-13T04:15:31Z",
    "git_url": "git://github.com/octocat/hello-worId.git",
    "ssh_url": "git@github.com:octocat/hello-worId.git",
    "clone_url": "https://github.com/octocat/hello-worId.git",
    "svn_url": "https://github.com/octocat/hello-worId",
    "homepage": null,
    "size": 160,
    "stargazers_count": 99,
    "watchers_count": 99,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "forks_count": 89,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 31,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "topics": [

    ],
    "visibility": "public",
    "forks": 89,
    "open_issues": 31,
    "watchers": 99,
    "default_branch": "master",
    "temp_clone_token": null,
    "network_count": 89,
    "subscribers_count": 28
}
