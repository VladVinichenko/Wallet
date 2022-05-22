import styled from 'styled-components'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { vars } from 'stylesheet/vars.js'
const ShowPassword = styled.button`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 50%;
	right: 10px;
	width: 36px;
	height: 36px;
	color: gray;

	background-color: transparent;
	border: 0;
	border-radius: 50%;
	cursor: pointer;
	transform: translate(0, -50%) scale(1);
	transition: all ${vars.animation.duration} ${vars.animation.function};

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

const Visibility = {
	position: 'absolute',

	top: ' 50%',
	left: '50%',
	width: '20px',
	height: '20px',
	transform: 'translate(-50%, -50%)',
	transition: 'all ${vars.animation.duration} ${vars.animation.function}',
}

export const ShowPasswordButton = ({ type, onClickBtn, passwordShown, confirmPasswordShown }) => {
	return (
		<ShowPassword
			type={type}
			onClick={onClickBtn}
			passwordShown={passwordShown}
			confirmPasswordShown={confirmPasswordShown}
			title={confirmPasswordShown || passwordShown ? 'Hide password' : 'Show password'}
			arial-label={confirmPasswordShown || passwordShown ? 'Hide password' : 'Show password'}
		>
			{confirmPasswordShown || passwordShown ? (
				<MdOutlineVisibility style={Visibility} />
			) : (
				<MdOutlineVisibilityOff style={Visibility} />
			)}
		</ShowPassword>
	)
}
