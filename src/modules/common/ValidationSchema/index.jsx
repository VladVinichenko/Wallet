import * as Yup from 'yup'
import { vars } from 'stylesheet'

const validationErrorText = {
	position: 'absolute',
	left: ' 0%',
	top: '105%',
	textAlign: 'right',
	fontStyle: 'normal',
	fontFamily: 'Circe,sans-serif',
	color: vars.color.font.negative,
	transition: '1s linear',
	fontSize: '15px',
	lineHeight: '1.1',
}

const emailValid = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/i
const nameValid = /^[A-Za-z]+$/
export const ValidationSchema = () => {
	return Yup.object({
		name: Yup.string()
			.test('name', <div style={validationErrorText}>Invalid name, only letters</div>, (value) => {
				let error
				if (!value) {
					error = 'Required'
				} else if (nameValid.test(value)) {
					error = 'ok'
				}
				return error
			})
			.min(2, <div style={validationErrorText}>At least 2 character</div>)
			.max(12, <div style={validationErrorText}>No more than 12 characters</div>)
			.required(<div style={validationErrorText}>Required</div>),

		password: Yup.string()
			.min(6, <div style={validationErrorText}>At least 6 character</div>)
			.max(16, <div style={validationErrorText}>No more than 16 characters</div>)
			.required(<div style={validationErrorText}>Required</div>),

		passwordConfirm: Yup.string()

			.default('')
			.oneOf(
				[Yup.ref('password'), null],
				<div style={{ ...validationErrorText, top: '128%' }}>Passwords do not match</div>
			)
			.required(<div style={{ ...validationErrorText, top: '128%' }}>Required</div>),

		email: Yup.string()
			.test('email', <div style={validationErrorText}>Invalid email address</div>, (value) => {
				let error = ''
				if (!value) {
					error = 'Required'
				} else if (emailValid.test(value)) {
					error = 'ok'
				}
				return error
			})
			.min(10, <div style={validationErrorText}>At least 10 character</div>)
			.max(64, <div style={validationErrorText}>No more than 64 characters</div>)
			.required(<div style={validationErrorText}>Required</div>),
	})
}
