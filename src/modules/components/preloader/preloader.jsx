import styled from 'styled-components'

export const Preloader = () => {
	return (
		<Loading>
			<After>
				<span>W</span>
				<span>A</span>
				<span>L</span>
				<span>L</span>
				<span>E</span>
				<span>T</span>
			</After>
		</Loading>
	)
}
const Loading = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000;
	z-index: 9999;
	opacity: 1;
	transition: all $time-cubic;
`
const After = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	text-align: center;
	width: 100%;
	height: 100px;
	line-height: 100px;
	top: -77px;
	& span {
		display: inline-block;
		margin: 0 5px;
		color: #fff;
		font-family: 'Quattrocento Sans', sans-serif;
		filter: blur(0px);
		animation-name: blur-text;
		animation-duration: 1.5s;
		animation-iteration-count: infinite;
		@keyframes blur-text {
			0% {
				filter: blur(0px);
			}

			100% {
				filter: blur(4px);
			}
		}
	}
`
