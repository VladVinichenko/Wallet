import styled from 'styled-components'
import { vars } from 'stylesheet'

export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	position: relative;
	overflow-x: hidden;
	min-width: 320px;

	@media screen and (min-width: 320px) and (max-width: 767px) {
		min-width: ${(props) => props.theme.breakpoints.mobile};
		/* overflow-x: hidden; */
		/* min-width: ${(props) => props.theme.breakpoints.mobile}; */
	}
	@media screen and (min-width: ${(props) => props.theme.breakpoints.mobile}) and (max-width: ${(props) =>
			props.theme.breakpoints.mobileUp}) {
		padding-left: 20px;
		padding-right: 20px;
		width: ${(props) => props.theme.breakpoints.mobile};
	}
	@media screen and (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		padding-left: 32px;
		padding-right: 32px;
		width: ${(props) => props.theme.breakpoints.tablet};
	}
	@media screen and (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		padding-left: 16px;
		padding-right: 16px;
		width: ${(props) => props.theme.breakpoints.desktop};
	}
`
