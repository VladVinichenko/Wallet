import { useState, useEffect } from 'react'

export function windowSize() {
	const [windowSize, setWindowSize] = useState(window.innerWidth)
	const handleResize = () => {
		setWindowSize(window.innerWidth)
	}
	useEffect(() => {
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	return windowSize
}
