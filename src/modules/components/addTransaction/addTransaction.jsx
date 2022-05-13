import { useState } from 'react'

// import { sprite } from 'assets'
// import
// const
// const func = () => {}
// const = style.component``
// export const component = () => {return()}

// const = style.component``

export const AddTransaction = async (toggleModal) => {
	const [isIncome, setIsIncome] = useState(false)
	console.log(isIncome)
	const [category, setCategory] = useState('')
	const [summ, setSumm] = useState('')
	const [date, setDate] = useState('') //текущая дата
	const [comment, setComment] = useState('')

	const categories = () => {
		//fetch getCategories
		return [1, 2, 3, 4, 5]
	}

	const handleTypeChange = ({ currentTarget: { checked } }) => {
		setIsIncome(checked)
	}

	const handleCategoryChange = ({ currentTarget: { value } }) => {
		setCategory(value)
	}
	const handleSummChange = ({ currentTarget: { value } }) => {
		setSumm(value)
	}
	const handletDateChange = ({ currentTarget: { value } }) => {
		setDate(value)
	}
	const handleCommentChange = ({ currentTarget: { value } }) => {
		setComment(value)
	}

	const addTransaction = (e) => {
		e.preventDefault()
		console.log('add')
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
			<form className='transactionForm' action='/users/current/transactions' method='POST' onSubmit={addTransaction}>
				<input type='checkbox' name='isIncome' value={isIncome} onChange={handleTypeChange} />
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
					required
					value={summ}
					onChange={handleSummChange}
				/>
				<input type='date' name='date' value={date} onChange={handletDateChange} />
				{/* // date library */}
				<input type='text' name='comment' value={comment} onChange={handleCommentChange} />
				{/* <button type='submit' className={button}> */}
				<button type='submit'>Add</button>
				{/* <button type='button' className={button}> */}
				<button
					type='button'
					onClick={() => {
						console.log('cancel')
					}}
				>
					{/* <button type='button' onClick={toggleModal}> */}
					Cancel
				</button>
			</form>
		</div>
	)
}
