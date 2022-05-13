import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import styled from 'styled-components'
import { LogoAuth } from '../../../components/logo'
import { ButtonAuth } from '../../../components/buttonAuth'
import { sprite } from '../../../../assets/images/index.js'
import { useDispatch } from 'react-redux'
// import authOperations from '../../redux/auth/auth-operations'

const StyledFormRegistration = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 38px 20px 36px 20px;
	margin-left: auto;
	margin-right: auto;
	width: 320px;
	color: #e0e0e0;

	@media screen and (min-width: 768px) {
		width: 530px;
		padding: 40px 58px 66px 65px;
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

export const FormRegistration = ({ text }) => {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirm, setPasswordConfirm] = useState('')
	const [email, setEmail] = useState('')
	const [contact, setContact] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirm: '',
	})
	// const dispatch = useDispatch()

	const handleChange = ({ target: { name, value } }) => {
		setContact((prev) => ({ ...prev, [name]: value }))
	}
	const handleSubmit = (el) => {
		el.preventDefault()
		// dispatch(authOperations.register({ ...contact }))
		reset()
	}

	const reset = () => {
		setContact({
			name: '',
			email: '',
			password: '',
			passwordConfirm: '',
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

			<StyleIconInput>
				<StyleSvgIcon style={{ width: '16px', height: '21px' }}>
					<use href={sprite + '#icon-password'} />
				</StyleSvgIcon>
				<StyledInput
					id={nanoid()}
					type='text'
					name='passwordConfirm'
					value={contact.passwordConfirm}
					required
					onChange={handleChange}
					placeholder='Подтвердите пароль'
				/>
			</StyleIconInput>

			<StyleIconInput>
				<StyleSvgIcon style={{ width: '18px', height: '18px' }}>
					<use href={sprite + '#icon-user'} />
				</StyleSvgIcon>
				<StyledInput
					id={nanoid()}
					type='text'
					name='name'
					value={contact.name}
					required
					onChange={handleChange}
					placeholder='Ваше имя'
				/>
			</StyleIconInput>
			<ButtonAuth text='Регистрация' />
			<ButtonAuth text='Вход' />
		</StyledFormRegistration>
	)
}
