import styled from 'styled-components'
import { vars } from 'stylesheet'
import { sprite } from 'assets'

const Wrapper = styled.div`
	display: flex;
`

const LogoSvg = styled.svg`
	width: 30px;
	height: 30px;
	margin-right: 15px;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		width: 40px;
		height: 40px;
		margin-right: 20px;
	}
`

const LogoName = styled.span`
	display: flex;
	align-items: center;

	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 1.5;

	color: ${(props) => props.theme.color.font.primary};

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		font-size: 30px;
		line-height: 1.33;
	}
`

export const Logo = () => (
	<Wrapper>
		<LogoSvg width='40' height='40'>
			<use href={`${sprite}#icon-wallet`}></use>
		</LogoSvg>
		<LogoName>Wallet</LogoName>
	</Wrapper>
)
