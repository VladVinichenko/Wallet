import styled from 'styled-components'
const StyledButton = styled.button`
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.5;
	text-align: center;
	letter-spacing: 0.1em;
	text-transform: uppercase;

	padding: 13px 55px 13px 61px;
	width: 280px;
	height: 50px;
	background: #ffffff;
	border: 1px solid #4a56e2;
	border-radius: 20px;
	cursor: pointer;
	&:not(:last-child) {
		margin-bottom: 20px;
	}
	&:hover {
		background: #24cca7;
		border-radius: 20px;
		border: none;
		color: #ffffff;
	}
`

export const ButtonAuth = ({ text, style, onClick }) => {
	return (
		<StyledButton type='submit' style={style} onClick={onClick}>
			{text}
		</StyledButton>
	)
}
