import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Media from 'react-media'
// import { windowSize } from 'lib/hooks/windowSize'
import styled from 'styled-components'
import { vars } from 'stylesheet'
import { DashboardTable } from 'modules'
import { Currency, Navigation } from 'modules/components'
// import { Modal } from 'modules/components'
import { Balance, Container } from 'modules/common'
import { ROUTES } from 'lib'
// import { ButtonAddTransactios } from 'modules/common'
import { fetchFinance } from 'store'
import { ChartSection } from '../../components/diagramSection'
import { authSelectors } from '../../../store/auth/auth-selectors'

const Background = styled.div`
	position: fixed;
	background-color: ${vars.color.background.page};
	backdrop-filter: ${vars.filter.pageBackgroundFilter};
	height: 100vh;
	width: 100vw;
	z-index: -100;
`
const DashBoardWrapper = styled.div`
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		padding-top: 46px;
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
		position: relative;
		height: calc(100vh - 80px);
		&&::before {
			position: absolute;
			content: '';
			border-right: ${vars.border.secondLine};
			width: 0px;
			/* height: calc(100vh - 80px); */
			height: 100%;
			left: 480px;
			box-shadow: ${vars.boxShadow.secondLine};
		}
	}
`
const BalanceWrapper = styled.div`
	@media screen and (max-width: ${vars.breakpoints.mobileUp}) {
		padding-top: 12px;
		margin-bottom: 32px;
	}
	@media screen and (min-width: ${vars.breakpoints.desktop}) {
		margin-bottom: 32px;
	}
`
export const Home = ({ page = ROUTES.HOME }) => {
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
	const dispatch = useDispatch()
	// const checkWindowSize = windowSize()
	const location = useLocation()
	const navigate = useNavigate()
	useEffect(() => {
		dispatch(fetchFinance())
	}, [])
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
													<BalanceWrapper>{page === ROUTES.HOME && <Balance />}</BalanceWrapper>
													{page === ROUTES.HOME && <DashboardTable viewport={matches} />}
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
														{page === ROUTES.HOME && <DashboardTable viewport={matches} />}
														{page === ROUTES.DIAGRAM && <ChartSection />}
													</DashBoardWrapper>
													{/* <ButtonAddTransactios viewport={matches} /> */}
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
		</>
	)
}
