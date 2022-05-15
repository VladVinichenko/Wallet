import { Fragment } from 'react'
import { Routes, Route, Link, NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectorsGlobal } from 'store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ROUTES } from 'lib'
import { Home } from 'modules'
// import { ButtonAddTransactios } from 'modules'
import { Header, Modal, Logout } from 'modules'
// import { Logo } from 'modules'
// import { ButtonAddTransactios } from 'modules'
// import { Currency } from 'modules'
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

export default function App() {
	//const isLoading = useSelector(selectorsGlobal.getIsLoading)
	const isModalLogoutOpen = useSelector(selectorsGlobal.getIsModalLogoutOpen)
	return (
		<Fragment>
			{isModalLogoutOpen &&
				<Modal><Logout name='Bayraktar' /></Modal>}
			<Header />
			<NavLink to='/'>
				<Button>Home</Button>
			</NavLink>
			<NavLink to='/currency'>
				<Button>Currency</Button>
			</NavLink>
			<NavLink to='/balance'>
				<Button>Balance</Button>
			</NavLink>

			{/* <Modal></Modal> */}
			{/* <ButtonAddTransactios /> */}
			{/* <Currency /> */}
			{/* <Logo /> */}
			{/* <Home /> */}
			{/* <Balance /> */}

			<Outlet />
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
		</Fragment >
	)
}
