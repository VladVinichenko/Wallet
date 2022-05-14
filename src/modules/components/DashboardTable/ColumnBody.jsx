import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import styled from 'styled-components'


const Component = styled.td`
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
	color: ${(prop) => prop.color};
	border-left: 5px solid ${(prop) => prop.colorBorder};
	
	font-family: 'Circe';
	font-size: 16px;
	line-height: 1.5;

	@media screen and (min-width: 760px) {
		justify-content: ${(prop) => prop.justifyContent};
		border-left: none;
		padding: 0;
	}
`
const Title = styled.span`
	font-family: 'Circe';
	font-weight: 700;
	font-size: 18px;
	line-height: 1.5;
	color: #000000;
`

export const ColumnBody = ({ data, tableColumns, type, viewport }) => {
	const [typeAction, setTypeAction] = useState(false)
	
	useEffect(() => {
		type === 'decrement' ? setTypeAction(false) : setTypeAction(true)
	}, [type])

	const formateData = (elem) => {
		switch (elem.type) {
			case 'UnixTime':
				const currentData = new Date(data[elem.value]*1000)
				return `${currentData.toLocaleDateString()}`
			case 'Action':
				if (data[elem.value] === 'decrement') {
					return '-'
				} else {
					return '+'
				}
			case 'Category':
				return data[elem.value].name
			default:
				return data[elem.value]
		}
	}
	return (
		<>
			{tableColumns.map((el, idx) => {
				return (
					<>
						<Component
							key={nanoid()}
							colorBorder={typeAction ? '#24CCA7' : '#FF6596'}
							color={el.type === 'Summa' ? (typeAction ? '#24CCA7' : '#FF6596') : '#000000'}
							width={viewport >= 760 && el.style.width}
							justifyContent={el.style.justifyContent}
						>
							{viewport <= 759 && <Title>{el.label}</Title>}
							{formateData(el)}
						</Component>
					</>
				)
			})}
		</>
	)
}
ColumnBody.className = Component
