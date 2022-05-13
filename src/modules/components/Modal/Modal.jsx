import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { VscClose } from 'react-icons/vsc'

const modalRoot = document.querySelector('#root-modal')

export default function Modal({ onClose, children }) {
	useEffect(() => {
		function handleKeyDown(e) {
			if (e.code === 'Escape') onClose()
		}
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [onClose, children])

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) onClose()
	}

	return createPortal(
		<Backdrop onClick={handleBackdropClick}>
			<ModalContent>
				<IconButton onClick={onClose} aria-label='Close Modal Button'>
					<div>
						<VscClose size={24} />
					</div>
				</IconButton>
				{children}
			</ModalContent>
		</Backdrop>,
		modalRoot
	)
}

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 1200;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.25);
`

export const ModalContent = styled.div`
	position: relative;
	padding: 40px;
	width: 540px;
	border-radius: 20px;
	background-color: #ffffff;

	overflow: auto;
`
export const IconButton = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 201;
	width: 24px;
	height: 24px;
	background-color: transparent;
	border-radius: 50%;
	border: 1px solid transparent;
`
