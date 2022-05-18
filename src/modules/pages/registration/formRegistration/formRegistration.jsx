import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'

import styled from 'styled-components'
import { LogoAuth } from '../../../components/logo'
import { Button } from '../../../../modules/common/Button/index'
import { sprite } from '../../../../assets/images/index.js'
import { useDispatch } from 'react-redux'
import { ShowPasswordButton } from '../../../../modules/common/showPasswordButton/showPasswordButton'
import authOperations from '../../../../store/auth/auth-operations'
import { ValidationSchema } from '../../../../modules/common/validationSchema'
import { ValidationPassIndicator } from '../../../../modules/components/validationPassword/validationIndicator'
import { Link } from 'react-router-dom'
import { ROUTES } from 'lib'
const StyledFormRegistration = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 38px 20px 36px 20px;
	margin-left: auto;
	margin-right: auto;
	width: 320px;
	color: #e0e0e0;
	background-color: #ffffff;

	@media screen and (min-width: 768px) {
		width: 530px;
		padding: 40px 58px 66px 65px;
		border-radius: 20px;
	}

	@media screen and (min-width: 1280px) {
		margin: 0;
	}

	button:not(:last-child) {
		margin-bottom: 20px;
	}
`

const StyleIconInput = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	&:not(:last-child) {
		margin-bottom: 40px;
	}
`

const StyleSvgIcon = styled.svg`
	position: absolute;
	margin-left: 12px;
`

const StyledInput = styled(Field)`
	width: 100%;
	border-bottom: 1px solid #e0e0e0;
	border-top: none;
	border-left: none;
	border-right: none;
	padding-bottom: 12px;
	padding-top: 12px;
	padding-left: 54px;
	outline: none;
	&:-webkit-autofill {
		transition: background-color 5000s ease-in-out 0s;
	}
`

export const FormRegistration = () => {
	const [passwordShown, setPasswordShown] = useState(false)
	const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)

	const handleChowPassword = () => {
		setPasswordShown(!passwordShown)
	}

	const handleConfirmPasswordShown = () => {
		setConfirmPasswordShown(!confirmPasswordShown)
	}

	const dispatch = useDispatch()

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: '',
				passwordConfirm: '',
			}}
			validationSchema={ValidationSchema}
			onSubmit={(values, actions) => {
				console.log(values.name)

				const data = { name: values.name, email: values.email, password: values.password }
				dispatch(authOperations.register(data))

				actions.resetForm({
					name: '',
					email: '',
					password: '',
					passwordConfirm: '',
				})
			}}
		>
			{({ values, handleChange, isSubmitting }) => (
				<StyledFormRegistration>
					<LogoAuth />
					<StyleIconInput>
						<StyleSvgIcon style={{ width: '20px', height: '16px' }}>
							<use href={sprite + '#icon-e-mail'} />
						</StyleSvgIcon>

						<StyledInput id='email' type='text' name='email' required placeholder='E-mail' />
						<ErrorMessage name='email' />
					</StyleIconInput>

					<StyleIconInput>
						<StyleSvgIcon style={{ width: '16px', height: '21px' }}>
							<use href={sprite + '#icon-password'} />
						</StyleSvgIcon>

						<StyledInput
							id='password'
							type={passwordShown ? 'text' : 'password'}
							name='password'
							required
							placeholder='Password'
							value={values.password}
							onChange={handleChange('password')}
						/>
						<ShowPasswordButton type={'button'} onClickButton={handleChowPassword} passwordShown={passwordShown} />
						<ValidationPassIndicator passValue={values.password} />

						<ErrorMessage name='password' />
					</StyleIconInput>

					<StyleIconInput>
						<StyleSvgIcon style={{ width: '16px', height: '21px' }}>
							<use href={sprite + '#icon-password'} />
						</StyleSvgIcon>

						<StyledInput
							id='passwordConfirm'
							type={confirmPasswordShown ? 'text' : 'password'}
							name='passwordConfirm'
							required
							value={values.passwordConfirm}
							onChange={handleChange}
							placeholder='Подтвердите пароль'
						/>
						<ShowPasswordButton
							type={'button'}
							onClickButton={handleConfirmPasswordShown}
							confirmPasswordShown={confirmPasswordShown}
						/>

						<ErrorMessage name='passwordConfirm' />
					</StyleIconInput>

					<StyleIconInput>
						<StyleSvgIcon style={{ width: '18px', height: '18px' }}>
							<use href={sprite + '#icon-user'} />
						</StyleSvgIcon>

						<StyledInput id='name' type='text' name='name' required placeholder='Ваше имя' />

						<ErrorMessage name='name' />
					</StyleIconInput>

					<Button type='submit' disabled={isSubmitting}>
						Registration
					</Button>
					<Link to={`/${ROUTES.LOGIN}`}>
						<Button color={false} type={'button'}>
							Log In
						</Button>
					</Link>
				</StyledFormRegistration>
			)}
		</Formik>
	)
}
