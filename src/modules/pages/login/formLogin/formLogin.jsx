import React, { useState } from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { sprite } from '../../../../assets/images/index.js'
import { ButtonAuth } from 'modules/components/buttonAuth/index.js'
import { LogoAuth } from 'modules/components/logo/index.js'
import { useDispatch } from 'react-redux'
import authOperations from '../../../../store/auth/auth-operations'

const StyledFormRegistration = styled.form`
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
`

const StyleIconInput = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
`

const StyleSvgIcon = styled.svg`
	position: absolute;
	margin-left: 12px;
`

const StyledInput = styled.input`
	width: 100%;
	border-bottom: 1px solid #e0e0e0;
	margin-bottom: 40px;
	padding-bottom: 12px;
	padding-left: 54px;
`

export const FormLogin = () => {
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [contact, setContact] = useState({
		email: '',
		password: '',
	})
	const dispatch = useDispatch()

	const handleChange = ({ target: { name, value } }) => {
		setContact((prev) => ({ ...prev, [name]: value }))
	}
	const handleSubmit = (el) => {
		el.preventDefault()
		dispatch(authOperations.register({ ...contact }))
		reset()
	}

	const reset = () => {
		setContact({
			email: '',
			password: '',
		})
	}

	return (
		<StyledFormRegistration onSubmit={handleSubmit}>
			<LogoAuth />
			<StyleIconInput>
				<StyleSvgIcon style={{ width: '20px', height: '16px' }}>
					<use href={sprite + '#icon-e-mail'} />
				</StyleSvgIcon>
				<StyledInput
					id={nanoid()}
					type='text'
					name='email'
					value={contact.email}
					required
					onChange={handleChange}
					placeholder='E-mail'
				/>
			</StyleIconInput>
			<StyleIconInput>
				<StyleSvgIcon style={{ width: '16px', height: '21px' }}>
					<use href={sprite + '#icon-password'} />
				</StyleSvgIcon>

				<StyledInput
					id={nanoid()}
					type='text'
					name='password'
					value={contact.password}
					required
					onChange={handleChange}
					placeholder='Password'
				/>
			</StyleIconInput>
			<ButtonAuth
				text='Вход'
				style={{ background: '#24cca7', borderRadius: '20px', border: 'none', color: '#ffffff' }}
			/>
			<ButtonAuth text='Регистрация' />
		</StyledFormRegistration>
	)
}
