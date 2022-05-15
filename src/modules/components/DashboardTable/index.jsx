import { nanoid } from 'nanoid'
import { useState, useEffect, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { ColumnBody } from './ColumnBody'
import { tableColumns } from 'lib/config'
import { Scrollbars } from 'react-custom-scrollbars-2'
import { useSelector } from 'react-redux'
import { selectorsFinance } from 'store'
import { vars } from 'stylesheet'

const {color, border, breakpoints } = vars
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
		background-color: ${color.background.primary};
		border-radius: 30px;
	}
`
const BodyTable = styled.tbody`
	display: flex;
	flex-direction: column;
	width: 280px;

	@media screen and (max-width: ${breakpoints.mobileUp}) {
		tr + tr {
			margin-top: 8px;
		}
	}
	@media screen and (min-width:${breakpoints.tablet}) {
		width: 704px;
		height: 285px;
		overflow: auto;
		tr {
			border-bottom: ${border.firstLine};
		}
	}
	@media screen and (min-width:${breakpoints.desktop}) {
		width: 715px;
	}
`
const Row = styled.tr`
	display: flex;
	flex-direction: column;
	background: ${color.background.primary};
	background-color: transparent;

	@media screen and (max-width:${breakpoints.mobileUp}) {
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
				background-color: ${color.background.tableLine};
			}
		}
	}
	@media screen and (min-width:${breakpoints.tablet}) {
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

export const DashboardTable = ({ viewport }) => {
	const [inView, setInView] = useState(false)
	const dataTable = useSelector(selectorsFinance.getData)

	useEffect(() => {
		if (inView) console.log(111) //dispatch
	}, [inView])

	const BodyRowRender = useCallback(
		() => {
			return dataTable.map((data, idx) => (
				<Row key={nanoid()}>
					<ColumnBody
						data={data}
						tableColumns={tableColumns}
						type={data.type}
						viewport={viewport}
						setInView={setInView}
						isLast={dataTable.length === idx + 1}
					/>
				</Row>
			))
		},
		[inView, viewport]
	)
	return useMemo(() => {
		return (
			<Component>
				<Title>Dashboard Table</Title>
				{viewport.anotherScreen && (
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
					{viewport.anotherScreen ? (
						<Scrollbars autoHide autoHideTimeout={1500} autoHideDuration={200}>
							{BodyRowRender()}
						</Scrollbars>
					) : (
						BodyRowRender()
					)}
				</BodyTable>
			</Component>
		)
	}, [viewport,inView])
}

Component.className = DashboardTable
