import { Fragment, useEffect, lazy, Suspense, useState } from 'react'
import { useMatch } from 'react-router-dom'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import authOperations from '../src/store/auth/auth-operations'
import { selectorsGlobal } from 'store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ROUTES } from 'lib'
import { CustomizedSwitches, Logout } from 'modules'
import { Modal } from 'modules'
import { ButtonAddTransaction } from 'modules'
import { setIsModalAddTransactionOpen } from 'store'
import { setTheme } from 'store'
import { authSelectors } from './store/auth/auth-selectors'
import { AddTransaction } from 'modules'
import { CustomLoader } from 'modules'
import { PrivateRoute } from 'lib'
import { PublicRoute } from 'lib'
import styled from 'styled-components'
import { Preloader } from './modules/components/preloader/preloader.jsx'

const Header = lazy(() => import('./modules/components/Header' /* webpackChunkName: 'Header' */))
const Home = lazy(() => import('./modules/pages/home' /* webpackChunkName: 'Home' */))
const Registration = lazy(() => import('./modules/pages/registration' /* webpackChunkName: 'Registration' */))
const Login = lazy(() => import('./modules/pages/login' /* webpackChunkName: 'Login' */))
const NotFoundPage = lazy(() => import('./modules/pages/notFoundPage' /* webpackChunkName: 'Not_found_page' */))

const ButtomSwtichBox = styled.div`
	position: fixed;
	bottom: 20px;
	left: 20px;
	z-index: 100;
`

export default function App({ switchTheme }) {
	const dispatch = useDispatch()
	const [isReadyToRender, setIsReadyToRender] = useState(false)

	const match = useMatch(`/${ROUTES.VERIFY}/:item`)
	if (match) {
		dispatch(authOperations.fetchVerify(match.params.item))
	}
	const userName = useSelector(authSelectors.getUsername)
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
	const isLoading = useSelector(selectorsGlobal.getIsLoading)
	const isModalLogOut = useSelector(selectorsGlobal.getIsModalLogoutOpen)
	const isModalAddTransaction = useSelector(selectorsGlobal.getIsModalAddTransactionOpen)
	const themeG = useSelector(selectorsGlobal.getTheme)

	window.onload = function () {
		setIsReadyToRender(true)
	}

	const showModalAddTransaction = () => {
		dispatch(setIsModalAddTransactionOpen(true))
	}

	useEffect(() => {
		dispatch(authOperations.fetchRefreshToken())
	}, [])

	useEffect(() => {
		;() => switchTheme(themeG)
		dispatch(setTheme(themeG))
	}, [themeG])

	useEffect(() => {
		const theme = localStorage.getItem('theme')
		dispatch(setTheme(theme))
	}, [])

	return (
		<Fragment>
			{!isReadyToRender && <Preloader />}
			<Suspense fallback={<CustomLoader />}>
				{isModalLogOut && (
					<Modal>
						<Logout name={userName} />
					</Modal>
				)}
				{isLoggedIn && <Header />}
				{isLoggedIn && <ButtonAddTransaction onClickButton={showModalAddTransaction} />}
				<ButtomSwtichBox>
					<CustomizedSwitches />
				</ButtomSwtichBox>
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
						<Route path={`${ROUTES.VERIFY}`} element={<Navigate replace to={`/${ROUTES.LOGIN}`} />} />
						<Route path={`${ROUTES.VERIFY}/:token`} element={<Navigate replace to={`/${ROUTES.LOGIN}`} />} />
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
								<>
									<NotFoundPage /> <Outlet />
								</>
							}
						/>
					</Route>
				</Routes>

				{isLoading && <CustomLoader />}
			</Suspense>
		</Fragment>
	)
}
