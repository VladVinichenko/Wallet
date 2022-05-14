import { FormRegistration } from './formRegistration/formRegistration'
import { sprite } from '../../../assets/images/index.js'
import { StyledLoginPage } from '../../components/formPage/formPage'
import { StyledBlockSvg, StyledPageSvg } from '../../components/svgFormPage/svgFormPage'
export const Registration = () => {
	return (
		<StyledLoginPage>
			<StyledBlockSvg>
				<StyledPageSvg>
					<use href={sprite + '#icon-register-img'} />
				</StyledPageSvg>
				<h1>Finance App</h1>
			</StyledBlockSvg>
			<FormRegistration />
		</StyledLoginPage>
	)
}
