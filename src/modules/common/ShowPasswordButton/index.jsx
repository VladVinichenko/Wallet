import styled from 'styled-components'

import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'

const ShowPassword = styled.button`
	position: absolute;
	top: 50%;

	display: flex;
	align-items: center;
	justify-content: center;
	right: 10px;
	width: 36px;
	height: 36px;
	color: gray;

	background-color: transparent;

	border: 0;
	border-radius: 50%;
	cursor: pointer;
	transform: translate(0, -50%) scale(1);
	transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

	&:hover,
	&:focus {
		color: #050505;
		background-color: #e6e6e6;
	}

	&:active {
		background-color: #b3b3b3;
		transform: translate(0, -50%) scale(0.95);
	}
`

const Visibility = styled(MdOutlineVisibility)`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 20px;
	height: 20px;
	transform: translate(-50%, -50%);
	transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`
const VisibilityOff = styled(MdOutlineVisibilityOff)`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 20px;
	height: 20px;
	transform: translate(-50%, -50%);
	transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const ShowPasswordButton = ({ type, onClickButton, passwordShown, confirmPasswordShown }) => {
	return (
		<ShowPassword
			type={type}
			onClick={onClickButton}
			passwordShown={passwordShown}
			confirmPasswordShown={confirmPasswordShown}
			title={confirmPasswordShown || passwordShown ? 'Hide password' : 'Show password'}
			arial-label={confirmPasswordShown || passwordShown ? 'Hide password' : 'Show password'}
		>
			{confirmPasswordShown || passwordShown ? <Visibility /> : <VisibilityOff />}
		</ShowPassword>
	)
}
