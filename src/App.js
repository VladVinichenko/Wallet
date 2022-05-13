import { GlobalStyle, Fonts } from './stylesheet'
import { Fragment } from 'react'
import { AddTransaction } from 'modules/components/addTransaction'

function App() {
	return (
		<Fragment>
			<Fonts />
			<GlobalStyle />
			<AddTransaction />
		</Fragment>
	)
}

export default App
