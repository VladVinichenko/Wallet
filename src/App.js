import { GlobalStyle, Fonts } from './stylesheet'
import { Fragment } from 'react'
import styled from 'styled-components'
import { vars } from './stylesheet'

const Meow = styled.div`
	heigh: 200px;
	width: 200px;
	background-color: ${vars.color.background.card};
`

function App() {
	return (
		<Fragment>
			<Fonts />
			<GlobalStyle />
			<Meow />
		</Fragment>
	)
}

export default App
