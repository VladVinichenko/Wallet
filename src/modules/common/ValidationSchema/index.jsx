import * as Yup from 'yup'
import styled from 'styled-components'
import { vars } from 'stylesheet'
import { useState } from 'react'

const validationErrorText = {
	position: 'absolute',
	left: ' 0%',
	top: '128%',
	fontWeight: 'bold',
	textAlign: 'right',
	color: vars.color.font.negative,
	transition: '1s linear',
	fontSize: '12px',
	lineHeight: '1.1',
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
			.required(<div style={validationErrorText}>Required</div>),

		password: Yup.string()
			.min(6, <div style={validationErrorText}>At least 6 character</div>)
			.max(16, <div style={validationErrorText}>No more than 16 characters</div>)

			.required(<div style={validationErrorText}>Required</div>),

		passwordConfirm: Yup.string()

			.default('')
			.oneOf(
				[Yup.ref('password'), null],

				<div style={validationErrorText}>Passwords do not match</div>
			)
			.required(<div style={validationErrorText}>Required</div>),

		email: Yup.string()
			.email(<div style={validationErrorText}>Invalid email address</div>)
			.required(<div style={validationErrorText}>Required</div>),
	})
}
