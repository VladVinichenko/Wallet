import { nanoid } from 'nanoid'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ColumnBody } from './ColumnBody'
import { tableColumns } from './config/tableConfig'

const example = [
	{
		data: 1600547654,
		type: 'decrement',
		category: { id: 888, name: 'Other' },
		comment: 'Gift for wife',
		summa: '300.00',
		total: '6900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
	{
		data: 1652547654,
		type: 'increment',
		category: { id: 444, name: 'Regular' },
		comment: 'January Bonus',
		summa: '8000.00',
		total: '14900.00',
	},
]

const Component = styled.table``
const Title = styled.caption`
	position: absolute;
	width: 1px;
	height: 1px;
	margin: -1px;
	border: 0;
	padding: 0;
	white-space: nowrap;
	clip-path: inset(100%);
	clip: rect(0 0 0 0);
	overflow: hidden;
`
const HederTable = styled.thead`
	tr {
		background-color: #ffffff;
		border-radius: 30px;
	}
`
const BodyTable = styled.tbody`
	display: flex;
	flex-direction: column;
	width: 280px;

	@media screen and (max-width: 759px) {
		tr + tr {
			margin-top: 8px;
		}
	}
	@media screen and (min-width: 760px) {
		width: 704px;
		height: 285px;
		overflow: auto;
		tr {
			border-bottom: 1px solid #dcdcdf;
		}
	}
	@media screen and (min-width: 1280px) {
		width: 715px;
	}
`
const Row = styled.tr`
	display: flex;
	flex-direction: column;
	background: #ffffff;
	background-color: transparent;

	@media screen and (max-width: 759px) {
		border-radius: 10px;
		overflow: hidden;
		td + td {
			position: relative;
			::after {
				position: absolute;
				top: 0;
				left: 0;
				display: block;
				content: ' ';
				width: 275px;
				height: 1px;
				background-color: #dcdcdf;
			}
		}
	}
	@media screen and (min-width: 760px) {
		flex-direction: row;
		justify-content: space-between;
		padding: 16px 20px;
	}
`
const Column = styled.th`
	display: flex;
	justify-content: ${(prop) => prop.justifyContent};
	width: ${(prop) => prop.width};
`

export const DashboardTable = ({ viewport = 760 }) => {
	const [inView, setInView] = useState(false)

	useEffect(() => {
		if(inView)console.log(111)
	}, [inView]);
	return (
		<Component>
			<Title>Dashboard Table</Title>
			{viewport >= 760 && (
				<HederTable>
					<Row>
						{tableColumns.map((el) => (
							<Column key={nanoid()} width={el.style.width} justifyContent={el.style.justifyContent}>
								{el.label}
							</Column>
						))}
					</Row>
				</HederTable>
			)}

			<BodyTable inView={inView}>
				{example.map((data, idx) => (
					<Row key={nanoid()}>
						<ColumnBody
							data={data}
							tableColumns={tableColumns}
							type={data.type}
							viewport={viewport}
							setInView={setInView}
							isLast={example.length === idx + 1}
						/>
					</Row>
				))}
			</BodyTable>
		</Component>
	)
}

Component.className = DashboardTable
