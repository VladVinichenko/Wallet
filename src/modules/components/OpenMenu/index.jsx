import * as React from 'react'
import Select from 'react-select'

// export const OpenMenu = ({ onChange, options, value, classNname }) => {
// 	const defaultValue = (options, value) => {
// 		return options ? options.find((options) => options.value === value) : ''
// 	}
// 	return (
// 		<div className={classNname}>
// 			<Select value={defaultValue(options, value)} onChange={(value) => onChange(value)} options={options} />
// 		</div>
// 	)
// }
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled'
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import { styled } from '@mui/system'
import { StyledEngineProvider } from '@mui/material/styles'
import { vars } from 'stylesheet'
import { Field, useFormik } from 'formik'
import rowDown from 'assets/images/openMenu/row-down.svg'

import { connect, getIn } from 'formik'

const blue = {
	100: '#DAECFF',
	200: '#99CCF3',
	400: '#3399FF',
	500: '#007FFF',
	600: '#0072E5',
	900: '#003A75',
}

const grey = {
	100: '#E7EBF0',
	200: '#E0E3E7',
	300: '#CDD2D7',
	400: '#B2BAC2',
	500: '#A0AAB4',
	600: '#6F7E8C',
	700: '#3E5060',
	800: '#2D3843',
	900: '#1A2027',
}

const StyledButton = styled('button')(
	({ theme }) => `
  font-family: Circe, sans-serif;
  font-size: 18px;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  width: 280px;
  border-bottom: 1px solid ${vars.color.accent.buttonOpenMenu};
  padding: 10px 0;
  text-align: left;
  line-height: 1.5;
  color: ${vars.color.accent.buttonOpenMenu};

  &.${selectUnstyledClasses.focusVisible} {
    outline: 2px solid ${vars.color.accent.buttonOpenMenu};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: url(${rowDown};
      color: ${vars.color.accent.buttonOpenMenu};
    }
  }

  &::after {
    content: url(${rowDown});
    float: right;

  }

  @media (min-width: ${vars.breakpoints.tablet}) {
    width: 394px;
  }
  `
)

const StyledListbox = styled('ul')(
	({ theme }) => `
  font-family: Circe, sans-serif;
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  box-sizing: border-box;
  padding: 20px 0;
  margin: 10px 0;
  width: 95vw;
  // height: 352px;
  background: ${vars.color.background.openMenu};
  border: 1px solid inherit;
  border-radius: ${vars.borderRadius.primary};
  box-shadow: ${vars.boxShadow.openMenu};
  backdrop-filter: blur(50px);
  overflow: auto;
  outline: 0px;
  cursor: pointer;

  @media (min-width: ${vars.breakpoints.tablet}) {
    width: 394px;
    // height: 352px;
  }
  `
)

const StyledOption = styled(OptionUnstyled)(
	({ theme }) => `
  list-style: none;
  padding: 8px;
//   border-radius: 30px;
  // cursor: red;



//   &.${optionUnstyledClasses.selected} {
//     background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
//   }

//   &.${optionUnstyledClasses.highlighted} {
//     background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   }

//   &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
//     background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
//   }

//   &.${optionUnstyledClasses.disabled} {
//     color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
//   }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${vars.color.background.primary};
    color: ${vars.color.accent.openMenu};
  }
  `
)

const StyledPopper = styled(PopperUnstyled)`
	z-index: 1;
`

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
	const components = {
		Root: StyledButton,
		Listbox: StyledListbox,
		Popper: StyledPopper,
		...props.components,
	}

	return <SelectUnstyled {...props} ref={ref} components={components} />
})

export const OpenMenu = connect((props) => {
	// export const OpenMenu = ({ data, val, func, lab }) => {
	// const formik = useFormik({
	// 	initialValues: {
	// 		email: 'foobar@example.com',
	// 		password: 'foobar',
	// 	},
	// 	// validationSchema: validationSchema,
	// 	// onSubmit: (values) => {
	// 	// 	alert(JSON.stringify(values, null, 2))
	// 	// },
	// })

	// console.log(data)
	// console.log(val)
	const [value, setValue] = React.useState('')

	console.log('value:', value)
	function renderValue(option) {
		if (option == null) {
			return <span>Select category...</span>
		}
		// console.log(data.find((e) => e._id))
		return <span></span>
	}

	const meow = (e) => {
		getIn(props.formik.select, props.name)
	}
	// 	return (
	// 		<>
	// 			<input type='text' />
	// 			<StyledEngineProvider injectFirst>
	// 				<CustomSelect renderValue={renderValue} name={lab} value={val}>
	// 					{data.map((category) => {
	// 						return (
	// 							<StyledOption value={category._id} key={category._id}>
	// 								{category.name}
	// 							</StyledOption>
	// 						)
	// 					})}
	// 				</CustomSelect>
	// 			</StyledEngineProvider>
	// 		</>
	// 	)
	// }
	return (
		<Field
			name='category'
			render={({ field }) => {
				return (
					<StyledEngineProvider injectFirst>
						<CustomSelect renderValue={renderValue} onChange={field.onChange}>
							{props.data.map((category) => {
								return (
									<StyledOption value={category._id} key={category._id}>
										{category.name}
									</StyledOption>
								)
							})}
						</CustomSelect>
					</StyledEngineProvider>
				)
			}}
		/>
	)
})
