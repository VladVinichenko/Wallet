import { useSelector } from 'react-redux'
import { selectorsGlobal } from 'store'
import { ThemeProvider } from 'styled-components'
import { varsDark } from './stylesheet'
import { varsLight } from './stylesheet'

const setTheme = (theme = 'varsLight') => {
	return theme === 'varsDark' ? varsDark : varsLight
}

export const ThemeWallet = ({ children }) => {
	const theme = useSelector(selectorsGlobal.getTheme)

	return <ThemeProvider theme={setTheme(theme)}>{children}</ThemeProvider>
}
