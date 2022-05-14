import axios from 'axios'

const getCourse = axios.create({
	baseURL: 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11',
	timeout: 10000,
})
export default async function fetchCourse() {
	try {
		const { data } = await getCourse()
		return data
	} catch (error) {
		console.error(error)
	}
}
