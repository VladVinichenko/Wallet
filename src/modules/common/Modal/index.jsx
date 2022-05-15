import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { VscClose } from 'react-icons/vsc'
import { vars } from 'stylesheet'

const modalRoot = document.querySelector('#root-modal')

export const Modal = ({ children }) => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	useEffect(() => {
		function handleKeyDown(e) {
			e.code === 'Escape' && toggleModal()
		}
		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [children, toggleModal])

	const handleBackdropClick = (e) => {
		e.target === e.currentTarget && toggleModal()
	}

	return createPortal(
		<>
			{isModalOpen && (
				<Backdrop onClick={handleBackdropClick}>
					<ModalContent>
						<IconButton type='button' onClick={toggleModal}>
							<VscClose />
						</IconButton>
						{children}
					</ModalContent>
				</Backdrop>
			)}
		</>,
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
	background-color: ${vars.color.background.backdrop};
`

export const ModalContent = styled.div`
	position: relative;
	min-width: 100px;
	min-height: 100px;
	border-radius: ${vars.borderRadius.primary};
	background-color: ${vars.color.background.primary};
	overflow: auto;

	@media screen and (max-width: ${vars.breakpoints.mobileUp}) {
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

	@media screen and (max-width: ${vars.breakpoints.mobileUp}) {
		display: none;
	}

	svg {
		width: 30px;
		height: 30px;
	}
`
