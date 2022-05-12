import { GlobalStyle, Fonts } from './stylesheet'
import { Fragment } from 'react'
import ButtonAddTransaction from '../src/modules/common/ButtonAddTransactions'

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
