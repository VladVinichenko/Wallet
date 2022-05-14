import { FormLogin } from './formLogin/formLogin'
import { sprite } from '../../../assets/images/index.js'
import { StyledLoginPage } from '../../components/formPage/formPage'
import { StyledBlockSvg, StyledPageSvg } from '../../components/svgFormPage/svgFormPage'
export const Login = () => {
	return (
		<StyledLoginPage>
			<StyledBlockSvg>
				<StyledPageSvg>
					<use href={sprite + '#icon-login-img'} />
				</StyledPageSvg>
				<h1>Finance App</h1>
			</StyledBlockSvg>
			<FormLogin />
		</StyledLoginPage>
	)
}
