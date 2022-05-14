import { useState } from 'react'
import Datetime from 'react-datetime'
import { Formik } from 'formik'
// import * as Yup from 'yup'

import 'react-datetime/css/react-datetime.css'

// import { sprite } from 'assets'
// const func = () => {}
// const = style.component``

// const = style.component``

export const AddTransaction = (toggleModal) => {
	const [isIncome, setIsIncome] = useState(false)
	console.log(isIncome)
	const [category, setCategory] = useState('')
	const [summ, setSumm] = useState()
	const [date, setDate] = useState(Date.now()) //текущая дата
	const [comment, setComment] = useState('')

	const defineType = (isIncome) => {
		return isIncome ? 'increment' : 'decrement'
	}

	const categories = () => {
		const result = [1, 2, 3, 4, 5] // await fetch getCategories
		return [null, ...result]
	}

	const handleTypeChange = ({ currentTarget: { checked } }) => {
		setIsIncome(checked)
		if (!checked) setCategory('')
	}

	const handleCategoryChange = ({ currentTarget: { value } }) => {
		setCategory(value)
	}
	const handleSummChange = ({ currentTarget: { value } }) => {
		setSumm(value)
	}
	const handletDateChange = ({ _d: time }) => {
		// console.log(e)
		// const time = e._d
		// console.log(time.getTime())
		setDate(time?.getTime())
		console.log(time)
	}
	const handleCommentChange = ({ currentTarget: { value } }) => {
		setComment(value)
	}

	const addTransaction = async (e) => {
		e.preventDefault()
		console.log('add')
		// console.log(e)
		/*
    добавить в базу
    добавить в стор
    очистить поля
    закрыть модалку
    */
	}
	//
	return (
		<div className='addTransaction'>
			<Formik
				initialValues={{ isIncome, category, summ, date, comment }}
				onSubmit={async (values) => {
					console.log(values)
					await sleep(500)
					alert(JSON.stringify(values, null, 2))
				}}
				// validationSchema={Yup.object().shape({
				// 	email: Yup.string().email().required('Required'),
				// })}
			>
				{({ values }) => (
					<form
						className='transactionForm'
						action='/users/current/transactions'
						method='POST'
						onSubmit={addTransaction}
					>
						<input type='checkbox' name='isIncome' value={values.isIncome} onChange={handleTypeChange} />
						{isIncome && (
							<select name='category' onChange={handleCategoryChange}>
								{categories().map((category) => {
									return (
										<option value={category} key={category}>
											{category}
										</option>
									)
								})}
							</select>
						)}
						<input
							type='number'
							name='summ'
							min='0'
							step='0,01'
							placeholder='0.00'
							value={values.summ}
							onChange={handleSummChange}
							required
						/>
						<Datetime
							name='date'
							dateFormat='DD.MM.YYYY'
							timeFormat={false}
							initialValue={values.date}
							onChange={handletDateChange}
						/>
						<input type='text' name='comment' value={values.comment} onChange={handleCommentChange} />
						{/* <button type='submit' className={button}> */}
						<button type='submit'>Add</button>
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
