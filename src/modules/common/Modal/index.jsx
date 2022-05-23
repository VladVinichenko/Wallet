import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { VscClose } from 'react-icons/vsc'
import { vars } from 'stylesheet'
import { useDispatch } from 'react-redux'
import { setCloseModal } from 'store'

const modalRoot = document.querySelector('#root-modal')

export const Backdrop = styled.div`
	z-index: 10000;
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${vars().color.background.backdrop};
`

export const ModalContent = styled.div`
	max-height: 100vh;
	overflow-y: auto;
	padding-bottom: 30px;
	position: relative;
	min-width: 100px;
	min-height: 100px;
	border-radius: ${vars().borderRadius.primary};
	background-color: ${vars().color.background.primary};
	// overflow: hidden;

	@media screen and (max-width: ${vars().breakpoints.mobileUp}) {
		border-radius: 0;
		width: 100%;
		height: 100%;
	}
`
export const IconButton = styled.button`
	position: absolute;
	top: 20px;
	right: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 201;
	background-color: transparent;

	border: 1px solid transparent;
	cursor: pointer;

	@media screen and (max-width: ${vars().breakpoints.mobileUp}) {
		display: none;
	}

	svg {
		fill: ${vars().color.font.primary};
		width: 25px;
		height: 25px;
	}
`
export const Modal = ({ children }) => {
	const dispatch = useDispatch()

	const closeModal = () => {
		dispatch(setCloseModal())
	}

	useEffect(() => {
		function handleKeyDown(e) {
			e.code === 'Escape' && closeModal()
		}
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [children, closeModal])

	const handleBackdropClick = (e) => {
		e.target === e.currentTarget && closeModal()
	}

	return createPortal(
		<>
			<Backdrop onClick={handleBackdropClick}>
				<ModalContent>
					<IconButton type='button' onClick={closeModal}>
						<VscClose />
					</IconButton>
					{children}
				</ModalContent>
			</Backdrop>
		</>,
		modalRoot
	)
}
