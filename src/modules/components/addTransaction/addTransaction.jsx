import { useState } from 'react'
import styled from 'styled-components'
import Datetime from 'react-datetime'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { useDispatch } from 'react-redux'
import { setCloseModal } from 'store'
import { addTransaction as zuzuzu } from 'store'

import { vars } from 'stylesheet'
import { Button } from 'modules'
// import { OpenMenu } from '..'

import { sprite } from 'assets'
import 'react-datetime/css/react-datetime.css'

const StyledInput = styled.input`
	box-sizing: border-box;
	margin-bottom: 40px;
	width: 100%;

	font-size: 18px;
	line-height: 1.5;
	border-bottom: 1px solid #e0e0e0;

	&::placeholder {
		color: ${vars.color.font.third};
	}
`

const SummInput = styled(StyledInput)`
	font-weight: 700;
	text-align: center;

	&::placeholder {
		text-align: center;
	}

	&.error {
		border-color: red;
	}

	@media screen and (min-width: 768px) {
		margin-right: 30px;
	}
`

const StyledGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 40px;

	span {
		width: 100%;
		position: relative;
	}

	svg {
		position: absolute;
		top: 2px;
		right: 10px;
	}

	@media screen and (min-width: 768px) {
		flex-wrap: nowrap;
	}
`

const StyledTextarea = styled.textarea`
	box-sizing: border-box;
	margin-bottom: 40px;
	padding-left: 20px;

	width: 100%;
	height: 86px;
	font-size: 18px;
	line-height: 1.5;
	border-bottom: 1px solid #e0e0e0;
	resize: none;

	&::placeholder {
		color: ${vars.color.font.third};
	}

	@media screen and (min-width: 768px) {
		height: 32px;
	}
`
const Title = styled.h2`
	font-family: 'Poppins';
	font-weight: 400;
	font-size: 24px;
	line-height: 1.5;
	text-align: center;
	margin-bottom: 40px;

	@media screen and (min-width: 768px) {
		font-size: 30px;
	}
`

const FormContainer = styled.div`
	padding: 20px 10px;
	padding-bottom: 0;
	width: 100vw;

	font-size: 18px;
	line-height: 1.5;
	text-align: center;

	@media screen and (min-width: 768px) {
		padding: 40px 75px;
		width: 540px;
	}

	.form-control {
		padding-left: 20px;

		width: 100%;
		font-size: 18px;
		line-height: 1.5;
		border-bottom: 1px solid #e0e0e0;
	}

	.button-item:not(:last-child) {
		margin-bottom: 20px;
	}

	select {
		margin-bottom: 40px;
		padding-left: 20px;
		width: 100%;

		font-size: 18px;
		line-height: 1.5;

		@media screen and (min-width: 768px) {
			width: 394px;
		}
	}

	.error-message {
		color: red;
	}
`

export const AddTransaction = () => {
	const [date, setDate] = useState(Date.now()) //текущая дата
	const dispatch = useDispatch()

	const closeModal = () => {
		dispatch(setCloseModal())
	}
	const postTransaction = () => {
		dispatch(zuzuzu())
	}

	const getCategories = () => {
		const result = [
			{ _id: 111, name: 'main' },
			{ _id: 222, name: 'food' },
			{ _id: 333, name: 'auto' },
			{ _id: 444, name: 'development' },
			{ _id: 555, name: 'kids' },
		] // await fetch getCategories
		return [...result]
	}

	const categories = getCategories()

	const handleDateChange = ({ _d: time }) => {
		setDate(time?.getTime())
		// setDate(time)
		console.log(time)
	}

	const addTransaction = async (values) => {
		if (!values.isConsumption) values.category = 'regular income'

		const type = values.isConsumption ? 'decrement' : 'increment'
		values = { type, ...values, date }
		delete values.isConsumption

		postTransaction()
		closeModal()

		await new Promise((resolve) => setTimeout(resolve, 500))
		alert(JSON.stringify(values, null, 2))
	}

	const transactionSchena = Yup.object().shape({
		isConsumption: Yup.boolean().required('Required'),
		category: Yup.string(),
		summ: Yup.number().required('Summ is Required'),
		// date: Yup.date().required('Required').default(date),
		comment: Yup.string(),
	})

	return (
		<FormContainer className='addTransaction'>
			<Title>Add transaction</Title>
			<Formik
				initialValues={{ isConsumption: true, category: '', summ: '', date, comment: '' }}
				onSubmit={addTransaction}
				validationSchema={transactionSchena}
			>
				{({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
					<form className='transactionForm' onSubmit={handleSubmit}>
						<Field type='checkbox' name='isConsumption' onChange={handleChange} />
						{/* <OpenMenu /> */}
						{values.isConsumption && (
							<select name='category' onChange={handleChange}>
								<option value='' className='select-placeholder' disabled selected hidden>
									choose category
								</option>
								{categories.map((category, index) => {
									return (
										<option value={category} key={index}>
											{category.name}
										</option>
									)
								})}
							</select>
						)}
						{/* {errors.category && touched.category && <div className='input-feedback'>{errors.category}</div>} */}
						{errors.category && touched.category && errors.category}
						<StyledGroup className='group'>
							<SummInput
								type='number'
								name='summ'
								min='0'
								step='0,01'
								placeholder='0.00'
								value={values.summ}
								onChange={handleChange}
								onBlur={handleBlur}
								className={['summInput', errors.summ && touched.summ ? 'error' : null].join(' ')}
							/>
							{/* {errors.summ && touched.summ && errors.summ} */}
							{/* <ErrorMessage name='summ' component='div' /> */}
							<span className='dateInputWrapper'>
								<Datetime
									name='date'
									dateFormat='DD.MM.YYYY'
									timeFormat={false}
									initialValue={values.date}
									onChange={handleDateChange}
									className='groupItem'
								/>
								<svg className='calendarIcon' width='24' height='24'>
									<use href={sprite + '#icon-calendar'}></use>
								</svg>
							</span>
						</StyledGroup>
						{errors.date && touched.date && errors.date}
						<StyledTextarea
							type='text'
							name='comment'
							value={values.comment}
							placeholder='Comment'
							autoComplete='off'
							onChange={handleChange}
						/>
						<ErrorMessage name='summ' className='error-message' component='div' />
						{/* {errors.summ && touched.summ && <div className='error-message'>{errors.summ}</div>} */}
						<ul className='button-list'>
							<li className='button-item'>
								<Button type='submit' disabled={isSubmitting}>
									Add
								</Button>
							</li>
							<li className='button-item'>
								<Button type='button' color={false} onClickButton={closeModal}>
									Cancel
								</Button>
							</li>
						</ul>
					</form>
				)}
			</Formik>
		</FormContainer>
	)
}
