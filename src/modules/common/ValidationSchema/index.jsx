import * as Yup from 'yup'
import styled from 'styled-components'
import { vars } from 'stylesheet'
import { useState } from 'react'

const ValidationError = styled.div`
	position: absolute;
	bottom: -35px;
	right: 30%;
	text-align: right;
`

const validationErrorText = {
	position: 'absolute',
	top: '-15px',
	right: '30%',
	textAlign: 'right',
	color: vars.color.font.negative,
	fontWeight: 'bold',
	transition: '1s linear',
}

const validationMessage = {
	position: 'absolute',
	left: ' 35%',
	top: '-15%',
	color: vars.color.font.negative,
	fontWeight: 'bold',
	transition: '1s linear',
}

export const ValidationSchema = () => {
	return Yup.object({
		name: Yup.string()
			.min(
				1,

				<div style={validationErrorText}>At least 1 character</div>
			)
			.max(
				12,

				<div style={validationErrorText}>No more than 12 characters</div>
			)
			.required(<div style={validationMessage}>Required</div>),

		password: Yup.string()
			.min(6, <div style={validationErrorText}>At least 6 character</div>)
			.max(16, <div style={validationErrorText}>No more than 16 characters</div>)

			.required(<div style={validationMessage}>Required</div>),

		passwordConfirm: Yup.string()

			.default('')
			.oneOf(
				[Yup.ref('password'), null],

				<div style={validationErrorText}>Passwords do not match</div>
			)
			.required(<div style={validationMessage}>Required</div>),

		email: Yup.string()
			.email(<div style={validationErrorText}>Invalid email address</div>)
			.required(<div style={validationMessage}>Required</div>),
	})
}
