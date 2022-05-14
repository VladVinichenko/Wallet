import styled from 'styled-components'
import { sprite } from '../../../assets/images/index'
import { SvgFormPage } from '../svgFormPage/svgFormPage'

export const StyledLoginPage = styled.div`
	background: rgba(255, 255, 255, 0.4);
	height: 100vh;
	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media screen and (min-width: 1280px) {
		flex-direction: row;
		align-items: center;
	}
`

const StyledBlockSvg = styled.div`
	display: none;
	@media screen and (min-width: 768px) {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 530px;
		margin-bottom: 50px;
	}

	@media screen and (min-width: 1280px) {
		flex-direction: column;
		margin-bottom: 0;
		margin-top: 40px;
		margin-right: 140px;
	}
`
export const FormPage = ({ props }) => {
	return (
		<StyledLoginPage>
			<StyledBlockSvg>
				<SvgFormPage props={props} />
				<h1>Finance App</h1>
			</StyledBlockSvg>
		</StyledLoginPage>
	)
}
