import { GlobalStyle, Fonts } from './stylesheet'
import { Fragment } from 'react'
import ButtonAddTransaction from 'ButtonAddTransactions'

function App() {
	return (
		<Fragment>
			<Fonts />
			<GlobalStyle />
			<ButtonAddTransaction />
		</Fragment>
	)
}

export default App
