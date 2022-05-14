import { Fragment } from 'react'
// import { ButtonAddTransactios } from 'modules'
// import { Logo } from 'modules'
import { Header } from 'modules'

export default function App() {
	return <Fragment>
		{/* <ButtonAddTransactios /> */}
		{/* <Logo /> */}
		<Header openModal={() => console.log("open modal")} />
	</Fragment>
}
