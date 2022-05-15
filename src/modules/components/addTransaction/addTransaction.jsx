import { useState } from 'react'
import styled from 'styled-components'
import Datetime from 'react-datetime'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { vars } from 'stylesheet'

import 'react-datetime/css/react-datetime.css'
import { sprite } from 'assets'
// import { sprite } from 'assets'

const FormContainer = styled.div`
	padding: 10px 20px;
	padding-bottom: 0;

	font-size: 18px;
	line-height: 1.5;
	text-align: center;

	@media screen and (min-width: 768px) {
		padding: 40px 75px;
	}

	h2 {
		font-family: 'Poppins';
		font-weight: 400;
		font-size: 24px;
		line-height: 1.5;
		text-align: center;
		margin-bottom: 40px;

		@media screen and (min-width: 768px) {
			font-size: 30px;
		}
	}

	.group {
		// flex-grow: 2;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		@media screen and (min-width: 768px) {
			justify-content: space-between;
		}
	}

	.form-control,
	.summInput {
		@media screen and (min-width: 768px) {
			max-width: 185px;
		}
	}

	.summInput {
		@media screen and (min-width: 768px) {
			margin-right: 30px;
		}
	}

	input.summInput::placeholder {
		text-align: center;
	}

	form {
		// max-width: 320px;

		display: flex;
		align-items: center;
		flex-direction: column;

		// flex-wrap: wrap;

		@media screen and (min-width: 768px) {
			// max-width: 400px;
		}
	}

	input,
	select {
		margin-bottom: 40px;
		width: 280px;

		font-size: 18px;
		line-height: 1.5;

		@media screen and (min-width: 768px) {
			width: 394px;
		}
	}

	input::placeholder {
		line-height: 27px;
		color: ${vars.color.font.third};
	}

	.select-placeholder {
		color: #bdbdbd;
	}

	input.error {
		border-color: red;
	}

	.button-item:not(:last-child) {
		margin-bottom: 20px;
	}

	.error-message {
		color: red;
	}
`

export const AddTransaction = (toggleModal) => {
	const [date, setDate] = useState(Date.now()) //текущая дата

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

	const handletDateChange = ({ _d: time }) => {
		// setDate(time?.getTime())
		setDate(time)
		console.log(time)
	}

	const addTransaction = async (values) => {
		if (!values.isConsumption) values.category = 'regular income'

		const type = values.isConsumption ? 'decrement' : 'increment'
		values = { type, ...values, date }
		delete values.isConsumption
		/*
					добавить в базу
					добавить в стор
					очистить поля
					закрыть модалку
					*/

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
			<h2>Add transaction</h2>
			<Formik
				initialValues={{ isConsumption: true, category: '', summ: '', date, comment: '' }}
				onSubmit={addTransaction}
				validationSchema={transactionSchena}
			>
				{({ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }) => (
					<form className='transactionForm' onSubmit={handleSubmit}>
						<Field type='checkbox' name='isConsumption' onChange={handleChange} />
						{values.isConsumption && (
							<select name='category' onChange={handleChange}>
								<option value='' className='select-placeholder' disabled selected hidden>
									choose category
								</option>
								{categories.map((category, index) => {
									return (
										<option value={category._id} key={index}>
											{category.name}
										</option>
									)
								})}
							</select>
						)}
						{/* {errors.category && touched.category && <div className='input-feedback'>{errors.category}</div>} */}
						{errors.category && touched.category && errors.category}
						<div className='group'>
							<input
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
							<Datetime
								name='date'
								dateFormat='DD.MM.YYYY'
								timeFormat={false}
								initialValue={values.date}
								onChange={handletDateChange}
								className='groupItem'
							/>
							<svg className='calendar' width='24' height='24'>
								<use href={sprite + '#icon-calendar'}></use>
							</svg>
						</div>
						{errors.date && touched.date && errors.date}
						<input
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
								<button type='submit' disabled={isSubmitting}>
									Add
								</button>
							</li>
							<li className='button-item'>
								<button type='button' onClick={() => console.log('cancel')}>
									{/* onClick={toggleModal}>  */}
									Cancel
								</button>
							</li>
						</ul>
					</form>
				)}
			</Formik>
		</FormContainer>
	)
}
