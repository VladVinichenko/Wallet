import { useState, useEffect } from 'react'
import styled from 'styled-components'

const BlockCheck = styled.div`
	position: absolute;
	bottom: -8px;
	border-radius: 10px;
	transition: 1s linear;
`

export const ValidationPassIndicator = ({ passValue }) => {
	const [rating, setRating] = useState(0)

	const upperCaseArray = [
		'q',
		'w',
		'e',
		'r',
		't',
		'y',
		'u',
		'i',
		'o',
		'p',
		'a',
		's',
		'd',
		'f',
		'g',
		'h',
		'j',
		'k',
		'l',
		'z',
		'x',
		'c',
		'v',
		'b',
		'n',
		'm',
	]
	const loverCaseArray = [
		'Q',
		'W',
		'E',
		'R',
		'T',
		'Y',
		'U',
		'I',
		'O',
		'P',
		'L',
		'K',
		'J',
		'H',
		'G',
		'F',
		'D',
		'S',
		'A',
		'Z',
		'X',
		'C',
		'V',
		'B',
		'N',
		'M',
	]
	const digitsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

	const specialsArray = [
		'!',
		'@',
		'#',
		'$',
		'%',
		'^',
		'&',
		'*',
		'(',
		')',
		'_',
		'-',
		'+',
		'=',
		'|',
		'/',
		'.',
		',',
		':',
		';',
		'[',
		']',
		'{',
		'}',
	]

	useEffect(() => {
		const passValueArr = [...passValue]

		if (passValueArr.length === 0) return setRating(0)

		let filterUpperCase = 0
		let filterLowerCase = 0
		let filterDigits = 0
		let filterSpecials = 0

		passValueArr.forEach((item) => {
			if (upperCaseArray.includes(item)) filterUpperCase = 1
			if (loverCaseArray.includes(item)) filterLowerCase = 1
			if (digitsArray.includes(item)) filterDigits = 1
			if (specialsArray.includes(item)) filterSpecials = 1
		})

		setRating(filterUpperCase + filterLowerCase + filterDigits + filterSpecials)
	}, [passValue])

	return (
		<>
			{passValue.length > 0 && rating < 3 ? (
				<BlockCheck
					style={{
						width: '10%',
						border: '2px solid #e7140d',
						boxShadow: '0px 1px 8px rgba(208, 49, 44, 0.5)',
					}}
				/>
			) : passValue.length < 6 && rating >= 3 ? (
				<BlockCheck
					style={{ width: '50%', border: '2px solid #ffc727', boxShadow: '0px 1px 8px rgba(255, 202, 51, 0.5)' }}
				/>
			) : passValue.length >= 8 && rating < 3 ? (
				<BlockCheck
					style={{ width: '50%', border: '2px solid #ffc727', boxShadow: '0px 1px 8px rgba(255, 202, 51, 0.5)' }}
				/>
			) : passValue.length >= 8 && rating > 3 ? (
				<BlockCheck
					style={{
						width: '100%',
						border: '2px solid #24CCA7',
						boxShadow: '0px 1px 8px rgba(36, 204, 167, 0.5)',
					}}
				/>
			) : passValue.length >= 6 && rating === 1 ? (
				<BlockCheck
					style={{ width: '10%', border: '2px solid #FF6596', boxShadow: '0px 1px 8px rgba(208, 49, 44, 0.5)' }}
				/>
			) : passValue.length >= 6 && rating > 1 && rating < 4 ? (
				<BlockCheck
					style={{ width: '50%', border: '2px solid #ffc727', boxShadow: '0px 1px 8px rgba(255, 202, 51, 0.5)' }}
				/>
			) : passValue.length >= 6 && rating === 4 ? (
				<BlockCheck
					style={{ width: '100%', border: '2px solid #24CCA7', boxShadow: '0px 1px 8px rgba(36, 204, 167, 0.5)' }}
				/>
			) : null}
		</>
	)
}
