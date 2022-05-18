export const tableColumns = [
	{
		label: 'Date',
		value: 'date',
		type: 'UnixTime',
		style: {
			width: 80,
			justifyContent: 'flex-start',
		},
	},
	{
		label: 'Type',
		value: 'type',
		type: 'Action',
		style: {
			width: 40,
			justifyContent: 'center',
		},
	},
	{
		label: 'Category',
		value: 'category',
		type: 'Category',
		style: {
			width: 110,
			justifyContent: 'flex-start',
		},
	},
	{
		label: 'Comment',
		value: 'comment',
		type: 'Comment',
		style: {
			width: 110,
			justifyContent: 'flex-start',
		},
	},
	{
		label: 'Summa',
		value: 'sum',
		type: 'Summa',
		style: {
			width: 110,
			justifyContent: 'flex-end',
		},
	},
	{
		label: 'Balance',
		value: 'balance',
		type: 'Balance',
		style: {
			width: 110,
			justifyContent: 'flex-end',
		},
	},
]
