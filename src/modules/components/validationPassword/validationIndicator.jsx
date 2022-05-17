import styled from 'styled-components'

const BlockCheck = styled.div`
	height: 5px;
	margin-top: 5px;
	transition: 1s;
`
export const ValidationPassIndicator = ({ passValue }) => {
	const [isUpperCase, setIsUpperCase] = useState(false)
	const [isLowerCase, setIsLowerCase] = useState(false)
	const [isNumber, setIsNumber] = useState(false)
	const [isSpecial, setIsSpecial] = useState(false)

	const upperCase = 'qwertyuiopasdfghjklzxcvbnm' // Буквы в нижнем регистре
	const loverCase = 'QWERTYUIOPLKJHGFDSAZXCVBNM' // Буквы в верхнем регистре
	const digits = '0123456789' // Цифры
	const specials = '!@#$%^&*()_-+=|/.,:;[]{}' // Спецсимволы

	const handleCheck = (e) => {
		// const { passValue } = e.target
		const isUpper = passValue.split('').every((char) => upperCase.includes(char))
		const isLower = passValue.split('').every((char) => loverCase.includes(char))
		const isDigit = passValue.split('').every((char) => digits.includes(char))
		const isSpecials = passValue.split('').every((char) => specials.includes(char))

		setIsUpperCase(isUpper)
		setIsLowerCase(isLower)
		setIsNumber(isDigit)
		setIsSpecial(isSpecials)

		for (let i = 0; i < passValue; i += 1) {
			/* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
			if (!isUpperCase && upperCase.indexOf(passValue[i]) != -1) {
				setIsLowerCase(true)
			} else if (!isLowerCase && loverCase.indexOf(passValue[i]) != -1) {
				setIsLowerCase(true)
			} else if (!isNumber && digits.indexOf(passValue[i]) != -1) {
				setIsNumber(true)
			} else if (!isSpecial && specials.indexOf(passValue[i]) != -1) {
				setIsSpecial(true)
			}
		}

		let rating = 0
		if (upperCase) rating += 1 // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
		if (loverCase) rating += 1 // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
		if (digits) rating += 1 // Если в пароле есть цифры, то увеличиваем рейтинг сложности
		if (specials) rating += 1 // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
		/* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */
		if (passValue < 6 && rating < 3) {
			BlockCheck.style.width = '10%'
			BlockCheck.style.backgroundColor = '#ff0000'
		} else if (passValue < 6 && rating >= 3) {
			BlockCheck.style.width = '50%'
			BlockCheck.style.backgroundColor = '#ffdb00'
		} else if (passValue >= 8 && rating < 3) {
			BlockCheck.style.width = '50%'
			BlockCheck.style.backgroundColor = '#ffdb00'
		} else if (passValue >= 8 && rating >= 3) {
			BlockCheck.style.width = '100%'
			BlockCheck.style.backgroundColor = '#61ac27'
		} else if (passValue >= 6 && rating == 1) {
			BlockCheck.style.width = '10%'
			BlockCheck.style.backgroundColor = '#e7140d'
		} else if (passValue >= 6 && rating > 1 && rating < 4) {
			BlockCheck.style.width = '50%'
			BlockCheck.style.backgroundColor = '#ffdb00'
		} else if (passValue >= 6 && rating == 4) {
			BlockCheck.style.width = '100%'
			BlockCheck.style.backgroundColor = '#61ac27'
		}
	}
}
