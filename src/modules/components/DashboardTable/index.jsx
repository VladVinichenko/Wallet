import { nanoid } from 'nanoid'
import { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { ColumnBody } from './ColumnBody'
import { tableColumns } from 'lib/config'
import { NoDataAvailable } from 'assets'
import { useSelector, useDispatch } from 'react-redux'
import { selectorsFinance, fetchFinance } from 'store'
// import { vars } from 'stylesheet'
import { selectorsGlobal } from 'store'

// const { color, border, borderRadius, breakpoints } = vars()
const Component = styled.table`
	thead {
		display: block;
	}
`
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
	color: ${color.font.primary};
	tr {
		background-color: ${color.background.primary};
		border-radius: ${borderRadius.seconary};
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
	@media screen and (min-width: ${breakpoints.tablet}) {
		width: 704px;
		height: 285px;
		overflow: overlay;
		scrollbar-width: thin;
		::-webkit-scrollbar {
			width: 5px;
		}
		::-webkit-scrollbar-thumb {
			background: gray;
			border-radius: 10px;
		}

		::-webkit-scrollbar-track {
			background: transparent;
		}

		tr {
			border-bottom: ${border.firstLine};
		}
	}
	@media screen and (min-width: ${breakpoints.desktop}) {
		width: 715px;
		height: 60vh;
	}
`
const Row = styled.tr`
	display: flex;
	flex-direction: column;
	background: ${(props) => props.theme.background};

	@media screen and (max-width: ${breakpoints.mobileUp}) {
		border-radius: ${borderRadius.fourth};
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
	@media screen and (min-width: ${breakpoints.tablet}) {
		flex-direction: row;
		padding: 16px 20px;
	}
`
const Column = styled.th`
	display: flex;
	justify-content: ${(props) => props.theme.justifyContent};
	width: ${(props) => props.theme.width};
	margin-right: ${(props) => props.theme.marginRight};
	font-family: 'Circe';
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 1.5;
`
const NoDataAvailableImage = styled.img`
	display: block;
	width: 280px;

	@media screen and (min-width: ${breakpoints.tablet}) {
		padding-top: 40px;
		width: 704px;
	}
	@media screen and (min-width: ${breakpoints.desktop}) {
		width: 715px;
	}
`

export const DashboardTable = ({ viewport, isReadyToRended, setIsReadyToRended }) => {
	const [inView, setInView] = useState(false)
	const dataTable = useSelector(selectorsFinance.getFormatData)
	const page = useSelector(selectorsFinance.getPageCount)
	const dispatch = useDispatch()
	const isLoading = useSelector(selectorsGlobal.getIsLoading)
	useEffect(() => {
		if (inView) {
			dispatch(fetchFinance(page + 1))
		}
	}, [viewport, inView])
	useEffect(() => {
		!isLoading && setIsReadyToRended(true)
	}, [dataTable])
	return useMemo(() => {
		return (
			<Component>
				<Title>Dashboard Table</Title>
				{viewport.anotherScreen && (
					<HederTable>
						<Row>
							{tableColumns.map((el) => (
								<Column
									key={nanoid()}
									width={el.style.width}
									justifyContent={el.style.justifyContent}
									marginRight={viewport.anotherScreen ? el.style.marginRight : 0}
								>
									{el.label}
								</Column>
							))}
						</Row>
					</HederTable>
				)}
				{!isLoading & (dataTable.length !== 0) ? (
					<BodyTable inView={inView}>
						{dataTable.map((data, idx) => (
							<Row key={nanoid()} background={viewport.anotherScreen ? `transparent` : `${color.background.primary}`}>
								<ColumnBody
									data={data}
									tableColumns={tableColumns}
									type={data.type}
									viewport={viewport}
									setInView={setInView}
									isLast={dataTable.length === idx + 1}
								/>
							</Row>
						))}
					</BodyTable>
				) : !isLoading & isReadyToRended ? (
					<tbody>
						<tr>
							<td>
								<NoDataAvailableImage src={NoDataAvailable} alt='No data Available' />
							</td>
						</tr>
					</tbody>
				) : (
					<></>
				)}
			</Component>
		)
	}, [viewport, dataTable])
}

Component.className = DashboardTable
