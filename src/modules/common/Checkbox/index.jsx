import styled, { css } from 'styled-components'
import { BsPlusLg } from 'react-icons/bs'
import { FaMinus } from 'react-icons/fa'
import { vars } from 'stylesheet'

export const Checkbox = () => {
	return (
		<Container>
			<ToggleContainer>
				<FormForButton>
					<Label>
						<Input defaultChecked />
						<LabelText>Доход</LabelText>
					</Label>
					<ToggleField />
					<ToggleIcon className='toogle'>
						<BsPlusLg />
					</ToggleIcon>
					<Label>
						<Input className='expenses' />
						<LabelText $mode='expenses'>Расход</LabelText>
					</Label>

					{/* <input id='income' name='satisfaction' type='radio' />
					<input id='expenses' name='satisfaction' type='radio' />
					<label for='income' class='rating-label rating-label-income'>
						Доход
					</label>
					<div class='smile-rating-toggle'></div>

					<div class='toggle-rating-pill'></div>
					<label for='expenses' class='rating-label rating-label-fun'>
						Расход
					</label> */}
				</FormForButton>
			</ToggleContainer>
		</Container>
	)
}

const Container = styled.div`
	position: relative;

	max-width: 300px;
	margin: 0 auto;
	margin-top: 30px;
`

const ToggleContainer = styled.div`
	input {
		/* display: none; */
	}
`

const FormForButton = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;
`
const Input = styled.input.attrs({ type: 'radio', name: 'lasc' })``

const Label = styled.label``

const LabelText = styled.span`
	color: #e0e0e0;
	font-weight: 700;
	font-size: 16px;
	line-height: 1.5;
	${(props) => {
		switch (props.$mode) {
			case 'expenses':
				return css`
					${Input}:checked + && {
						color: #ff6596;
					}
				`
			default:
				return css`
					${Input}:checked + && {
						color: #24cca7;
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
	border: 1px solid #e0e0e0;
	border-radius: 30px;
	transition: all 500ms;
`

const ToggleIcon = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	width: 44px;
	height: 44px;
	background-color: #24cca7;
	left: 100px;
	border-radius: 50%;
	transition: all 500ms;
	z-index: 4;
	box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);

	svg {
		width: 20px;
		height: 20px;
		fill: ${vars.color.background.primary};
	}
`
