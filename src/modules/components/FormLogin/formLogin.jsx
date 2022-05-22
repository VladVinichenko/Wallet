import { useState } from 'react'
import styled from 'styled-components'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { sprite } from '../../../assets/images/index.js'
import { Button } from '../../common/Button/index'
import { ShowPasswordButton } from 'modules/common'
import { LogoAuth } from 'modules/components/logo/index.js'
import { useDispatch } from 'react-redux'
import authOperations from 'store/auth/auth-operations'
import { Link } from 'react-router-dom'
import { ROUTES } from 'lib'
import { vars } from 'stylesheet/vars.js'

const StyledFormRegistration = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 107px 20px 107px 20px;
	margin-left: auto;
	margin-right: auto;
	color: ${vars.color.accent.buttonOpenMenu};
	background-color: ${vars.color.font.fifth};

	@media screen and (max-width: ${vars.breakpoints.tablet}) {
		max-width: 320px;
	}

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		width: 533px;
		padding: 40px 58px 66px 65px;
		border-radius: 20px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		margin-left: 0;
		margin-right: 0;
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
	border-bottom: 1px solid ${vars.color.accent.buttonOpenMenu};
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
	::placeholder {
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 1.5;
		margin: 0;
		color: ${vars.color.font.third};
	}
`

export const FormLogin = () => {
	const [passwordShown, setPasswordShown] = useState(false)

	const dispatch = useDispatch()

	const handleChowPassword = () => {
		setPasswordShown(!passwordShown)
	}
	const handleChangePass = (e) => {
		console.log(e.target.value)
	}

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			onSubmit={(values, actions) => {
				console.log(values)
				dispatch(authOperations.logIn(values))
				alert(JSON.stringify(values, null, 2))
				actions.resetForm({
					email: '',
					password: '',
				})
			}}
		>
			{({ values, handleChange, isSubmitting, handleBlur }) => (
				<StyledFormRegistration>
					<LogoAuth />

					<StyleIconInput>
						<StyledInput id='email' type='text' name='email' required placeholder='E-mail' />
						<ErrorMessage name='email' />
					</StyleIconInput>
					<StyleSvgIcon style={{ width: '20px', height: '16px' }}>
						<use href={sprite + '#icon-e-mail'} />
					</StyleSvgIcon>
					<StyleIconInput>
						<StyleSvgIcon style={{ width: '16px', height: '21px' }}>
							<use href={sprite + '#icon-password'} />
						</StyleSvgIcon>

						<StyledInput
							id='password'
							type={passwordShown ? 'text' : 'password'}
							name='password'
							aria-label='Password'
							required
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
							placeholder='Password'
						/>

						<ErrorMessage name='password' />
						<ShowPasswordButton type={'button'} onClickBtn={handleChowPassword} passwordShown={passwordShown} />
					</StyleIconInput>

					<Button type='submit'> Log In</Button>
					<Link to={`/${ROUTES.REGISTER}`}>
						<Button color={false} type={'button'}>
							Registration
						</Button>
					</Link>
				</StyledFormRegistration>
			)}
		</Formik>
	)
}
