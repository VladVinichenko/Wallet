// import { makeStyles } from '@material-ui/core/styles'
// import InputLabel from '@material-ui/core/InputLabel'
// import FormControl from '@material-ui/core/FormControl'
// import Select from '@material-ui/core/Select'
// import { SelectItem } from './SelectItem'
// import { createTheme, ThemeProvider } from '@material-ui/core/styles'

// const theme = createTheme({
// 	palette: {
// 		background: {
// 			paper: 'rgba(255, 255, 255, 0.7)', //your color
// 		},
// 		action: {
// 			hover: 'red',
// 		},
// 	},
// 	typography: { fontSize: 18 },
// })

// const useStyles = makeStyles((theme) => ({
// 	formControl: {
// 		margin: theme.spacing(3),
// 		width: '97%',
// 	},
// 	selectEmpty: {
// 		marginTop: theme.spacing(10),
// 	},
// 	select: {
// 		color: '#BDBDBD',
// 		background: 'inherit',
// 	},

// 	padding: {
// 		padding: '0',
// 	},

// 	button: {
// 		color: 'green',
// 	},
// }))

// export const SelectMenu = ({ isIncome = true, category, handleChange }) => {
// 	const classes = useStyles()
// 	return (
// 		<>
// 			<ThemeProvider theme={theme}>
// 				<FormControl className={classes.formControl}>
// 					<InputLabel id='demo-simple-select-label'>Select category</InputLabel>
// 					<Select
// 						labelId='demo-simple-select-label'
// 						id='demo-simple-select'
// 						value={category}
// 						onChange={handleChange}
// 						className={classes.select}
// 						defaultValue=''
// 					>
// 						{isIncome ? SelectItem(rangesExpense) : SelectItem(rangesIncome)}
// 					</Select>
// 				</FormControl>
// 			</ThemeProvider>
// 		</>
// 	)
// }

// const rangesExpense = [
// 	{
// 		value: 'Basic',
// 		label: 'Basic',
// 	},
// 	{
// 		value: 'Food',
// 		label: 'Food',
// 	},
// 	{
// 		value: 'Auto',
// 		label: 'Auto',
// 	},
// 	{
// 		value: 'Development',
// 		label: 'Development',
// 	},
// 	{
// 		value: 'Children',
// 		label: 'Children',
// 	},
// 	{
// 		value: 'House',
// 		label: 'House',
// 	},
// 	{
// 		value: 'Education',
// 		label: 'Education',
// 	},
// 	{
// 		value: 'The other',
// 		label: 'The other',
// 	},
// ]

// const rangesIncome = [
// 	{
// 		value: 'Regular income',
// 		label: 'Regular income',
// 	},
// 	{
// 		value: 'Non-regular income',
// 		label: 'Non-regular income',
// 	},
// ]
