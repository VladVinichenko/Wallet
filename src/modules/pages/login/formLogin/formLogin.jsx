import React, { useState } from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { sprite } from '../../../../assets/images/index.js'
import { ButtonAuth } from 'modules/components/buttonAuth/index.js'
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
const StyledLogo = styled.div`
	margin-bottom: 60px;
`
const StyledLogoSvg = styled.svg`
	width: 120px;
	height: 30px;

	@media screen and (min-width: 768px) {
		width: 180px;
		height: 30px;
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

const StyledButton = styled.button`
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.5;
	text-align: center;
	letter-spacing: 0.1em;
	text-transform: uppercase;

	padding: 13px 55px 13px 61px;
	width: 280px;
	height: 50px;
	background: #ffffff;
	border: 1px solid #4a56e2;
	border-radius: 20px;
	cursor: pointer;
	&:not(:last-child) {
		margin-bottom: 20px;
	}
	&:hover {
		background: #24cca7;
		border-radius: 20px;
		border: none;
		color: #ffffff;
	}
`

export const FormLogin = () => {
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')
	const [contact, setContact] = useState({
		email: '',
		password: '',
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
			email: '',
			password: '',
		})
	}

	return (
		<StyledFormRegistration onSubmit={handleSubmit}>
			<StyledLogo>
				<StyledLogoSvg>
					<use href={sprite + '#icon-logo-form'} />
				</StyledLogoSvg>
			</StyledLogo>
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
			<ButtonAuth text='Вход' />
			<ButtonAuth text='Регистрация' />
		</StyledFormRegistration>
	)
}
