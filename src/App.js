import styled from 'styled-components'
import { GlobalStyle, Fonts } from './stylesheet'
import { Fragment } from 'react'
import { Container } from 'modules'
import { FormRegistration } from './modules/pages/registration/formRegistration'
import { FormLogin } from './modules/pages/login/formLogin'
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
				<FormLogin />
				{/* <Div>meow</Div> */}
			</Container>
		</Fragment>
	)
}

export default App
