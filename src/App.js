import { Fragment, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
// import { OpenMenu } from 'modules'
import { Routes, Route, Link, NavLink, Outlet, Navigate } from 'react-router-dom'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import authOperations from '../src/store/auth/auth-operations'

import { selectorsGlobal } from 'store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ROUTES } from 'lib'
import { Header, Home, Logout } from 'modules'
import { Modal } from 'modules'
import { Registration } from 'modules/pages/registration/registration'
import { Login } from 'modules/pages/login/login'
// import { Logo } from 'modules'
import { ButtonAddTransaction } from 'modules'
import { setIsModalLogoutOpen } from 'store'
import { setIsModalAddTransactionOpen } from 'store'
import { setIsLoading } from 'store'
import { authSelectors } from './store/auth/auth-selectors'
import { AddTransaction } from 'modules'
import { Button } from 'modules'
// import { Currency } from 'modules'
import { Balance } from 'modules'
import { CustomLoader } from 'modules'
import { Navigation } from 'modules/components/Navigation'
import { fetchCategories } from 'store'
import { selectorsFinance } from 'store'
import { PrivateRoute } from 'lib'
import { PublicRoute } from 'lib'

export default function App() {
	const location = useLocation()
	const navigate = useNavigate()

	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
	const isLoading = useSelector(selectorsGlobal.getIsLoading)
	const isModalLogOut = useSelector(selectorsGlobal.getIsModalLogoutOpen)
	const isModalAddTransaction = useSelector(selectorsGlobal.getIsModalAddTransactionOpen)
	console.log(isLoggedIn)
	const dispatch = useDispatch()
	const showModalLogout = () => {
		dispatch(setIsModalLogoutOpen(true))
	}
	const showModalAddTransaction = () => {
		dispatch(setIsModalAddTransactionOpen(true))
	}
	const checkLoader = () => {
		dispatch(setIsLoading(!isLoading))
	}
	useEffect(() => {
		if (isLoggedIn) {
			dispatch(fetchCategories())
			dispatch(authOperations.fetchCurrentUser())
		}
	}, [dispatch])

	// useEffect(() => {
	// !isLoggedIn && navigate(`/${ROUTES.LOGIN}`)
	// }, [isLoggedIn])

	return (
		<Fragment>
			{/* <Registration /> */}
			{isModalLogOut && (
				<Modal>
					<Logout name='Bayraktar' />
				</Modal>
			)}
			{isLoggedIn && <Header />}
			{/* {!isLoggedIn && <Login />} */}
			{isLoggedIn && <ButtonAddTransaction onClickButton={showModalAddTransaction} />}
			{/* <OpenMenu /> */}
			{/* <ButtonAddTransactios /> */}
			{/* <Outlet /> */}
			{isModalLogOut && (
				<Modal>
					<Logout />
				</Modal>
			)}
			{isModalAddTransaction && (
				<Modal>
					<AddTransaction />
				</Modal>
			)}

			<ToastContainer autoClose={2000} />

			<Routes>
				<Route>
					<Route path='/' element={<Navigate replace to={`/${ROUTES.LOGIN}`} />} />
					<Route
						path={ROUTES.LOGIN}
						element={
							<PublicRoute
								element={
									<>
										<Login /> <Outlet />
									</>
								}
								redirectTo={`/${ROUTES.HOME}`}
								restricted
							/>
						}
					/>
					<Route
						path={ROUTES.REGISTER}
						element={
							<PublicRoute
								element={
									<>
										<Registration /> <Outlet />
									</>
								}
								redirectTo={`/${ROUTES.HOME}`}
								restricted
							/>
						}
					/>
					<Route
						path={ROUTES.HOME}
						element={
							<PrivateRoute
								redirectTo={`/${ROUTES.LOGIN}`}
								element={
									<>
										<Home page={ROUTES.HOME} /> <Outlet />
									</>
								}
							/>
						}
					/>
					<Route
						path={ROUTES.DIAGRAM}
						element={
							<PrivateRoute
								redirectTo={`/${ROUTES.LOGIN}`}
								element={
									<>
										<Home page={ROUTES.DIAGRAM} /> <Outlet />
									</>
								}
							/>
						}
					/>
					<Route
						path={ROUTES.CURRENCY}
						element={
							<PrivateRoute
								redirectTo={`/${ROUTES.LOGIN}`}
								element={
									<>
										<Home page={ROUTES.CURRENCY} /> <Outlet />
									</>
								}
							/>
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
			{isLoading && <CustomLoader />}
		</Fragment>
	)
}
