import styled, { css } from 'styled-components'
import { BsPlusLg } from 'react-icons/bs'
import { FaMinus } from 'react-icons/fa'
import { vars } from 'stylesheet'
import { type } from '@testing-library/user-event/dist/type'
import s from './checkbox.module.css'

const Container = styled.div`
	position: relative;
	max-width: 300px;
	margin: 0 auto;
	margin-top: 30px;
`

const ToggleContainer = styled.div`
	input {
		display: none;
	}
`

const FormForButton = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;

	/* .input:checked ~ .icon {
		left: 120px;
		background: red;
	} */
`

const Input = styled.input.attrs({ type: 'radio', name: 'lasc' })``

const Label = styled.label`
	position: relative;
	display: flex;
	align-items: center;
`

const LabelText = styled.span`
	display: inline-flex;
	color: ${vars.color.font.third};
	padding: 0;

	font-weight: 700;
	font-size: 16px;
	line-height: 1.5;
	${(props) => {
		switch (props.$mode) {
			case 'expenses':
				return css`
					${Input}:checked + && {
						color: ${vars.color.font.negative};
					}
				`
			default:
				return css`
					${Input}:checked + && {
						color: ${vars.color.font.positive};
					}
				`
		}
	}}
`

const ToggleField = styled.div`
	position: relative;
	height: 40px;
	width: 80px;
	margin-left: 20px;
	margin-right: 20px;
	border: 1px solid ${vars.color.font.third};
	border-radius: 30px;
	transition: all ${vars.animation.duration};
`

const ToggleIcon = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44px;
	height: 44px;
	background-color: ${vars.color.font.positive};
	background: ${vars.color.font.negative};
	left: 107px;
	border-radius: 50%;
	transition: all ${vars.animation.duration};
	z-index: 4;
	box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);

	${Input}:checked ~ & {
		left: 67px;
		background: ${vars.color.font.positive};
	}

	svg {
		width: 20px;
		height: 20px;
		fill: ${vars.color.background.primary};
	}
`

export const Checkbox = () => {
	const check = () => {
		console.log('click')
		const checked = document.querySelectorAll('[data]')
		checked.forEach((e) => {
			e.checked ? (e.checked = false) : (e.checked = true)
			// !e.checked

			console.log(e)
		})
	}

	return (
		<Container>
			<ToggleContainer>
				<FormForButton>
					<Label>
						<Input id='true' value='income' data='check' />
						<LabelText>Доход</LabelText>
						<ToggleIcon onClick={check}>
							<BsPlusLg />
						</ToggleIcon>
					</Label>
					<ToggleField />
					<Label>
						<Input name='expenses' id='false' value='outlay' data='check' />
						<LabelText $mode='expenses'>Расход</LabelText>
					</Label>
				</FormForButton>
			</ToggleContainer>
		</Container>
	)
}
