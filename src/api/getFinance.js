import axios from 'axios'

export const getFinance = async () => {
	return await axios.get('/finance')
}
