import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { vars } from '../../../stylesheet'
import { Select } from './select'
import { selectorsFinance } from 'store'
const SelectsContainer = styled.div`
	margin-bottom: 20px;

	@media (max-width: ${vars.breakpoints.mobileUp}) {
		width: 280px;
	}
	@media (min-width: ${vars.breakpoints.tablet}) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 335px;
	}
	@media (min-width: ${vars.breakpoints.desktop}) {
		width: 395px;
	}
`

const monthOptions = [
	/* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 */ { number: 1, string: 'January' },
	{ number: 2, string: 'February' },
	{ number: 3, string: 'March' },
	{ number: 4, string: 'April' },
	{ number: 5, string: 'May' },
	{ number: 6, string: 'June' },
	{ number: 7, string: 'July' },
	{ number: 8, string: 'August' },
	{ number: 9, string: 'September' },
	{ number: 10, string: 'October' },
	{ number: 11, string: 'November' },
	{ number: 12, string: 'December' },
]

const Selects = ({ setData }) => {
	const [month, setMonth] = useState('')
	const [year, setYear] = useState('')

	const aviableStatistics = useSelector(selectorsFinance.getAviableStatistics)

	const monthArray = aviableStatistics.months.reduce((acc, val) => {
		acc.push(monthOptions.find((e) => e.number === val))
		return acc
	}, [])

	useEffect(() => {
		if (month !== '' && year !== '') {
			setData({ month, year })
		}
	}, [month, year])

	return (
		<SelectsContainer>
			<Select name={'month'} data={monthArray} setValues={setMonth}></Select>
			<Select name={'year'} data={aviableStatistics.years} setValues={setYear}></Select>
		</SelectsContainer>
	)
}

export { Selects }
