import styled from 'styled-components'
import { vars } from '../../../stylesheet'

const Table = styled.table`
	color: ${vars().color.font.primary};
	font-size: 16px;
	line-height: 24px;
	border-collapse: collapse;

	@media (max-width: ${vars().breakpoints.tabletUp}) {
		width: 340px;
	}
	@media (max-width: ${vars().breakpoints.mobileUp}) {
		width: 280px;
	}
	@media (min-width: ${vars().breakpoints.desktop}) {
		width: 395px;
	}
`
const THead = styled.thead`
	border-radius: 30px;
	background-color: ${vars().color.background.primary};
	font-size: 18px;
	line-height: 27px;
`

const THeadCategory = styled.th`
	border-top-left-radius: ${vars().borderRadius.seconary};
	border-bottom-left-radius: ${vars().borderRadius.seconary};
	height: 58px;
	padding-left: 28px;
	text-align: left;
	width: 60%;
`
const THeadSum = styled.th`
	border-top-right-radius: ${vars().borderRadius.seconary};
	border-bottom-right-radius: ${vars().borderRadius.seconary};
	padding-right: 28px;
	text-align: right;
	width: 40%;
`

const TRow = styled.tr`
	border-bottom: ${vars().border.firstLine};
`
const TBodyCategory = styled.td`
	height: 50px;

	@media (max-width: ${vars().breakpoints.tabletUp}) {
		padding-left: 20px;
	}
	@media (max-width: ${vars().breakpoints.mobileUp}) {
		padding-left: 15px;
	}

	@media (min-width: ${vars().breakpoints.desktop}) {
		padding-left: 25px;
	}
`
const CategoryContents = styled.div`
	display: flex;
	align-items: center;
`
const TBodySum = styled.td`
	text-align: right;
	@media (max-width: ${vars().breakpoints.tabletUp}) {
		padding-right: 20px;
	}
	@media (min-width: ${vars().breakpoints.desktop}) {
		padding-right: 30px;
	}
`
const TFootRow = styled.tr`
	font-weight: 700;
	vertical-align: bottom;
`
const TFootCategory = styled.td`
	height: 40px;
	font-weight: 700;
	@media (max-width: ${vars().breakpoints.tabletUp}) {
		padding-left: 20px;
	}
	@media (max-width: ${vars().breakpoints.mobileUp}) {
		padding-left: 15px;
	}

	@media (min-width: ${vars().breakpoints.desktop}) {
		padding-left: 25px;
	}
`

const TFootSum = styled.td`
	text-align: right;
	color: ${(props) => {
		return props.Outlay ? vars.color.font.negative : vars.color.font.positive
	}};
	@media (max-width: ${vars().breakpoints.tabletUp}) {
		padding-right: 20px;
	}
	@media (min-width: ${vars().breakpoints.desktop}) {
		padding-right: 30px;
	}
`
const ColorSquare = styled.span`
	width: 24px;
	height: 24px;
	border-radius: ${vars().borderRadius.third};
	margin-right: 16px;
`

const renderRows = (listStatistics, listCategories) => {
	if (listStatistics.length === 0) {
		return
	}
	const rows = listStatistics.map((item) =>
		listCategories.map((cat) => {
			if (item.category === cat._id) {
				return (
					<TRow key={cat._id}>
						<TBodyCategory>
							<CategoryContents>
								<ColorSquare style={{ backgroundColor: cat.color }} />
								{cat.name}
							</CategoryContents>
						</TBodyCategory>
						<TBodySum>{item.sum}</TBodySum>
					</TRow>
				)
			}
		})
	)
	return rows
}

const DiagramTable = ({ outlay, income, statistics, categories }) => {
	return (
		<>
			<Table>
				<THead>
					<tr>
						<THeadCategory>Category</THeadCategory>
						<THeadSum>Sum</THeadSum>
					</tr>
				</THead>
				<tbody>{renderRows(statistics, categories)}</tbody>
				<tfoot>
					<TFootRow>
						<TFootCategory> Outlay</TFootCategory>
						<TFootSum Outlay>{outlay}</TFootSum>
					</TFootRow>
					<TFootRow>
						<TFootCategory>Income</TFootCategory>
						<TFootSum Income>{income}</TFootSum>
					</TFootRow>
				</tfoot>
			</Table>
		</>
	)
}

export { DiagramTable }
