import { FormLogin } from './formLogin/formLogin'
import { sprite } from '../../../assets/images/index.js'
import { StyledLoginPage } from '../../components/formPage/formPage'
import { StyledBlockSvg, StyledPageSvg } from '../../components/svgFormPage/svgFormPage'
import { useSelector } from 'react-redux'
import { authSelectors } from 'store/auth/auth-selectors'
import { useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { ROUTES } from 'lib'

export const Login = () => {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
	const navigate = useNavigate()
	// useEffect(() => {
	// 	isLoggedIn && navigate(`/${ROUTES.HOME}`)
	// }, [isLoggedIn])

	return (
		<>
			{!isLoggedIn && (
				<StyledLoginPage>
					<StyledBlockSvg>
						<StyledPageSvg>
							<use href={sprite + '#icon-login-img'} />
						</StyledPageSvg>
						<h1>Finance App</h1>
					</StyledBlockSvg>
					<FormLogin />
				</StyledLoginPage>
			)}
			{/* {isLoggedIn && <Navigate to={`/${ROUTES.HOME}`} />} */}
		</>
	)
}
