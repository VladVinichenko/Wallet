import styled from 'styled-components'
import { vars } from '../../../stylesheet/vars'
import { StyledTitle } from '../../components/svgFormPage/svgFormPage'

export const StyledLoginPage = styled.section`
	background-color: ${vars.color.background.primary};
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	@media screen and (min-width: 768px) {
		display: block;
		background-color: transparent;
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow-y: scroll;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	@media screen and (min-width: 1280px) {
		flex-direction: row;
		align-items: center;
		justify-content: center;
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
				<StyledTitle>Finance App</StyledTitle>
			</StyledBlockSvg>
		</StyledLoginPage>
	)
}
