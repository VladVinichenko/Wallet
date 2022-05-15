import React from 'react'
import Media from 'react-media'
import { windowSize } from 'lib/hooks/windowSize'
import styled from 'styled-components'
import { vars } from 'stylesheet'

const Dashboard = styled.div`
	position: relative;
	background-color: ${vars.color.background.seconary};
`
export const Home = () => {
	const checkWindowSize = windowSize()

	return (
		<>
			{/* <Header/> */}
			<Dashboard>
				<Media
					queries={{
						mobileScreen: '(max-width: 767px)',
						anotherScreen: '(min-width: 768px)',
					}}
				>
					{(matches) => {}}
				</Media>
			</Dashboard>
		</>
	)
}
