import { FormRegistration } from './formRegistration'
import { sprite } from '../../../../assets/images/index.js'
import { StyledLoginPage } from '../../formPage/formPage'
import { StyledBlockSvg, StyledPageSvg } from '../../svgFormPage/svgFormPage'
import { useSelector } from 'react-redux'
import { authSelectors } from 'store/auth/auth-selectors'
import { StyledTitle } from '../../../components/svgFormPage/svgFormPage'
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
						<StyledTitle>Finance App</StyledTitle>
					</StyledBlockSvg>
					<FormRegistration />
				</StyledLoginPage>
			)}
		</>
	)
}
