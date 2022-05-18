import { BsPlusLg } from 'react-icons/bs'
import styled from 'styled-components'
import { vars } from 'stylesheet'

const Button = styled.button`
	position: absolute;
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

	@media screen and (min-width: 768px) {
		right: 40px;
		bottom: 40px;
	}

	svg {
		width: 20px;
		height: 20px;
		fill: ${vars.color.background.primary};
	}
`

export const ButtonAddTransaction = ({ onClickButton }) => {
	return (
		<Button type='button' onClick={onClickButton}>
			<BsPlusLg />
		</Button>
	)
}
