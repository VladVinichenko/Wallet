import { IoMdAddCircle } from 'react-icons/io'

import style from './ButtonAddTransactions.module.css'

function ButtonAddTransactios() {
	return (
		<>
			<button type='button' className={style.addTransactios}>
				<IoMdAddCircle className={style.icon} />
			</button>
		</>
	)
}

export default ButtonAddTransactios
