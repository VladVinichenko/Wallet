import { FormLogin } from '../../components/FormLogin/formLogin'
import { sprite } from '../../../assets/images/index.js'
import { StyledLoginPage } from '../../components/FormPage/formPage'
import { StyledBlockSvg, StyledPageSvg } from '../../components/svgFormPage/svgFormPage'
import { useSelector } from 'react-redux'
import { authSelectors } from 'store/auth/auth-selectors'
import { StyledTitle } from '../../components/svgFormPage/svgFormPage'

export const Login = () => {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)

	return (
		<>
			{!isLoggedIn && (
				<StyledLoginPage>
					<StyledBlockSvg>
						<StyledPageSvg>
							<use href={sprite + '#icon-login-img'} />
						</StyledPageSvg>
						<StyledTitle>Finance App</StyledTitle>
					</StyledBlockSvg>
					<FormLogin />
				</StyledLoginPage>
			)}
		</>
	)
}
