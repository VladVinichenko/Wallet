import styled from 'styled-components'
export const StyledPageSvg = styled.svg`
	@media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		width: 260px;
		height: 250px;
		margin-right: 40px;
	}
	@media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		width: 435px;
		height: 419px;
		margin-right: 0;
	}
`
export const StyledBlockSvg = styled.div`
	display: none;
	@media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 530px;
		margin-bottom: 50px;
	}

	@media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		flex-direction: column;
		margin-bottom: 0;
		margin-right: 145px;
	}
`
export const StyledTitle = styled.h1`
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 30px;
	line-height: 1.15;
	margin-top: 28px;
	color: ${(props) => props.theme.color.font.primary};
`
