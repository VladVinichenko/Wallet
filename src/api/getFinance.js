import axios from 'axios'

export const getFinance = async (page) => {
	return await axios.get('/finance', {
		params: {
			page: page,
		},
	})
}
