import * as Yup from 'yup'
import { vars } from 'stylesheet'

export const ValidationSchemaLogIn = () => {
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

	return Yup.object({
		password: Yup.string()
			.min(6, <div style={validationErrorText}>At least 6 character</div>)
			.max(16, <div style={validationErrorText}>No more than 16 characters</div>)
			.required(<div style={validationErrorText}>Required</div>),

		email: Yup.string()
			.test('email', <div style={validationErrorText}>Invalid email address</div>, (value) => {
				let error = ''
				if (!value) {
					error = 'Required'
				} else if (emailValid.test(value)) {
					console.log('valid')
					error = 'ok'
				}
				return error
			})
			.min(10, <div style={validationErrorText}>At least 10 character</div>)
			.max(64, <div style={validationErrorText}>No more than 64 characters</div>)
			.required(<div style={validationErrorText}>Required</div>),
	})
}
