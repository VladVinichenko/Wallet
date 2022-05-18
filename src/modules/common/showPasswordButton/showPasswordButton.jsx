import { useState } from 'react'

import styled from 'styled-components'

import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

const ShowPassword = styled.button`
	position: absolute;
	top: 50%;
	right: 10px;

	width: 36px;

	color: gray;
	background-color: transparent;

	border: 0;
	border-radius: 50%;
	cursor: pointer;

	transform: translate(0, -50%) scale(1);

	transition: all $transition-duration $timing-function;

	&:hover,
	&:focus {
		color: $svg-hover-color;
		background-color: $small-button-hover-color;
	}

	&:active {
		background-color: $small-button-active-color;

		transform: translate(0, -50%) scale(0.95);
	}
`

const ShowSvg = styled(MdOutlineVisibility, MdOutlineVisibilityOff)`
	position: absolute;
	top: 50%;
	left: 50%;

	width: 24px;
	height: 24px;

	transform: translate(-50%, -50%);
`

export const ShowPasswordButton = ({ type, onClickButton, passwordShown, confirmPasswordShown }) => {
	const [isShown, setIsShown] = useState(false)

	console.log(passwordShown)
	console.log(confirmPasswordShown)

	return (
		<ShowPassword
			type={type}
			onClick={onClickButton}
			passwordShown={passwordShown}
			confirmPasswordShown={confirmPasswordShown}
			title={isShown ? 'Hide password' : 'Show password'}
			arial-label={isShown ? 'Hide password' : 'Show password'}
		>
			{confirmPasswordShown || passwordShown ? <MdOutlineVisibility /> : <MdOutlineVisibilityOff />}
		</ShowPassword>
	)
}
