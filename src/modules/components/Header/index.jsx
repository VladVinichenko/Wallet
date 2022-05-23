import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { vars } from 'stylesheet'
import { authSelectors } from 'store/auth/auth-selectors'
import { setIsModalLogoutOpen } from 'store'
import { Container } from 'modules/common'
import { Logo } from 'modules/common'
import { sprite } from 'assets'

const Head = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	z-index: 1600;
	max-height: 60px;
	padding-top: 15px;
	padding-bottom: 15px;

	background-color: ${vars.color.background.primary};

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		max-height: 80px;
		padding-top: 20px;
		padding-bottom: 20px;
	}
`

const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	overflow: hidden;
`

const UserMenu = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`

const Name = styled.span`
	display: block;
	margin-right: 8px;
	margin-left: 12px;
	max-width: calc(100vw - 200px);

	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 1.5;
	text-align: right;

	color: ${vars.color.font.third};

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		position: relative;
		margin-right: 0;
		padding-right: 12px;

		&::after {
			content: '';
			position: absolute;
			top: -1.5px;
			right: 0;
			width: 1px;
			height: 30px;
			background-color: ${vars.color.font.third};
		}
	}
`

const ExitButton = styled.button`
	display: flex;
	align-items: center;
	box-sizing: border-box;
	height: 100%;
	padding: 0;

	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 27px;

	color: ${vars.color.font.third};
	fill: ${vars.color.font.third};

	background-color: transparent;

	border: 0;

	cursor: pointer;

	transition: all ${vars.animation.duration} ${vars.animation.function};

	&:hover,
	&:focus {
		color: ${vars.color.font.negative};
		fill: ${vars.color.font.negative};
	}

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		margin-left: 12px;
	}
`
const ButtonSvg = styled.svg`
	width: 18px;
	height: 18px;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		margin-right: 8px;
	}
`

const ButtonLabel = styled.span`
	display: none;

	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		display: contents;
	}
`

const Header = () => {
	const dispatch = useDispatch()

	const name = useSelector(authSelectors.getUsername)
	return (
		<Head>
			<Container>
				<HeaderContainer>
					<Link to='/home'>
						<Logo />
					</Link>
					<UserMenu>
						<Name>{name}</Name>
						<ExitButton onClick={() => dispatch(setIsModalLogoutOpen(true))} type='button' arial-label='Log out'>
							<ButtonSvg width='18' height='18'>
								<use href={`${sprite}#icon-exit`}></use>
							</ButtonSvg>
							<ButtonLabel>Log out</ButtonLabel>
						</ExitButton>
					</UserMenu>
				</HeaderContainer>
			</Container>
		</Head>
	)
}

export default Header
