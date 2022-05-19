import { useState, useEffect } from 'react'
import styled from 'styled-components'

const BlockCheck = styled.div`
	position: absolute;
	bottom: -8px;
	border-radius: 10px;
	transition: 1s;
`

// box-shadow: 0px 1px 8px rgba(36, 204, 167, 0.5);
// box-shadow: 0px 1px 8px rgb(196 37 37 / 0.5);
export const ValidationPassIndicator = ({ passValue }) => {
	const [isUpperCase, setIsUpperCase] = useState(false)
	const [isLowerCase, setIsLowerCase] = useState(false)
	const [isNumber, setIsNumber] = useState(false)
	const [isSpecial, setIsSpecial] = useState(false)
	const [ratingLowerCase, setRatingLowerCase] = useState(0)
	const [ratingUpperCase, setRatingUpperCase] = useState(0)
	const [ratingNumber, setRatingNumber] = useState(0)
	const [ratingSpecial, setRatingSpecial] = useState(0)
	const [rating, setRating] = useState(0)
	const upperCase = 'qwertyuiopasdfghjklzxcvbnm' // Буквы в нижнем регистре
	const loverCase = 'QWERTYUIOPLKJHGFDSAZXCVBNM' // Буквы в верхнем регистре
	const digits = '0123456789' // Цифры
	const specials = '!@#$%^&*()_-+=|/.,:;[]{}' // Спецсимволы
	console.log(rating)
	useEffect(() => {
		const passValueArr = [...passValue]

		for (let i = 0; i < passValueArr.length; i += 1) {
			/* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
			if (!isUpperCase && upperCase.indexOf(passValue[i]) != -1) {
				setIsUpperCase(true)
				setRatingUpperCase(1)
				return
			} else {
				console.log('first')
				setIsUpperCase(false)
				setRatingUpperCase(0)
			} // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности

			// else if (!isLowerCase && loverCase.indexOf(passValue[i]) != -1) {
			// 	setIsLowerCase(true)
			// 	setRatingLowerCase(1) // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
			// 	setRating(ratingLowerCase + ratingUpperCase + ratingNumber + ratingSpecial) // Суммируем рейтинги всех типов пароля
			// } else if (!isNumber && digits.indexOf(passValue[i]) != -1) {
			// 	setIsNumber(true)
			// 	setRatingNumber(1) // Если в пароле есть цифры, то увеличиваем рейтинг сложности
			// 	setRating(ratingLowerCase + ratingUpperCase + ratingNumber + ratingSpecial) // Суммируем рейтинги всех типов пароля
			// } else if (!isSpecial && specials.indexOf(passValue[i]) != -1) {
			// 	setIsSpecial(true)
			// 	setRatingSpecial(1) // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
			// }
		}
		setRating(ratingLowerCase + ratingUpperCase + ratingNumber + ratingSpecial) // Суммируем рейтинги всех типов пароля
	}, [passValue])

	console.log(isUpperCase, isLowerCase, isNumber, isSpecial)

	return (
		<>
			{passValue.length > 1 && rating < 3 && (
				<BlockCheck
					style={{
						width: '10%',
						border: '2px solid #e7140d',
						boxShadow: 'box-shadow: 0px 1px 8px rgba(36, 204, 167, 0.5)',
					}}
				/>
			)}

			{passValue.length < 6 && rating >= 3 && <BlockCheck style={{ width: '50%', border: '2px solid #ffc727' }} />}

			{passValue.length >= 8 && rating < 3 && <BlockCheck style={{ width: '50%', border: '2px solid #ffc727' }} />}

			{passValue.length >= 16 && rating >= 3 && (
				<BlockCheck
					style={{ width: '100%', border: '2px solid #24CCA7', boxShadow: '0px 1px 8px rgba(36, 204, 167, 0.5' }}
				/>
			)}

			{passValue.length >= 6 && rating == 1 && <BlockCheck style={{ width: '10%', border: '2px solid #FF6596' }} />}

			{passValue.length >= 6 && rating > 1 && rating < 4 && (
				<BlockCheck style={{ width: '50%', border: '2px solid #ffc727' }} />
			)}

			{passValue.length >= 6 && rating === 4 && (
				<BlockCheck
					style={{ width: '100%', border: '2px solid #24CCA7', boxShadow: '0px 1px 8px rgba(36, 204, 167, 0.5' }}
				/>
			)}
		</>
	)
}
