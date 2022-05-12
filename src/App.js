import { GlobalStyle, Fonts } from './stylesheet'
import { Fragment } from 'react'
import { Currency } from 'modules/components/Currency'

function App() {
	return (
		<Fragment>
			<Fonts />
			<GlobalStyle />
			<Currency />
		</Fragment>
	)
}

export default App
