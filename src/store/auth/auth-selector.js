const getIsLoggedIn = (state) => state.auth.isLoggedIn

const getUsername = (state) => state.auth.user.name

export const authSelectors = {
	getIsLoggedIn,
	getUsername,
}
