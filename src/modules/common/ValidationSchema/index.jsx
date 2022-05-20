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
const ValidationErrorText = styled.p`
	color: ${vars.color.font.negative};
`

const validationMessage = {
	position: 'absolute',
	left: ' 35%',
	top: '-15%',
	color: vars.color.font.negative,
	fontWeight: 'bold',
	transition: '1s linear',
	media: '(max-width: 200px) { color: green }',
}

export const RequiredValid = styled.div`
	display: ${(props) => (props.required ? 'block' : 'none')};
	left: 35%;
	top: -15%;
	color: ${vars.color.font.negative};
	font-weight: bold;
	transition: 1s linear;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		left: 73%;
		top: 27%;
	}
`

export const ValidationSchema = () => {
	// const [reqName, setReqName] = useState(false)

	return Yup.object({
		name: Yup.string()
			.min(
				1,
				// <ValidationError>
				// 	<ValidationErrorText>At least 1 character</ValidationErrorText>
				// </ValidationError>
				<div style={validationMessage}>At least 1 character</div>
			)
			.max(
				12,
				// <ValidationError>
				// 	<ValidationErrorText>No more than 16 characters</ValidationErrorText>
				// </ValidationError>
				<div style={validationMessage}>No more than 12 characters</div>
			)
			.required(
				<div style={validationMessage}>Required</div>
				// <div
				// 	style={{
				// 		position: 'absolute',
				// 		left: ' 35%',
				// 		top: '-15%',
				// 		color: vars.color.font.negative,
				// 		fontWeight: 'bold',
				// 		transition: '1s linear',
				// 		media: '(max-width: 200px) { color: green }',
				// 	}}
				// >
				// 	Required
				// </div>
			),

		password: Yup.string()
			.min(
				6,
				// <ValidationError>
				// 	<ValidationErrorText>At least 6 character</ValidationErrorText>
				// </ValidationError>
				<div style={validationMessage}>At least 6 character</div>
			)
			.max(
				16,
				// <ValidationError>
				// 	<ValidationErrorText>No more than 16 characters</ValidationErrorText>
				// </ValidationError>
				<div style={validationMessage}>No more than 16 characters</div>
			)

			.required(
				<div style={validationMessage}>Required</div>
				// <div
				// 	style={{
				// 		position: 'absolute',
				// 		left: ' 35%',
				// 		top: '-15%',
				// 		color: vars.color.font.negative,
				// 		fontWeight: 'bold',
				// 		transition: '1s linear',
				// 		media: '(max-width: 200px) { color: green }',
				// 	}}
				// >
				// 	Required
				// </div>
			),

		passwordConfirm: Yup.string()

			.default('')
			.oneOf(
				[Yup.ref('password'), null],
				// <ValidationError>
				// 	<ValidationErrorText>Passwords do not match</ValidationErrorText>
				// </ValidationError>
				<div style={validationMessage}>Passwords do not match</div>
			)
			.required(
				<div style={validationMessage}>Required</div>
				// <div
				// 	style={{
				// 		position: 'absolute',
				// 		left: ' 35%',
				// 		top: '-15%',
				// 		color: vars.color.font.negative,
				// 		fontWeight: 'bold',
				// 		transition: '1s linear',
				// 		media: '(max-width: 200px) { color: green }',
				// 	}}
				// >
				// 	Required
				// </div>
			),

		email: Yup.string()
			.email(
				// <ValidationError>
				// 	<ValidationErrorText>Invalid email address</ValidationErrorText>
				// </ValidationError>
				<div style={validationMessage}>Invalid email address</div>
			)
			.required(<div style={validationMessage}>Required</div>),
		// <RequiredValid display={false}>Required</RequiredValid>
	})
}
