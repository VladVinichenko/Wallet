import styled from 'styled-components'

const Component = styled.div`
	display: flex;
  flex-direction: column;
	align-items: flex-start;

	width: 280px;
	height: 80px;
  padding: 8px 0 12px 32px;

	background: #FFFFFF; 
	border-radius: 30px;
  border: 1px solid #000;
  @media screen and (min-width: 768px) {
    width: 336px;
    padding: 8px 0 12px 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`
const Title = styled.h2`
  font-family: 'Circe';
  font-size: 12px;
  line-height: 1.5;
  text-transform: uppercase;
  color: #A6A6A6;
`
const Currency = styled.span`
  font-weight: 400;
`

const Counter = styled.p`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;

  color: #000000;
`

export const Balance = () => {
	return (
		<Component>
			<Title>Your balance</Title>
			<Counter>
				<Currency> &#x20b4;</Currency> 24000.00
			</Counter>
		</Component>
	)
}

Balance.className = Component