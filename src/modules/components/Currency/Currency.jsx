import React, { useEffect, useState } from 'react'
import fetchCourse from '../../../servises/fetchCourse'
import Spinner from '../../../Spinner/Spinner'
import styles from './Currency.module.css'

function Currency() {
	const [currency, setCurrency] = useState([])
	useEffect(() => {
		const fetchCurrency = async () => {
			const data = await fetchCourse()
			const filteredCurrencies = []
			const currencies = ['USD', 'EUR', 'RUR']
			currencies.forEach((currency) => {
				data.forEach((element) => {
					parseInt(element.buy).toFixed(2)
					if (element.ccy === currency) {
						filteredCurrencies.push({
							ccy: element.ccy,
							buy: Number(element.buy).toFixed(2),
							sale: Number(element.sale).toFixed(2),
						})
					}
				})
			})
			setCurrency(filteredCurrencies)
			localStorage.setItem('currency', JSON.stringify(filteredCurrencies))
			localStorage.setItem('currencyTime', Date.now())
		}
		let currencyLS = JSON.parse(localStorage.getItem('currency'))
		let currencyTime = JSON.parse(localStorage.getItem('currencyTime'))
		if (!currencyLS) {
			fetchCurrency()
		}
		if (Date.now() - currencyTime > 3600000) {
			fetchCurrency()
		} else {
			setCurrency(currencyLS)
		}
	}, [])

	return (
		<div className={styles.currency}>
			{currency.length === 0 ? (
				<div className={styles.loader}>
					<Spinner />
				</div>
			) : (
				<table>
					<thead>
						<tr>
							<td>Валюта</td>
							<td>Купівля</td>
							<td>Продаж</td>
						</tr>
					</thead>
					<tbody>
						{currency.map((item) => {
							return (
								<tr key={item.ccy}>
									<td>{item.ccy}</td>
									<td>{item.buy}</td>
									<td>{item.sale}</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			)}
		</div>
	)
}

export default Currency
