import styled from 'styled-components'
import { GlobalStyle, Fonts } from './stylesheet'
import { Fragment } from 'react'
import { Container } from 'modules'
import { Login } from 'modules'
import { Registration } from 'modules/pages/registration/registration'
const Div = styled.div`
	width: 100%;
	height: 800px;
	background-color: red;
`
//
function App() {
	return (
		<Fragment>
			<Fonts />
			<GlobalStyle />
			<Container>
				<Login />
				{/* <Registration /> */}
				{/* <Div>meow</Div> */}
			</Container>
		</Fragment>
	)
}

export default App
