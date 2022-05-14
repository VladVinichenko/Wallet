import { useState } from 'react'
import Datetime from 'react-datetime'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import 'react-datetime/css/react-datetime.css'
// import { sprite } from 'assets'

// const = style.component``

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

	const categories = ['', ...getCategories()]

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
		summ: Yup.number().required('Required'),
		// date: Yup.date().required('Required').default(date),
		comment: Yup.string(),
	})

	return (
		<div className='addTransaction'>
			<Formik
				initialValues={{ isConsumption: true, category: categories[0], summ: '', date, comment: '' }}
				onSubmit={addTransaction}
				validationSchema={transactionSchena}
			>
				{({ values, touched, errors, dirty, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset }) => (
					<form className='transactionForm' onSubmit={handleSubmit}>
						<Field type='checkbox' name='isConsumption' onChange={handleChange} />
						{values.isConsumption && (
							<select name='category' onChange={handleChange}>
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
						<input
							type='number'
							name='summ'
							min='0'
							step='0,01'
							placeholder='0.00'
							value={values.summ}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{/* {errors.summ && touched.summ && errors.summ} */}
						<ErrorMessage name='summ' component='div' />
						<Datetime
							name='date'
							dateFormat='DD.MM.YYYY'
							timeFormat={false}
							initialValue={values.date}
							onChange={handletDateChange}
						/>
						{errors.date && touched.date && errors.date}

						<input
							type='text'
							name='comment'
							value={values.comment}
							placeholder='comment'
							autoComplete='off'
							onChange={handleChange}
						/>
						{/* <button type='submit' className={button}> */}
						<button type='submit' disabled={isSubmitting}>
							Add
						</button>
						{/* <button type='button' className={button} onClick={toggleModal}>  */}
						<button type='button' onClick={() => console.log('cancel')}>
							Cancel
						</button>
					</form>
				)}
			</Formik>
		</div>
	)
}
