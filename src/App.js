import { Fragment, useState } from 'react'
// import { ButtonAddTransactios } from 'modules'
// import Modal from 'modules/components/Modal'
// import { Logo } from 'modules'
// import { ButtonAddTransactios } from 'modules'
// import { Currency } from 'modules'
import { Login } from 'modules'
import { Registration } from 'modules/pages/registration/registration'
export default function App({ openRegisterPage, openLoginPage }) {
	const [isOpen, setIsOpen] = useState(false)
	console.log(openRegisterPage)
	return (
		<Fragment>
			{/* <ButtonAddTransactios /> */}
			{/* <Modal></Modal> */}
			{/* <ButtonAddTransactios />*/}
			{/* <Currency /> */}
			{/* <Logo /> */}
			{isOpen ? <Login /> : <Registration />}
		</Fragment>
	)
}
