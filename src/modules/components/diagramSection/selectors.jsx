import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { vars } from '../../../stylesheet'
import { Select } from './select'
import { selectorsFinance } from 'store'
import { monthOptions } from './monthOptions'

const SelectsContainer = styled.div`
	color: ${(props) => props.theme.color.accent.openMenu};
	margin-bottom: 20px;

	@media (max-width: ${(props) => props.theme.breakpoints.mobileUp}) {
		width: 280px;
	}
	@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 335px;
	}
	@media (min-width: ${(props) => props.theme.breakpoints.desktop}) {
		width: 395px;
	}

	button {
		color: ${(props) => props.theme.color.font.primary};
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
