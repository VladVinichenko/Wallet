import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { vars } from 'stylesheet'
import { selectorsFinance } from 'store'
const { color, borderRadius, breakpoints } = vars
const Component = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	width: 280px;
	height: 80px;
	padding: 8px 0 12px 32px;

	background: ${color.background.primary};
	border-radius: ${borderRadius.seconary};

	@media screen and (min-width: ${breakpoints.tablet}) {
		width: 336px;
		padding: 8px 0 12px 40px;
	}
	@media screen and (min-width: ${breakpoints.desktop}) {
		width: 395px;
	}
`
const Title = styled.h2`
	font-family: 'Circe';
	font-size: 12px;
	line-height: 1.5;
	text-transform: uppercase;
	color: ${color.font.seconary};
`
const Currency = styled.span`
	font-weight: 400;
`

const Counter = styled.p`
	font-family: 'Poppins';
	font-weight: 700;
	font-size: 30px;
	line-height: 1.5;

	color: ${color.font.primary};
`

export const Balance = () => {
	const totalValue = useSelector(selectorsFinance.getTotal)
	return (
		<Component>
			<Title>Your balance</Title>
			<Counter>
				<Currency> &#x20b4;</Currency> {totalValue}
			</Counter>
		</Component>
	)
}

Balance.className = Component
