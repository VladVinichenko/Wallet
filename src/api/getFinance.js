import axios from 'axios'

export const getFinance = async (page) => {
	return await axios.get('transactions/', {
		params: {
			page: page,
		},
	})
}
