import { useState, useEffect } from 'react'
import styled from 'styled-components'

const BlockCheck = styled.div`
	position: absolute;
	bottom: -20px;
	height: 0;
	border: 4px solid #24cca7;
	border-radius: 20px;
	transition: 1s;
`

// box-shadow: 0px 1px 8px rgba(36, 204, 167, 0.5);

export const ValidationPassIndicator = ({ passValue }) => {
	const [isUpperCase, setIsUpperCase] = useState(false)
	const [isLowerCase, setIsLowerCase] = useState(false)
	const [isNumber, setIsNumber] = useState(false)
	const [isSpecial, setIsSpecial] = useState(false)

	const upperCase = 'qwertyuiopasdfghjklzxcvbnm' // Буквы в нижнем регистре
	const loverCase = 'QWERTYUIOPLKJHGFDSAZXCVBNM' // Буквы в верхнем регистре
	const digits = '0123456789' // Цифры
	const specials = '!@#$%^&*()_-+=|/.,:;[]{}' // Спецсимволы

	let rating = 0
	const checkUpperCase = () => {
		for (let index = 0; index < passValue.length; index++) {
			const element = array[index]
			console.log(element)
		}
		// for (let i = 0; i < passValue; i += 1) {
		// 	console.log(i)
		// 	/* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
		// 	if (!isUpperCase && upperCase.indexOf(passValue[i]) != -1) {
		// 		setIsUpperCase(true)
		// 		console.log('isUpperCase')
		// 	} else if (!isLowerCase && loverCase.indexOf(passValue[i]) != -1) {
		// 		setIsLowerCase(true)
		// 	} else if (!isNumber && digits.indexOf(passValue[i]) != -1) {
		// 		setIsNumber(true)
		// 	} else if (!isSpecial && specials.indexOf(passValue[i]) != -1) {
		// 		setIsSpecial(true)
		// 	}
		// }

		// if (upperCase) rating += 1 // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
		// if (loverCase) rating += 1 // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
		// if (digits) rating += 1 // Если в пароле есть цифры, то увеличиваем рейтинг сложности
		// if (specials) rating += 1 // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
		console.log('first')
	}

	// checkUpperCase()

	useEffect(() => {
		console.log(passValue)

		// if (!isUpperCase && upperCase.indexOf(passValue[i]) != -1) {
		// 	setIsUpperCase(true)
		// 	console.log('isUpperCase')
		// } else if (!isLowerCase && loverCase.indexOf(passValue[i]) != -1) {
		// 	setIsLowerCase(true)
		// } else if (!isNumber && digits.indexOf(passValue[i]) != -1) {
		// 	setIsNumber(true)
		// } else if (!isSpecial && specials.indexOf(passValue[i]) != -1) {
		// 	setIsSpecial(true)
		// }

		// if (upperCase) rating += 1 // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
		// if (loverCase) rating += 1 // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
		// if (digits) rating += 1 // Если в пароле есть цифры, то увеличиваем рейтинг сложности
		// if (specials) rating += 1 // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
	}, [passValue, rating])

	console.log(isUpperCase, isLowerCase, isNumber, isSpecial)

	return (
		<>
			{passValue.length < 6 && rating < 3 && <BlockCheck style={{ width: '10%', backgroundColor: '#e7140d' }} />}
			{passValue.length >= 8 && rating < 3 && <BlockCheck style={{ width: '50%', backgroundColor: '#ffdb00' }} />}
			{passValue.length >= 8 && rating >= 3 && <BlockCheck style={{ width: '100%', backgroundColor: '#61ac27' }} />}
			{passValue.length >= 6 && rating == 1 && <BlockCheck style={{ width: '10%', backgroundColor: '#e7140d' }} />}

			{passValue.length >= 6 && rating > 1 && rating < 4 && (
				<BlockCheck style={{ width: '50%', backgroundColor: '#ffdb00' }} />
			)}

			{passValue.length >= 6 && rating == 4 && <BlockCheck style={{ width: '100%', backgroundColor: '#61ac27' }} />}
		</>
	)
}
