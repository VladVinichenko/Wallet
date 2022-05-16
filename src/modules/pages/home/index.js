import { useEffect } from 'react'
import Media from 'react-media'
import { windowSize } from 'lib/hooks/windowSize'
import styled from 'styled-components'
import { vars } from 'stylesheet'
import { DashboardTable } from 'modules'
import { useDispatch } from 'react-redux'
import { fetchFinance, fetchTotalFinance } from 'store'

const Dashboard = styled.div`
	position: relative;
	background-color: ${vars.color.background.seconary};
`
export const Home = () => {
	const checkWindowSize = windowSize()
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchFinance())
		dispatch(fetchTotalFinance())
	}, [])
	return (
		<>
			{/* <Header/> */}
			<Dashboard>
				<Media
					queries={{
						mobileScreen: '(max-width: 768px)',
						anotherScreen: '(min-width: 768px)',
					}}
				>
					{(matches) => {
						return <>{(matches.mobileScreen || matches.anotherScreen) && <DashboardTable viewport={matches} />}</>
					}}
				</Media>
			</Dashboard>
		</>
	)
}
