import { GlobalStyle, Fonts } from './stylesheet'
import { Fragment } from 'react'
import { Container } from 'modules'
import styled from 'styled-components'
import { FormRegistration } from './modules/components/formRegistration'

const Div = styled.div`
	width: 100%;
	height: 800px;
	background-color: red;
`

function App() {
	return (
		<Fragment>
			<Fonts />
			<GlobalStyle />
			<Container>
				<FormRegistration />
				{/* <Div>meow</Div> */}
			</Container>
		</Fragment>
	)
}

export default App
