import { BsPlusLg } from 'react-icons/bs'
import styled from 'styled-components'
import { vars } from 'stylesheet'

const Button = styled.button`
	position: fixed;
	right: 20px;
	bottom: 20px;
	width: 44px;
	height: 44px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	cursor: pointer;
	background-color: ${vars.color.accent.primary};
	border-radius: 50%;
	filter: ${vars.filter.shadowButton};
	z-index: 1;

	@media screen and (min-width: 768px) {
		right: 40px;
		bottom: 40px;
	}

	svg {
		width: 20px;
		height: 20px;
		fill: ${vars.color.background.primary};
		transition: transform 0.8s ease-in-out;
		&:hover,
		&:focus {
			transform: rotate(180deg);
		}
	}
`

export const ButtonAddTransaction = ({ onClickButton }) => {
	return (
		<Button type='button' onClick={onClickButton}>
			<BsPlusLg />
		</Button>
	)
}
