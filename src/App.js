import { GlobalStyle, Fonts } from './stylesheet'
import { Fragment } from 'react'
import { meow } from 'modules'

meow()

function App() {
	return (
		<Fragment>
			<Fonts />
			<GlobalStyle />
		</Fragment>
	)
}

export default App
