import { BsPlusLg } from 'react-icons/bs'
import styled from 'styled-components'

const Button = styled.button`
	position: absolute;
	right: 20px;
	bottom: 20px;
	width: 44px;
	height: 44px;
	padding: 0;
	cursor: pointer;
	background-color: #24cca7;
	border-radius: 50%;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

	@media screen and (min-width: 768px) {
		right: 40px;
		bottom: 40px;
	}

	svg {
		width: 20px;
		height: 20px;
		fill: white;
	}
`

export const ButtonAddTransactios = () => {
	return (
		<Button>
			<BsPlusLg />
		</Button>
	)
}
