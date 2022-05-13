import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import fetchCourse from 'servises/fetchCourse'

import Spinner from 'Spinner'

import currency_mob from 'images/currency/currency_mob.png'
import currency_tab from 'images/currency/currency_tab.png'
import currency_desk from 'images/currency/currency_desk.png'

const Currenc = styled.div`
	position: relative;
	max-width: 280px;
	height: 174px;
	margin: 0 auto;
	margin-top: 30px;
	border-radius: 30px;
	color: #ffffff;
	background-color: #4a56e2;
	background-image: url(${currency_mob});
	background-repeat: no-repeat;
	background-position: right bottom;

	table {
		width: 100%;
		text-align: center;
		border-collapse: collapse;
		font-family: Circe, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 24px;
		border-spacing: 0;
		margin: 0;
		padding: 0;
	}

	thead {
		font-size: 18px;
		font-weight: bold;
		height: 50px;
	}

	thead td {
		padding: 11px 0 12px;
	}

	thead td:nth-child(1) {
		border-top-left-radius: 30px;
		background-color: rgba(255, 255, 255, 0.2);
	}

	thead td:nth-child(2) {
		background-color: rgba(255, 255, 255, 0.2);
	}

	thead td:nth-child(3) {
		border-top-right-radius: 30px;
		background-color: rgba(255, 255, 255, 0.2);
	}

	td {
		padding-top: 10px;
	}

	Spinner {
		position: relative;
		top: 50%;
		left: 50%;
		display: flex;
		justify-content: center;
		transform: translate(-50%, -50%);

		@media (min-width: 768px) {
			top: 50%;
		}
	}

	@media (min-width: 768px) {
		max-width: 336px;
		height: 182px;
		background-image: url(${currency_tab});

		currencyShow {
			animation: currency-show 0.5s forwards;
		}
	}

	@media (min-width: 1280px) {
		max-width: 393px;
		height: 347px;
		background-image: url(${currency_desk});
		margin-top: 0;

		thead {
			height: 60px;
		}
		thead td {
			padding: 17px 0 16px;
		}
		td {
			padding-top: 23px;
		}
	}
	@keyframes currency-show {
		0% {
			opacity: 0;
			transform: translateX(-50px);
		}

		50% {
			opacity: 1;
		}

		100% {
			transform: translateX(0);
		}
	}
`

export const Currency = () => {
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
		<Currenc>
			{currency.length === 0 ? (
				<Spinner />
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
		</Currenc>
	)
}
