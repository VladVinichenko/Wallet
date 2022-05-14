import styled from 'styled-components'
import { vars } from 'stylesheet'

export const Button = ({ color = true, content, ariaLabel, onClick }) => {
	return (
		<ButtonComponent color={color} aria-label={ariaLabel} onClick={onClick}>
			{content}
		</ButtonComponent>
	)
}

export const ButtonComponent = styled.button`
	width: 300px;
	height: 50px;
	align-content: center;
	text-transform: uppercase;
	color: ${vars.color.font.fourth};
	size: 18px;
	font-weight: 400;
	line-height: 1.5;
	background-color: ${vars.color.background.primary};
	border-radius: ${vars.borderRadius.primary};
	border: ${vars.border.button};
	transition: background-color ${vars.animation.duration};

	&:hover {
		border: none;
		background-color: ${vars.color.accent.primary};
		color: ${vars.color.background.primary};
	}
`
