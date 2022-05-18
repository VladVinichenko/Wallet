import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { authSelectors } from 'store/auth/auth-selectors'

export function PrivateRoute({ element, redirectTo }) {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
	return <>{isLoggedIn ? element : <Navigate to={redirectTo} />}</>
}
