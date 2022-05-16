import React, { useState } from 'react'
import styled from 'styled-components'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { sprite } from '../../../../assets/images/index.js'
import { Button } from '../../../../modules/common/Button/index'
import { LogoAuth } from 'modules/components/logo/index.js'
import { useDispatch } from 'react-redux'
import authOperations from '../../../../store/auth/auth-operations'

const StyledFormRegistration = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 38px 20px 36px 20px;
	margin-left: auto;
	margin-right: auto;

	color: #e0e0e0;

	@media screen and (max-width: 767px) {
		max-width: 320px;
	}

	@media screen and (min-width: 768px) {
		width: 533px;
		padding: 40px 58px 66px 65px;
		border-radius: 20px;
	}
	@media screen and (min-width: 1280px) {
		margin-top: 136px;
		margin-bottom: 116px;
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

export const FormLogin = () => {
	const dispatch = useDispatch()

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			// validationSchema={Yup.object({
			// 	password: Yup.string().min(8).required('Required'),
			// 	email: Yup.string().email('Invalid email address').required('Required'),
			// })}

			onSubmit={(values, actions) => {
				dispatch(authOperations.logIn(values))
				console.log(values)
				alert(JSON.stringify(values, null, 2))
				actions.resetForm({
					email: '',
					password: '',
				})
			}}
		>
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
					<StyledInput id='password' type='text' name='password' required placeholder='Password' />
					<ErrorMessage name='password' />
				</StyleIconInput>

				<Button type='button'> Log In</Button>
				<Button color={false} type='button'>
					Registration
				</Button>
			</StyledFormRegistration>
		</Formik>
	)
}
