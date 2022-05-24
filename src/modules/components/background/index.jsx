import styled from 'styled-components'
import { vars } from 'stylesheet'
import { sprite } from 'assets'
const Back = styled.div`
	background-color: ${(props) => props.theme.color.background.seconary};
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: -1000;
	overflow: hidden;
`

const Ellipse1 = styled.svg`
	fill: ${(props) => props.theme.color.accent.secondEllipse};
	height: 700px;
	width: 600px;
	position: absolute;

	@media screen and (min-width: ${vars.breakpoints.mobile}) and (max-width: ${vars.breakpoints.mobileUp}) {
		display: none;
	}
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		bottom: -280px;
		left: -150px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		bottom: -280px;
		left: -150px;
	}
	@media screen and (min-width: ${vars.breakpoints.FHD}) {
		height: 1000px;
		width: 800px;
	}
	@media screen and (min-width: ${vars.breakpoints.QHD}) {
		height: 1400px;
		width: 1200px;
		bottom: -480px;
		left: -150px;
	}
`

const Ellipse2 = styled.svg`
	fill: ${(props) => props.theme.color.accent.firstEllipse};
	height: 700px;
	width: 600px;
	position: absolute;

	@media screen and (min-width: ${vars.breakpoints.mobile}) and (max-width: ${vars.breakpoints.mobileUp}) {
		display: none;
	}
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		top: -220px;
		right: -220px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		top: -220px;
		right: -100px;
	}
	@media screen and (min-width: ${vars.breakpoints.FHD}) {
		height: 1000px;
		width: 800px;
	}
	@media screen and (min-width: ${vars.breakpoints.QHD}) {
		height: 1400px;
		width: 1200px;
		top: -420px;
		right: -100px;
	}
`

export const Background = () => {
	return (
		<Back>
			<Ellipse1>
				<use href={sprite + '#ellipse'}></use>
			</Ellipse1>
			<Ellipse2>
				<use href={sprite + '#ellipse'}></use>
			</Ellipse2>
		</Back>
	)
}
