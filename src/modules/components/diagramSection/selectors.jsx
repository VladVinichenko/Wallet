import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { vars } from '../../../stylesheet'
import { Select } from './select'
import { selectorsFinance } from 'store'
import { monthOptions } from './monthOptions'
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
