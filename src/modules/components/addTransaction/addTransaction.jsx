import { useDispatch, useSelector } from 'react-redux'

import { Formik, ErrorMessage } from 'formik'
import Datetime from 'react-datetime'
import { OpenMenu, Button } from 'modules'
import { Checkbox } from 'modules/common'
import styled from 'styled-components'
import * as Yup from 'yup'

import {
	setCloseModal,
	selectorsFinance,
	fetchTotalFinance,
	fetchFinance,
	resetFinance,
	addTransaction as zuzuzu,
} from 'store'
import authOperations from '../../../../src/store/auth/auth-operations'

import { vars } from 'stylesheet'
import { sprite } from 'assets'
import 'react-datetime/css/react-datetime.css'

const StyledInput = styled.input`
	box-sizing: border-box;
	width: 100%;

	font-size: 18px;
	line-height: 1.5;
	border-bottom: 1px solid ${vars().color.accent.buttonOpenMenu};

	&::placeholder {
		color: ${vars().color.font.third};
	}
`

const SummInput = styled(StyledInput)`
	font-weight: 700;
	text-align: center;
	margin-bottom: 40px;
	background: ${vars().color.background.primary};

	&::placeholder {
		text-align: center;
	}

	&.error {
		border-color: ${vars().color.font.negative};
	}

	@media screen and (min-width: 768px) {
		margin-right: 30px;
		margin-bottom: unset;
	}
`
const StyledGroup = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 40px;

	span {
		width: 100%;
		position: relative;
	}

	svg {
		position: absolute;
		top: 1px;
		right: 15px;
	}

	@media screen and (min-width: 768px) {
		flex-wrap: nowrap;
	}
`

const StyledTextarea = styled.textarea`
	box-sizing: border-box;
	margin-bottom: 40px;
	padding-left: 20px;

	background: ${vars().color.background.primary};
	width: 100%;
	height: 86px;
	font-size: 18px;
	line-height: 1.5;
	border-bottom: 1px solid ${vars().color.accent.buttonOpenMenu};
	resize: none;
	overflow: hidden;

	&::placeholder {
		color: ${vars().color.font.third};
	}

	@media screen and (min-width: 768px) {
		height: 32px;
	}
`
const Title = styled.h2`
	color: ${vars().color.font.primary};
	font-family: 'Poppins';
	font-weight: 400;
	font-size: 24px;
	line-height: 1.5;
	text-align: center;
	margin-bottom: 40px;

	@media screen and (min-width: 768px) {
		font-size: 30px;
	}
`
const FormContainer = styled.div`
	padding: 20px 10px;
	padding-bottom: 0;
	width: 100vw;

	font-size: 18px;
	line-height: 1.5;
	text-align: center;

	@media screen and (min-width: 768px) {
		padding: 40px 75px;
		width: 540px;
		min-height: 605px;
	}

	.form-control {
		padding-left: 20px;
		background: ${vars().color.background.primary};
		width: 100%;
		font-size: 18px;
		line-height: 1.5;
		border-bottom: 1px solid ${vars().color.accent.buttonOpenMenu};
	}

	.button-item:not(:last-child) {
		margin-bottom: 20px;
	}

	.switchContainer {
		margin-bottom: 40px;
	}

	.MuiFormControl-root {
		width: 100%;
	}

	.error-message {
		color: ${vars().color.font.negative};
	}
`

export const AddTransaction = () => {
	const dispatch = useDispatch()

	const closeModal = () => dispatch(setCloseModal())
	const postTransaction = (body) => dispatch(zuzuzu(body))

	const categories = useSelector(selectorsFinance.getCategories)
	const updtdCategories = categories.filter((cat) => cat.name !== 'Income')

	const onSubmitFunc = async (values) => {
		if (values.isIncome) values.category = '628587f997d487932b456397'

		const type = values.isIncome ? 'income' : 'outlay'
		values = { type, ...values }
		delete values.isIncome

		try {
			await postTransaction(values)
			// await dispatch(authOperations.fetchCurrentUser())
			await dispatch(resetFinance())
			await dispatch(fetchTotalFinance())
			await dispatch(fetchFinance())
		} catch (error) {}
		closeModal()

		// await new Promise((resolve) => setTimeout(resolve, 500))
		// alert(JSON.stringify(values, null, 2))
	}

	const transactionSchena = Yup.object().shape({
		isIncome: Yup.boolean().required('Required'),
		category: Yup.string(),
		sum: Yup.number().positive().required('Sum is Required'),
		date: Yup.date()
			.transform(function (value, originalValue) {
				if (this.isType(value)) {
					return value
				}
				const result = parse(originalValue, 'dd.MM.yyyy', new Date())
				return result
			})
			.typeError('please enter a valid date')
			.required('Date is Required'),
		comment: Yup.string()
			// .trim()
			// .matches(/^[a-z]+$/, 'Is not in correct format')
			.optional(),
	})

	return (
		<FormContainer className='addTransaction'>
			<Title>Add transaction</Title>
			<Formik
				initialValues={{
					isIncome: false,
					category: '628356e997d487932b456343',
					sum: '',
					date: new Date(),
					comment: '',
				}}
				onSubmit={onSubmitFunc}
				validationSchema={transactionSchena}
			>
				{({ values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, setValues }) => (
					<form className='transactionForm' onSubmit={handleSubmit}>
						<Checkbox className='switch' isChecked={values.isIncome} func={handleChange} val={values.category} />
						{!values.isIncome && (
							<OpenMenu
								data={updtdCategories}
								value={values.category}
								func={(category) => setValues({ ...values, category })}
								lab='category'
							/>
						)}
						{errors.category && touched.category && errors.category}

						<StyledGroup className='group'>
							<SummInput
								type='number'
								name='sum'
								min={0}
								step={0.01}
								placeholder='0.00'
								autoComplete='off'
								value={values.sum}
								onChange={handleChange}
								onBlur={handleBlur}
								className={['summInput', errors.sum && touched.sum ? 'error' : null].join(' ')}
							/>
							{/* <ErrorMessage name='sum' component='div' /> */}

							<span className='dateInputWrapper'>
								<Datetime
									name='date'
									dateFormat='DD.MM.YYYY'
									timeFormat={false}
									initialValue={values.date}
									closeOnSelect={true}
									onChange={({ _d: time }) => setValues({ ...values, date: time })}
								/>
								<svg className='calendarIcon' width='24' height='24'>
									<use href={sprite + '#icon-calendar'}></use>
								</svg>
							</span>
						</StyledGroup>

						<StyledTextarea
							type='text'
							name='comment'
							placeholder='Comment'
							autoComplete='off'
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							value={values.comment}
							onChange={handleChange}
						/>
						<ErrorMessage name='sum' className='error-message' component='div' />
						<ErrorMessage name='date' className='error-message' component='div' />
						{/* {errors.sum && touched.sum && <div className='error-message'>{errors.sum}</div>} */}

						<ul className='button-list'>
							<li className='button-item'>
								<Button type='submit' disabled={isSubmitting}>
									Add
								</Button>
							</li>
							<li className='button-item'>
								<Button type='button' color={false} onClickButton={closeModal}>
									Cancel
								</Button>
							</li>
						</ul>
					</form>
				)}
			</Formik>
		</FormContainer>
	)
}
