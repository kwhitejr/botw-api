export const GITHUB_USER_FETCH = "GITHUB_USER_FETCH";
export const GITHUB_USER_SUCCESS = "GITHUB_USER_SUCCESS";
export const GITHUB_USER_FAILURE = "GITHUB_USER_FAILURE";

// export const GITHUB_USER_UPDATE = "GITHUB_USER_UPDATE";
// export const GITHUB_USER_UPDATE_SUCCESS = "GITHUB_USER_UPDATE_SUCCESS";
// export const GITHUB_USER_UPDATE_FAILURE = "GITHUB_USER_UPDATE_FAILURE";

export const fetchGithubUser = username => ({
  type: GITHUB_USER_FETCH,
  username,
});

export const fetchGithubUserSuccess = userProfile => ({
  type: GITHUB_USER_SUCCESS,
  userProfile,
});

export const fetchGithubUserFailure = error => ({
  type: GITHUB_USER_FAILURE,
  error,
});
