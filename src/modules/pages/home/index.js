import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Media from 'react-media'
import { windowSize } from 'lib/hooks/windowSize'
import styled from 'styled-components'
import { vars } from 'stylesheet'
import { DashboardTable } from 'modules'
import { Currency, Navigation } from 'modules/components'
import { Modal } from 'modules/components'
import { Balance, Container } from 'modules/common'
import { ROUTES } from 'lib'
import { ButtonAddTransactios } from 'modules/common'

const Background = styled.div`
	position: relative;
	background-color: ${vars.color.background.page};
	backdrop-filter: ${vars.filter.pageBackgroundFilter};
`
const LeftBlock = styled.div``
const Wrapper = styled.div`
	display: flex;
`
export const Home = () => {
	const checkWindowSize = windowSize()
	const location = useLocation()
	const navigate = useNavigate()
	return (
		<>
			<Background>
				<Container>
					<Wrapper>
						<Media
							queries={{
								mobileScreen: '(max-width: 767px)',
								anotherScreen: '(min-width: 768px)',
							}}
						>
							{(matches) => (
								<>
									{matches.anotherScreen && (
										<>
											<LeftBlock>
												<Navigation />
												<Balance viewport={matches} />
												<Currency viewport={matches} />
											</LeftBlock>
											<DashboardTable viewport={matches} />
											{/* <ButtonAddTransactios viewport={matches} /> */}
										</>
									)}
								</>
							)}
						</Media>
					</Wrapper>
				</Container>
			</Background>
		</>
	)
}
