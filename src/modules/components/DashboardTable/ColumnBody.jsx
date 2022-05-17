import { useState, useEffect, useMemo } from 'react'
import { nanoid } from 'nanoid'
import styled from 'styled-components'
import { InView } from 'react-intersection-observer'
import { vars } from 'stylesheet'

const { color, breakpoints } = vars
const Component = styled.td`
	position: relative;
	display: flex;
	justify-content: space-between;
	padding: 0 20px;
	color: ${(prop) => prop.color};
	border-left: 5px solid ${(prop) => prop.colorBorder};

	font-size: 16px;
	line-height: 1.5;

	@media screen and (min-width: ${breakpoints.tablet}) {
		justify-content: ${(prop) => prop.justifyContent};
		border-left: none;
		padding: 0;
	}
	div {
		position: absolute;
		height: 1px;
		width: 1px;
	}
`
const Title = styled.span`
	font-weight: 700;
	font-size: 18px;
	line-height: 1.5;
	color: ${color.font.colorTitle};
`

export const ColumnBody = ({ data, tableColumns, type, viewport, setInView, isLast }) => {
	const [typeAction, setTypeAction] = useState(false)

	useEffect(() => {
		type === 'decrement' ? setTypeAction(false) : setTypeAction(true)
	}, [type])

	const formateData = (elem) => {
		switch (elem.type) {
			case 'UnixTime':
				const currentData = new Date(data[elem.value] * 1000)
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
	return useMemo(() => {
		return (
			<>
				{tableColumns.map((el, idx) => {
					return (
						<>
							<Component
								key={nanoid()}
								colorBorder={typeAction ? `${color.font.positive}` : `${color.font.negative}`}
								color={
									el.type === 'Summa'
										? typeAction
											? `${color.font.positive}`
											: `${color.font.negative}`
										: `${color.font.primary}`
								}
								width={viewport.anotherScreen ? el.style.width : undefined}
								justifyContent={el.style.justifyContent}
							>
								{isLast && el.type === 'Summa' && <InView onChange={setInView} />}
								{viewport.mobileScreen && <Title>{el.label}</Title>}
								{formateData(el)}
							</Component>
						</>
					)
				})}
			</>
		)
	}, [typeAction])
}
ColumnBody.className = Component
