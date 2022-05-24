import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { varsDark } from './stylesheet'
import { varsLight } from './stylesheet'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle, Fonts } from './stylesheet'
import { store, persistor } from 'store'
import './index.css'
import './stylesheet/fonts.js'
import './stylesheet/animation.js'
import './stylesheet/globalStyles.js'
import './stylesheet/vars.js'

const theme = {
	dark: varsDark,
	light: varsLight,
}

import App from './App'
import reportWebVitals from './reportWebVitals'
import { Background } from 'modules/components/background'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={varsDark}>
					<Background />
					<GlobalStyle />
					<Fonts />
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ThemeProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)

reportWebVitals()
