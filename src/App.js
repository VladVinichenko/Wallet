import { Fragment } from 'react'
// import { ButtonAddTransactios } from 'modules'
import { AddTransaction } from 'modules/components/addTransaction'
// исправить импорт

export default function App() {
	return (
		<Fragment>
			{
				/* <ButtonAddTransactios /> */
				<AddTransaction />
			}
		</Fragment>
	)
}
