import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import styled from 'styled-components'
// import { useDispatch } from 'react-redux'
// import authOperations from '../../redux/auth/auth-operations'
const StyledFormRegistration = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	width: 320px;
	color: #e0e0e0;
`

const StyledInput = styled.input`
	border-bottom: 1px solid #e0e0e0;

	&:not(:last-child) {
		margin-bottom: 40px;
	}
`

const StyledButton = styled.button`
	width: 280px;
	height: 50px;
	background: #ffffff;
	border: 1px solid #4a56e2;
	border-radius: 20px;
	&:not(:last-child) {
		margin-bottom: 20px;
	}
`

export const FormRegistration = () => {
	// const [name, setName] = useState("");
	// const [password, setPassword] = useState("");
	// const [email, setEmail] = useState("");
	const [contact, setContact] = useState({
		name: '',
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
			name: '',
			email: '',
			password: '',
		})
	}

	return (
		<StyledFormRegistration onSubmit={handleSubmit}>
			<StyledInput
				id={nanoid()}
				type='text'
				name='email'
				value={contact.email}
				required
				onChange={handleChange}
				placeholder='E-mail'
			/>

			<StyledInput
				id={nanoid()}
				type='text'
				name='password'
				value={contact.password}
				required
				onChange={handleChange}
				placeholder='Password'
			/>

			<StyledInput
				id={nanoid()}
				type='text'
				name='password'
				value={contact.password}
				required
				onChange={handleChange}
				placeholder='Подтвердите пароль'
			/>

			<StyledInput
				id={nanoid()}
				type='text'
				name='name'
				value={contact.name}
				required
				onChange={handleChange}
				placeholder='Ваше имя'
			/>

			<StyledButton type='submit'>Регистрация</StyledButton>
			<StyledButton type='submit'>Вход</StyledButton>
		</StyledFormRegistration>
	)
}
