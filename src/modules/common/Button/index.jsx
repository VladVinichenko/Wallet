//A button component that has two states (base and accent)
//that can be toggled by the "color" property

import styled from 'styled-components'
import { vars } from 'stylesheet'

const ButtonPrimary = styled.button`
	width: 300px;
	height: 50px;
	align-content: center;
	text-transform: uppercase;

	color: ${(props) => props.theme.color.background.primary};
	size: 18px;
	font-weight: 400;
	line-height: 1.5;
	background-color: ${(props) => props.theme.color.accent.primary};
	border-radius: ${(props) => props.theme.borderRadius.primary};
	border: none;
	/* transition: background-color ${(props) => props.theme.animation.duration}; */
	transition: ${(props) => props.theme.animation.duration};
	box-shadow: ${(props) => props.theme.boxShadow.button};

	&:hover {
		transform: translateY(-5px);
		box-shadow: ${(props) => props.theme.boxShadow.buttonHover};
	}

	&:active {
		transform: translateY(-2px);
		box-shadow: ${(props) => props.theme.boxShadow.buttonActive};
	}
`
const ButtonAccent = styled(ButtonPrimary)`
	color: ${(props) => props.theme.color.font.fourth};
	border: ${(props) => props.theme.border.button};
	background-color: ${(props) => props.theme.color.background.primary};
`

export const Button = ({ color = true, children, type = 'button', ariaLabel, onClickButton, style }) => {
	return (
		<>
			{color && (
				<ButtonPrimary type={type} aria-label={ariaLabel} onClick={onClickButton} style={style}>
					{children}
				</ButtonPrimary>
			)}
			{!color && (
				<ButtonAccent type={type} aria-label={ariaLabel} onClick={onClickButton} style={style}>
					{children}
				</ButtonAccent>
			)}
		</>
	)
}
