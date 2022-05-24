import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import styled from 'styled-components'
import { vars } from '../../../stylesheet'
ChartJS.register(ArcElement, Tooltip, Legend)

const ChartWrap = styled.div`
	position: relative;
	@media (max-width: ${vars.breakpoints.tabletUp}) {
		margin: 0 32px 0 0;
		width: 336px;
		height: 336px;
	}
	@media (max-width: ${vars.breakpoints.mobileUp}) {
		width: 280px;
		height: 280px;
		margin: 0 0 32px 0;
	}

	@media (min-width: ${vars.breakpoints.desktop}) {
		width: 288px;
		height: 288px;
		margin: 0 30px 0 0;
	}
`
const TotalBalance = styled.p`
	color: ${(props) => props.theme.color.font.primary};
	font-weight: 700;
	font-size: 18px;
	line-height: 27px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`
const renderData = (listStatistics) => {
	if (listStatistics.length === 0) {
		return
	}
	const data = listStatistics.map((item) => item.sum)
	return data
}
function renderColors(listStatistics, listCategories) {
	if (listStatistics.length === 0) {
		return
	}
	const colors = listStatistics
		.map((item) => listCategories.find((cat) => item.category === cat._id))
		.map((item) => item.color)

	return colors
}
const Chart = ({ categories, outlay, statistics }) => {
	const data = {
		/* labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], */
		datasets: [
			{
				label: '# of Votes',
				data: renderData(statistics),
				backgroundColor: renderColors(statistics, categories),
				borderColor: renderColors(statistics, categories),
				borderWidth: 1,
				cutout: '70%',
			},
		],
	}
	return (
		<ChartWrap>
			<Doughnut data={data} />
			<TotalBalance>&#x20b4; {outlay}</TotalBalance>
		</ChartWrap>
	)
}

export { Chart }
