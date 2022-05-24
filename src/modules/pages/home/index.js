import { useEffect, useState } from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Media from 'react-media'
import styled from 'styled-components'
import { vars } from 'stylesheet'
import { DashboardTable } from 'modules'
import { Currency, Navigation } from 'modules/components'
import { Balance, Container } from 'modules/common'
import { ROUTES } from 'lib'
import { fetchFinance } from 'store'
import { ChartSection } from '../../components/diagramSection'
import { authSelectors } from '../../../store/auth/auth-selectors'
import authOperations from '../../../store/auth/auth-operations'
import { fetchTotalFinance } from '../../../store/finance/finance-operation'
import { fetchCategories } from 'store'

const Background = styled.div`
	position: fixed;
	background-color: ${(props) => props.theme.color.background.page};
	backdrop-filter: ${(props) => props.theme.filter.pageBackgroundFilter};
	height: 100vh;
	width: 100vw;
	z-index: -100;
`
const DashBoardWrapper = styled.div`
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		padding-top: 40px;
	}
`
const LeftBlock = styled.div`
	@media screen and (max-width: ${vars.breakpoints.tabletUp}) {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20px;
		padding-top: 32px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		padding-top: 40px;
		padding-right: 70px;
	}
	ul {
		margin-bottom: 28px;
	}
`
const Wrapper = styled.div`
	@media screen and (max-width: ${vars.breakpoints.mobileUp}) {
		padding-top: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		display: flex;
		justify-content: space-between;
		height: calc(100vh - 80px);
		&&::before {
			position: absolute;
			content: '';
			border-right: ${(props) => props.theme.border.secondLine};
			width: 0px;
			/* height: calc(100vh - 80px); */
			height: 100%;
			left: 480px;
			box-shadow: ${(props) => props.theme.boxShadow.secondLine};
		}
	}
`
const BalanceWrapper = styled.div`
	@media screen and (max-width: ${vars.breakpoints.mobileUp}) {
		padding-top: 12px;
		margin-bottom: 32px;
	}

	@media screen and (min-width: ${vars.breakpoints.tablet}) and (max-width: ${vars.breakpoints.tabletUp}) {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		margin-bottom: 32px;
	}
`
const Home = ({ page = ROUTES.HOME }) => {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
	const [isReadyToRended, setIsReadyToRended] = useState(false)
	const dispatch = useDispatch()
	const location = useLocation()
	const navigate = useNavigate()
	useEffect(() => {
		isLoggedIn && dispatch(fetchCategories())
		isLoggedIn && dispatch(authOperations.fetchCurrentUser())
		isLoggedIn && dispatch(fetchTotalFinance())
		isLoggedIn && dispatch(fetchFinance())
	}, [isLoggedIn])
	return (
		<>
			{isLoggedIn && (
				<>
					<Background />
					<Container>
						<Wrapper>
							<Media
								queries={{
									mobileScreen: '(max-width: 767px)',
									anotherScreen: '(min-width: 768px)',
								}}
							>
								{(matches) => {
									if (matches.anotherScreen === true && location.pathname === `/${ROUTES.CURRENCY}`) {
										navigate(`/${ROUTES.HOME}`)
									}
									return (
										<>
											{matches.mobileScreen && (
												<>
													<Navigation />
													<BalanceWrapper visible>{page === ROUTES.HOME && <Balance />}</BalanceWrapper>
													{page === ROUTES.HOME && (
														<DashboardTable
															viewport={matches}
															isReadyToRended={isReadyToRended}
															setIsReadyToRended={setIsReadyToRended}
														/>
													)}
													{page === ROUTES.DIAGRAM && <ChartSection />}
													{page === ROUTES.CURRENCY && <Currency />}
												</>
											)}
											{matches.anotherScreen && (
												<>
													<LeftBlock>
														<BalanceWrapper>
															<Navigation />
															<Balance />
														</BalanceWrapper>
														<Currency />
													</LeftBlock>
													<DashBoardWrapper>
														{page === ROUTES.HOME && (
															<DashboardTable
																viewport={matches}
																isReadyToRended={isReadyToRended}
																setIsReadyToRended={setIsReadyToRended}
															/>
														)}
														{page === ROUTES.DIAGRAM && <ChartSection />}
													</DashBoardWrapper>
												</>
											)}
										</>
									)
								}}
							</Media>
						</Wrapper>
					</Container>
				</>
			)}

			{/* {(
				<Navigate to={`/${ROUTES.LOGIN}`} />
			)} */}
		</>
	)
}

export default Home
