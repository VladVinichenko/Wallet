import React, { useEffect, useState } from 'react'
import { CustomLoader } from 'modules'
import styled from 'styled-components'
import { animation, vars } from 'stylesheet'
import Cookies from 'js-cookie'
import currency_mob from 'assets/images/currency/currency_mob.svg'
import currency_tab from 'assets/images/currency/currency_tab.svg'
import currency_desk from 'assets/images/currency/currency_desk.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPrivat } from 'store'
import { authSelectors } from 'store/auth'

const Currenc = styled.div`
	position: relative;
	width: 280px;
	height: 174px;
	border-radius: ${vars.borderRadius.seconary};
	color: ${vars.color.background.primary};
	background-color: ${(props) => props.theme.color.background.card};
	background-image: url(${currency_mob});
	background-repeat: no-repeat;
	background-position: right bottom;

	table {
		width: 100%;
		table-layout: fixed;
		text-align: center;
		border-collapse: collapse;
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
		border-top-left-radius: ${(props) => props.theme.borderRadius.seconary};
		background-color: ${(props) => props.theme.color.background.currency};
	}

	thead td:nth-child(2) {
		background-color: ${(props) => props.theme.color.background.currency};
	}

	thead td:nth-child(3) {
		border-top-right-radius: ${(props) => props.theme.borderRadius.seconary};
		background-color: ${(props) => props.theme.color.background.currency};
	}

	td {
		padding-top: 10px;
	}

	@media (min-width: ${vars.breakpoints.tablet}) {
		width: 336px;
		height: 182px;
		background-image: url(${currency_tab});

		currencyShow {
			animation: ${animation.show.currency};
		}
	}

	@media (min-width: ${vars.breakpoints.desktop}) {
		width: 393px;
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
	} ;
`

export const Currency = () => {
	const [currency, setCurrency] = useState([])
	const dispatch = useDispatch()
	const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
	useEffect(async () => {
		isLoggedIn & !Cookies.get('courses') && (await dispatch(fetchPrivat()))
		const data = Cookies.get('courses')
		const fetchCurrency = (courses) => {
			const data = JSON.parse(courses)
			const filteredCurrencies = []
			const currencies = ['USD', 'EUR', 'RUR']
			currencies.forEach((currency) => {
				data?.forEach((element) => {
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
			return filteredCurrencies
		}
		data && setCurrency(fetchCurrency(data))
	}, [])

	return (
		<Currenc>
			{currency.length === 0 ? (
				<CustomLoader inBlock={'absolute'} size='50' />
			) : (
				<table>
					<thead>
						<tr>
							<td>Currency</td>
							<td>Buy</td>
							<td>Sell</td>
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
