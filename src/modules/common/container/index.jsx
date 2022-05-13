import styled from 'styled-components'
import { vars } from 'stylesheet'

export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	position: relative;
	overflow-x: hidden;
	min-width: ${vars.breakpoints.mobile};
	@media screen and (min-width: ${vars.breakpoints.mobile}) and (max-width: ${vars.breakpoints.mobileUp}) {
		padding-left: 20px;
		padding-right: 20px;
		max-width: ${vars.breakpoints.mobileUp};
	}
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		padding-left: 32px;
		padding-right: 32px;
		width: ${vars.breakpoints.tablet};
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		padding-left: 16px;
		padding-right: 16px;
		width: ${vars.breakpoints.desktop};
	}
`
