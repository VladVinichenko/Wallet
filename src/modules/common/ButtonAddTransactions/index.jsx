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
	background-color: ${(props) => props.theme.color.accent.primary};
	border-radius: 50%;
	filter: ${(props) => props.theme.filter.shadowButton};
	z-index: 1;

	&:hover,
	&:focus {
		svg {
			transform: rotate(180deg);
		}
	}

	@media screen and (min-width: ${vars.breakpoints.mobileUp}) {
		right: 40px;
		bottom: 40px;
	}

	svg {
		width: 20px;
		height: 20px;
		fill: ${(props) => props.theme.color.background.primary};
		transition: transform 0.8s ease-in-out;
	}
`

export const ButtonAddTransaction = ({ onClickButton }) => {
	return (
		<Button type='button' onClick={onClickButton}>
			<BsPlusLg />
		</Button>
	)
}
