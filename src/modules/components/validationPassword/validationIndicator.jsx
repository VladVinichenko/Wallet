import { useState, useEffect } from 'react'
import styled from 'styled-components'

const BlockCheck = styled.div`
	position: absolute;
	bottom: -20px;
	height: 0;
	height: 5px;
	margin-top: 5px;
	transition: 1s;
`

// box-shadow: 0px 1px 8px rgba(36, 204, 167, 0.5);
// box-shadow: 0px 1px 8px rgb(196 37 37 / 0.5);
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
	console.log(rating)
	useEffect(() => {
		const passValueArr = [...passValue]

		for (let i = 0; i < passValueArr.length; i += 1) {
			console.log(passValueArr.length)
			/* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
			if (!isUpperCase && upperCase.indexOf(passValue[i]) != -1) {
				setIsUpperCase(true)
			} else if (!isLowerCase && loverCase.indexOf(passValue[i]) != -1) {
				setIsLowerCase(true)
			} else if (!isNumber && digits.indexOf(passValue[i]) != -1) {
				setIsNumber(true)
			} else if (!isSpecial && specials.indexOf(passValue[i]) != -1) {
				setIsSpecial(true)
			}
		}

		if (upperCase) rating += 1 // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
		if (loverCase) rating += 1 // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
		if (digits) rating += 1 // Если в пароле есть цифры, то увеличиваем рейтинг сложности
		if (specials) rating += 1 // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности

		return () => {
			setIsUpperCase(false)
			setIsLowerCase(false)
			setIsNumber(false)
			setIsSpecial(false)
		}
	}, [passValue])

	console.log(isUpperCase, isLowerCase, isNumber, isSpecial)

	return (
		// <>
		// 	{passValue.length < 6 && rating < 3 && (
		// 		<BlockCheck
		// 			style={{
		// 				width: '10%',
		// 				boxShadow: 'box-shadow: 0px 1px 8px rgb(196 37 37 / 0.5)',
		// 				border: '2px solid rgb(201 33 27)',
		// 			}}
		// 		/>
		// 	)}
		// 	{passValue.length >= 8 && rating < 3 && (
		// 		<BlockCheck
		// 			style={{
		// 				width: '50%',
		// 				boxShadow: 'box-shadow: 0px 1px 8px rgb(255 199 39 / 0.5)',
		// 				border: '2px solid rgb(255 199 39)',
		// 			}}
		// 		/>
		// 	)}

		// 	{passValue.length >= 8 && rating >= 3 && <BlockCheck style={{ width: '100%', border: '4px solid #24CCA7' }} />}
		// 	{passValue.length <= 16 && rating >= 3 && <BlockCheck style={{ width: '100%', border: '4px solid #24CCA7' }} />}

		// 	{passValue.length >= 6 && rating === 1 && <BlockCheck style={{ width: '10%' }} />}

		// 	{passValue.length >= 6 && rating > 1 && rating < 4 && (
		// 		<BlockCheck style={{ width: '50%', backgroundColor: '#ffdb00' }} />
		// 	)}

		// 	{passValue.length >= 6 && rating === 4 && <BlockCheck style={{ width: '100%', backgroundColor: '#61ac27' }} />}
		// </>

		<>
			{passValue.length < 6 && rating < 3 && <BlockCheck style={{ width: '10%', backgroundColor: '#e7140d' }} />}

			{passValue.length < 6 && rating >= 3 && <BlockCheck style={{ width: '50%', backgroundColor: '#ffdb00' }} />}

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
