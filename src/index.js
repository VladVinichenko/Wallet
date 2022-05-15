import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'

import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle, Fonts } from './stylesheet'
import { store } from 'store'
import './index.css'
import './stylesheet/fonts.js'
import './stylesheet/animation.js'
import './stylesheet/globalStyles.js'
import './stylesheet/vars.js'

import App from './App'
import reportWebVitals from './reportWebVitals'
import { Background } from 'modules/components/background'
// import { Provider } from 'react-redux'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<BrowserRouter>
						<Fonts />
						<GlobalStyle />
						<App />
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
