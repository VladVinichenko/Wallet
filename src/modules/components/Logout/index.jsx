import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setIsModalLogoutOpen } from 'store'
import { vars } from 'stylesheet'
import { Button } from 'modules'

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
        margin-bottom: 20px;vvvvvvv
    }
`

// const Button = styled.button`
//     width: 280px;
//     height: 50px;
//     padding: 13px;

//     font-size: 18px;
//     text-transform: uppercase;

//     color: ${vars.color.font.fourth};
//     background-color: ${vars.color.background.primary};

//     border: 1px solid ${vars.color.accent.seconary};
//     border-radius: ${vars.borderRadius.primary};

//     transition: all ${vars.animation.duration} ${vars.animation.function};

//     &:not(:last-child) {
//         margin-bottom: 20px;
//     }

//     &:hover,
//     &:focus {
//         color: ${vars.color.font.fifth};
//         background-color: ${vars.color.accent.primary};
//         border: 1px solid ${vars.color.accent.primary};
//     }

//     @media screen and (min-width: ${vars.breakpoints.tablet}) {
//         width: 300px;
//     }
// `

export const Logout = ({ onLogout }) => {
	const dispatch = useDispatch()

	const name = 'Bayraktar'

	return (
		<>
			<Form>
				<Title>Logout</Title>
				<Message>{<Name>{name}</Name>} are you sure you want to logout?</Message>
				<Buttons>
					<Button
						onClickButton={() => dispatch(setIsModalLogoutOpen())}
						type='button'
						title={'Do not logout'}
						label={'Do not logout'}
					>
						No, thanks
					</Button>
					<Button onClickButton={onLogout} type='button' title={'Logout'} label={'Logout'} color={false}>
						Yes, I want to logout
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
