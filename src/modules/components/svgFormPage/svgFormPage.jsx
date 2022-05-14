import styled from 'styled-components'

export const StyledPageSvg = styled.svg`
	width: 260px;
	height: 250px;
	margin-right: 40px;
	@media screen and (min-width: 1280px) {
		margin-right: 0;
		width: 435px;
		height: 419px;
		margin-bottom: 28px;
	}
`
export const StyledBlockSvg = styled.div`
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
export const SvgFormPage = ({ props }) => {
	return
}
