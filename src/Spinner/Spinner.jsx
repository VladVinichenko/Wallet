import { Oval } from 'react-loader-spinner'

import s from './Spinner.module.css'

export default function Spinner() {
	return <Oval wrapperClass={s.loader} heigth='50' width='50' color='brown' ariaLabel='loading' />
}
