export const tableColumns = [
	{
		label: 'Data',
		value: 'data',
		type: 'UnixTime',
		style: {
			width: 80,
			justifyContent: 'flex-start'
		},
	},
	{
		label: 'Type',
		value: 'type',
		type: 'Action',
		style: {
			width: 40,
			justifyContent: 'center'
		},
	},
	{
		label: 'Category',
		value: 'category',
		type: 'Category',
		style: {
			width: 110,
			justifyContent: 'flex-start'
		},
	},
	{
		label: 'Comment',
		value: 'comment',
		type: 'text',
		style: {
			width: 110,
			justifyContent: 'flex-start'
		},
	},
	{
		label: 'Summa',
		value: 'summa',
		type: 'Summa',
		style: {
			width: 110,
			justifyContent: 'flex-end'
		},
	},
	{
		label: 'Total',
		value: 'total',
		type: 'text',
		style: {
			width: 110,
			justifyContent: 'flex-end'
		},
	},
]
