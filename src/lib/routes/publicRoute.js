import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { authSelectors } from 'store/auth/auth-selectors'
// import { onError } from "../../utilits/messages";

export function PublicRoute({ redirectTo, restricted = false, element }) {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
	if (!redirectTo && restricted) {
		// onError("No path for redirect");
		return <Navigate to='/' />
	}
	return <>{isLoggedIn && restricted ? <Navigate to={redirectTo} /> : element}</>
}
