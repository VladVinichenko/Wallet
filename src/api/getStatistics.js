import axios from 'axios'

export const getStatisticsApi = async (month,year) => {
	return await axios.get(`/finance/statistics?year=${year}&month=${month}`);
}