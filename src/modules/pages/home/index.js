import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Media from 'react-media'
import { windowSize } from 'lib/hooks/windowSize'
import styled from 'styled-components'
import { vars } from 'stylesheet'
import { DashboardTable } from 'modules'
import { Currency } from 'modules/components'
import { Modal } from 'modules/components'
import { Balance } from 'modules/common'
import { ROUTES } from 'lib'
import { ButtonAddTransactios } from 'modules/common'

const Dashboard = styled.div`
	position: relative;
	/* background-color: ${vars.color.background.seconary}; */
	backdrop-filter: ${vars.filter.pageBackgroundFilter};
`
export const Home = () => {
	const checkWindowSize = windowSize()
	const location = useLocation()
	const navigate = useNavigate()
	return (
		<>
			<Dashboard>
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
									<Balance viewport={matches} />
									<Currency viewport={matches} />
									<DashboardTable viewport={matches} />
									<ButtonAddTransactios viewport={matches} />
								</>
							)}
						</>
					)}
				</Media>
			</Dashboard>
		</>
	)
}
