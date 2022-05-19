import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setIsModalLogoutOpen } from 'store'
import { vars } from 'stylesheet'
import { authSelectors } from 'store/auth/auth-selectors'
import { Button } from 'modules'
import authOperations from '../../../store/auth/auth-operations'

const Form = styled.div`
	max-width: 100vh;
	position: absolute;
	top: 50%;
	left: 50%;
	padding: 20px;

	transform: translate(-50%, -50%);

	text-align: center;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		position: relative;
		top: 0;
		left: 0;
		max-width: 540px;
		padding: 40px 73px;

		transform: translate(0, 0);
	}
`

const Title = styled.h2`
	margin-bottom: 40px;

	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 400;
	font-size: 30px;
	line-height: 1.5;

	color: ${vars.color.font.primary};
`

const Message = styled.p`
	margin-bottom: 40px;
	text-align: center;

	font-size: 18px;
	line-height: 1.5;
`

const Name = styled.span`
	font-weight: 700;
`

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;

	button:first-child {
		margin-bottom: 20px;
	}
`

export const Logout = () => {
	const dispatch = useDispatch()
	const logout = () => {
		dispatch(authOperations.logOut())
		dispatch(setIsModalLogoutOpen())
	}

	const name = useSelector(authSelectors.getUsername)

	return (
		<>
			<Form>
				<Title>Logout</Title>
				<Message>{<Name>{name}</Name>} are you sure you want to log out?</Message>
				<Buttons>
				<Button 
						onClickButton={logout} 
						type='button' 
						title={'Logout'} 
						label={'Logout'} 
					>
						Log out
					</Button>
					<Button
						onClickButton={() => dispatch(setIsModalLogoutOpen())}
						type='button'
						title={'Do not logout'}
						label={'Do not logout'}
						color = {false}
					>
						Cancel
					</Button>
				</Buttons>
			</Form>
		</>
	)
}

// LogoutForm.propTypes = {
//     name: PropTypes.string.isRequired,
//     // onDelete: PropTypes.func.isRequired,
//     onClose: PropTypes.func.isRequired,
// };
