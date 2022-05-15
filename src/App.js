import { Fragment } from 'react'
// import { ButtonAddTransactios } from 'modules'
// import Modal from 'modules/components/Modal'
// import { Logo } from 'modules'
// import { ButtonAddTransactios } from 'modules'
// import { Currency } from 'modules'
// import { Header } from 'modules'
// import { Logout } from 'modules'
import { Navigation } from 'modules'

export default function App() {
	return (
		<Fragment>
			{/* <ButtonAddTransactios /> */}
			{/* <Modal></Modal> */}
			{/* <ButtonAddTransactios />*/}
			{/* <Currency /> */}
			{/* <Logo /> */}
			{/* <Header openModal={() => console.log('Open modal')} /> */}
			{/* <Modal>
				<Logout
					name='Bayraktar'
					onCancel={() => console.log('Don"t logout')}
					onLogout={() => console.log("Logout")} />
			</Modal> */}
			<Navigation></Navigation>
		</Fragment>
	)
}
