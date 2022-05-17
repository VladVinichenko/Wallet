import * as Yup from 'yup'
import styled from 'styled-components'

const ValidationError = styled.div`
	position: absolute;
	bottom: -35px;
	right: 30%;
	text-align: right;
`
const ValidationErrorText = styled.p`
	color: red;
`

export const ValidationSchema = () => {
	return Yup.object({
		name: Yup.string()
			.min(
				1,

				<ValidationError>
					<ValidationErrorText>Не меньше 1 символи</ValidationErrorText>
				</ValidationError>
			)
			.max(
				12,
				<ValidationError>
					<ValidationErrorText>Не більше 12 символів</ValidationErrorText>
				</ValidationError>
			)
			.required('Required'),

		password: Yup.string()
			.min(
				6,
				<ValidationError>
					<ValidationErrorText>Пароль больше 6 символов</ValidationErrorText>
				</ValidationError>
			)
			.max(
				16,
				<ValidationError>
					<ValidationErrorText>Не більше 16 символів</ValidationErrorText>
				</ValidationError>
			)

			.required('Required'),

		passwordConfirm: Yup.string()

			.default('')
			.oneOf(
				[Yup.ref('password'), null],
				<ValidationError>
					<ValidationErrorText>Пароль не соответствует</ValidationErrorText>
				</ValidationError>
			)
			.required('Required'),

		email: Yup.string()
			.email(
				<ValidationError>
					<ValidationErrorText>Invalid email address</ValidationErrorText>
				</ValidationError>
			)
			.required('Required'),
	})
}
