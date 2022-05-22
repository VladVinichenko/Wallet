export const tableColumns = [
	{
		label: 'Date',
		value: 'date',
		type: 'UnixTime',
		style: {
			width: 55,
			justifyContent: 'flex-start',
			marginRight: '48px',
		},
	},
	{
		label: 'Type',
		value: 'type',
		type: 'Action',
		style: {
			width: 40,
			justifyContent: 'center',
			marginRight: '54px',
		},
	},
	{
		label: 'Category',
		value: 'category',
		type: 'Category',
		style: {
			width: 110,
			justifyContent: 'flex-start',
			marginRight: '0',
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
		label: 'Sum',
		value: 'sum',
		type: 'Sum',
		style: {
			width: 110,
			justifyContent: 'flex-end',
			marginRight: 'auto',
		},
	},
	{
		label: 'Balance',
		value: 'balance',
		type: 'Balance',
		style: {
			width: 110,
			justifyContent: 'flex-end',
			marginRight: '0',
		},
	},
]
