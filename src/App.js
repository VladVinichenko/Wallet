import { Fragment, useEffect } from 'react'
import { Routes, Route, Link, NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import authOperations from '../src/store/auth/auth-operations'

import { selectorsGlobal } from 'store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ROUTES } from 'lib'
import { Home } from 'modules'
// import { ButtonAddTransactios } from 'modules'
import { Modal } from 'modules'
import { Registration } from 'modules/pages/registration/registration'
import { Login } from 'modules/pages/login/login'
// import { Logo } from 'modules'
// import { ButtonAddTransactios } from 'modules'
// import { Currency } from 'modules'
import { setIsModalLogoutOpen } from 'store'
import { setIsModalAddTransactionOpen } from 'store'

import { Button } from 'modules'
import { Currency } from 'modules'
import { Balance } from 'modules'
// const Button = styled.button`
// 	background: black;
// 	height: 50px;
// 	width: 200px;
// 	color: yellow;
// 	margin-bottom: 5px;
// 	&:hover {
// 		background: grey;
// 	}
// `
// const dispatch = useDispatch()

// useEffect(() => {
// 	dispatch(authOperations.fetchCurrentUser())
// }, [dispatch])

export default function App() {
	//const isLoading = useSelector(selectorsGlobal.getIsLoading)
	const isModalLogOut = useSelector(selectorsGlobal.getIsModalLogoutOpen)
	const isModalAddTransaction = useSelector(selectorsGlobal.getIsModalAddTransactionOpen)
	const dispatch = useDispatch()
	const meow1 = () => {
		dispatch(setIsModalLogoutOpen(true))
	}
	const meow2 = () => {
		dispatch(setIsModalAddTransactionOpen(true))
	}
	return (
		<Fragment>
			<Registration />
			<Login />
			<NavLink to='/'>
				<Button>Home</Button>
			</NavLink>
			<NavLink to='/currency'>
				<Button>Currency</Button>
			</NavLink>
			<NavLink to='/balance'>
				<Button>Balance</Button>
			</NavLink>
			<Button onClickButton={meow1} color={false}>
				Modal 1
			</Button>
			<Button onClickButton={meow2} color={false}>
				Modal 1
			</Button>
			{/* <Modal></Modal> */}
			{/* <ButtonAddTransactios /> */}
			{/* <Currency /> */}
			{/* <Logo /> */}
			{/* <Home /> */}
			{/* <Balance /> */}

			<Outlet />

			{isModalLogOut && (
				<Modal>
					<Currency />
				</Modal>
			)}
			{isModalAddTransaction && (
				<Modal>
					<Balance />
				</Modal>
			)}

			<ToastContainer autoClose={2000} />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Home /> <Outlet />
						</>
					}
				/>
				<Route
					path='/currency'
					element={
						<>
							<Currency />
							<Currency />
							<Currency />
							<Currency />
							<Currency />
							<Currency />
							<Currency />
							<Currency />
							<Currency />
							<Currency />
							<Currency />
							<Outlet />
						</>
					}
				/>
				<Route
					path='/balance'
					element={
						<>
							<Balance />
							<Outlet />
						</>
					}
				/>
				{/* <Route
						path='*'
						element={
							<main style={{ padding: '1rem', color: 'red' }}>
								<p>page not found</p>
								<Outlet />
							</main>
						}
					/> */}
				{/* </Route> */}
			</Routes>
		</Fragment>
	)
}
