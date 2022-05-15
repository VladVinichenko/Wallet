import axios from 'axios'

export const getTotal = async () => {
	return await axios.get('/finance/total-finance')
}
