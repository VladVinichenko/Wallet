import { GlobalStyle, Fonts } from './stylesheet'
import { useState, Fragment } from 'react'
import Modal from 'modules/components/Modal'

function App() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	return (
		<Fragment>
			<Fonts />
			<GlobalStyle />
			{isModalOpen && <Modal onClose={toggleModal}></Modal>}
		</Fragment>
	)
}

export default App
