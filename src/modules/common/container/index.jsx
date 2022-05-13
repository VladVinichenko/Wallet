import styled from 'styled-components'

export const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	position: relative;
	overflow-x: hidden;
	min-width: 320px;
	@media screen and (min-width: 320px) and (max-width: 767px) {
		padding-left: 20px;
		padding-right: 20px;
		max-width: 767px;
	}
	@media screen and (min-width: 768px) {
		padding-left: 32px;
		padding-right: 32px;
		width: 768px;
	}
	@media screen and (min-width: 1280px) {
		padding-left: 16px;
		padding-right: 16px;
		width: 1280px;
	}
`
