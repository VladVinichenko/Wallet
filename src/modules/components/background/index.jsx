import styled from 'styled-components'
import { vars } from 'stylesheet'
import { sprite } from 'assets'

console.log(sprite)

const Back = styled.div`
	background-color: ${vars.color.background.seconary};
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: -1000;
	overflow: hidden;
`

const Ellipse1 = styled.svg`
	fill: ${vars.color.accent.secondEllipse};
	height: 700px;
	width: 600px;
	position: absolute;

	@media screen and (min-width: ${vars.breakpoints.mobile}) and (max-width: ${vars.breakpoints.mobileUp}) {
		padding-left: 20px;
		padding-right: 20px;
		max-width: ${vars.breakpoints.mobileUp};
	}
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		bottom: -280px;
		left: -150px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		bottom: -280px;
		left: -150px;
	}
`

const Ellipse2 = styled.svg`
	fill: ${vars.color.accent.firstEllipse};
	height: 700px;
	width: 600px;
	position: absolute;

	@media screen and (min-width: ${vars.breakpoints.mobile}) and (max-width: ${vars.breakpoints.mobileUp}) {
		padding-left: 20px;
		padding-right: 20px;
		max-width: ${vars.breakpoints.mobileUp};
	}
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		top: -220px;
		right: -220px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		top: -220px;
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
