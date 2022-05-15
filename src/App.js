import { Fragment } from 'react'
import { Routes, Route, Link, NavLink, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectorsGlobal } from 'store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ROUTES } from 'lib'

// import { ButtonAddTransactios } from 'modules'
import { Header, Modal } from 'modules'
// import { Logo } from 'modules'
// import { ButtonAddTransactios } from 'modules'
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
				<Modal>Logout</Modal>}
			<Header />
			<NavLink to='/'>
				<Button>Home</Button>
			</NavLink>
			{/* <ButtonAddTransactios /> */}
			{/* <Currency /> */}
			{/* <Logo /> */}
			<Balance />

			<Outlet />
			<ToastContainer autoClose={2000} />
			<Routes>
				<Route
					path='/'
					element={
						<NavLink to='/currency'>
							<Button color={false}>Currency</Button>
							<Outlet />
						</NavLink>
					}
				>
					<Route
						path='currency'
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
							</>
						}
					/>
					<Route
						path='*'
						element={
							<main style={{ padding: '1rem', color: 'red' }}>
								<p>page not found</p>
								<Outlet />
							</main>
						}
					/>
				</Route>
			</Routes>
		</Fragment>
	)
}
