//A button component that has two states (base and accent)
//that can be toggled by the "color" property

import styled from 'styled-components'
import { vars } from 'stylesheet'

const ButtonPrimary = styled.button`
	width: 300px;
	height: 50px;
	align-content: center;
	text-transform: uppercase;

	color: ${vars().color.background.primary};
	size: 18px;
	font-weight: 400;
	line-height: 1.5;
	background-color: ${vars().color.accent.primary};
	border-radius: ${vars().borderRadius.primary};
	border: none;
	/* transition: background-color ${vars().animation.duration}; */
	transition: ${vars().animation.duration};
	box-shadow: ${vars().boxShadow.button};

	&:hover {
		transform: translateY(-5px);
		box-shadow: ${vars().boxShadow.buttonHover};
	}

	&:active {
		transform: translateY(-2px);
		box-shadow: ${vars().boxShadow.buttonActive};
	}
`
const ButtonAccent = styled(ButtonPrimary)`
	color: ${vars().color.font.fourth};
	border: ${vars().border.button};
	background-color: ${vars().color.background.primary};
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
