import { FormRegistration } from './formRegistration/formRegistration'
import { sprite } from '../../../assets/images/index.js'
import { StyledLoginPage } from '../../components/formPage/formPage'
import { StyledBlockSvg, StyledPageSvg } from '../../components/svgFormPage/svgFormPage'
import { useSelector } from 'react-redux'
import { authSelectors } from 'store/auth/auth-selectors'

export const Registration = () => {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
	return (
		<>
			{!isLoggedIn && (
				<StyledLoginPage>
					<StyledBlockSvg>
						<StyledPageSvg>
							<use href={sprite + '#icon-register-img'} />
						</StyledPageSvg>
						<h1>Finance App</h1>
					</StyledBlockSvg>
					<FormRegistration />
				</StyledLoginPage>
			)}
		</>
	)
}
