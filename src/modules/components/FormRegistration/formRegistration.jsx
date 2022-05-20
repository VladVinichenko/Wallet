import { useState, useMemo } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import styled from 'styled-components'
import { LogoAuth } from '../logo'
import { Button } from '../../common/Button/index'
import { sprite } from '../../../assets/images/index.js'
import { vars } from 'stylesheet'
import { useDispatch } from 'react-redux'
import { ShowPasswordButton } from '../../common/ShowPasswordButton'
import authOperations from 'store/auth/auth-operations'
import { ValidationSchema, RequiredValid } from '../../common/ValidationSchema'
import { ValidationPassIndicator } from '../../common/validationPassword/validationIndicator'
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
	color: ${vars.color.accent.buttonOpenMenu};
	background-color: ${vars.color.background.primary};

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		width: 530px;
		padding: 40px 58px 66px 65px;
		border-radius: 20px;
	}

	@media screen and (min-width: ${vars.breakpoints.desktop}) {
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

	button {
		margin-bottom: 0;
	}
`

const StyleSvgIcon = styled.svg`
	position: absolute;
	margin-left: 12px;
`

const StyledInput = styled(Field)`
	width: 100%;
	border-bottom: 1px solid ${vars.color.accent.buttonOpenMenu};
	border-top: none;
	border-left: none;
	border-right: none;
	padding-bottom: 12px;
	padding-top: 12px;
	padding-left: 54px;
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.5;

	outline: none;
	&:-webkit-autofill {
		transition: background-color 5000s ease-in-out 0s;
	}

	::placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 1.5;
		color: ${vars.color.font.third};
	}
`

export const FormRegistration = () => {
	const [passwordShown, setPasswordShown] = useState(false)
	const [confirmPasswordShown, setConfirmPasswordShown] = useState(false)
	const [valueConfirmPassword, setValueConfirmPassword] = useState('')
	const [valuePassword, setValuePassword] = useState('')

	console.log(valuePassword.length)

	const fontDotsPass = () => {
		return !passwordShown && valuePassword.length > 0 ? { fontFamily: 'sans-serif' } : null
	}

	const fontDotsConfPass = () => {
		return !passwordShown && valueConfirmPassword.length > 0 ? { fontFamily: 'sans-serif' } : null
	}

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
			{({ values, handleChange, isSubmitting, handleBlur }) => (
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
							style={fontDotsPass()}
							id='password'
							type={passwordShown ? 'text' : 'password'}
							name='password'
							required
							placeholder='Password'
							value={values.password}
							onBlur={handleBlur('password')}
							onChange={handleChange('password')}
						/>
						<ShowPasswordButton
							onClick={(el) => {
								el.preventDefault()
							}}
							type={'button'}
							onClickBtn={handleChowPassword}
							passwordShown={passwordShown}
						/>

						<ErrorMessage name='password' />
					</StyleIconInput>

					<StyleIconInput>
						<StyleSvgIcon style={{ width: '16px', height: '21px' }}>
							<use href={sprite + '#icon-password'} />
						</StyleSvgIcon>

						<StyledInput
							style={fontDotsConfPass()}
							id='passwordConfirm'
							type={confirmPasswordShown ? 'text' : 'password'}
							name='passwordConfirm'
							required
							value={values.passwordConfirm}
							onChange={handleChange('passwordConfirm')}
							placeholder='Confirm password'
						/>
						<ShowPasswordButton
							onClick={(el) => {
								el.preventDefault()
							}}
							type={'button'}
							onClickBtn={handleConfirmPasswordShown}
							confirmPasswordShown={confirmPasswordShown}
						/>

						<ValidationPassIndicator passValue={values.password} onChange={setValueConfirmPassword(values.password)} />
						<ErrorMessage name='passwordConfirm' />
					</StyleIconInput>

					<StyleIconInput>
						<StyleSvgIcon style={{ width: '18px', height: '18px' }}>
							<use href={sprite + '#icon-user'} />
						</StyleSvgIcon>

						<StyledInput id='name' type='text' name='name' required placeholder='Name' />

						<ErrorMessage name='name' />
					</StyleIconInput>

					<Button type='submit' disabled={isSubmitting} style={{ marginButton: '20px' }}>
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
