import { useState, forwardRef, useEffect } from 'react'
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled'
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import { styled } from '@mui/system'
import { StyledEngineProvider } from '@mui/material/styles'
import { vars } from 'stylesheet'

import rowDown from 'assets/images/openMenu/row-down.svg'

const StyledButton = styled('button')(
	({ theme }) => `
  font-family: Circe, sans-serif;
  font-size: 16px;
  font-size: 16px;
line-height: 24px;
height:50px;
padding-left: 15px;
border: ${(props) => props.theme.border.forthLine}; 
border-radius: ${(props) => props.theme.borderRadius.seconary};
background-color: transparent;
appearance: none;
width: 100%;
cursor: pointer;
  box-sizing: border-box; 
  text-align: left;
  

  &.${selectUnstyledClasses.focusVisible} {
    outline: 2px solid ${(props) => props.theme.color.accent.buttonOpenMenu};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '';
      color: ${(props) => props.theme.color.accent.buttonOpenMenu};
    }
  }

  &::after {
    content: url(${rowDown});
    float: right;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.mobileUp}) {
width: 100%;
}
@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
width: 160px;
}
@media(min-width: ${(props) => props.theme.breakpoints.desktop}){
width:180px;
}

&:not(:last-child){
  @media (max-width: ${(props) => props.theme.breakpoints.mobileUp}) {
margin-bottom: 20px;
}}

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
  max-height: 250px;
  background: ${(props) => props.theme.color.background.openMenu};
  border: 1px solid inherit;
  border-radius: ${(props) => props.theme.borderRadius.primary};
  box-shadow: ${(props) => props.theme.boxShadow.openMenu};
  backdrop-filter: blur(50px);
  overflow: auto;
  outline: 0px;

  @media (max-width: ${(props) => props.theme.breakpoints.mobileUp}) {
width: 280px;
}
@media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
width: 160px;
}
@media(min-width: ${(props) => props.theme.breakpoints.desktop}){
width:180px;
}


  `
)

const StyledOption = styled(OptionUnstyled)(
	({ theme }) => `
  list-style: none;
  padding: 8px;
  cursor: pointer;
  &:last-of-type {
    border-bottom: none;
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${(props) => props.theme.color.background.primary};
    color: ${(props) => props.theme.color.accent.openMenu};
  }
  `
)

const StyledPopper = styled(PopperUnstyled)`
	z-index: 1;
`

const CustomSelect = forwardRef(function CustomSelect(props, ref) {
	const components = {
		Root: StyledButton,
		Listbox: StyledListbox,
		Popper: StyledPopper,
		...props.components,
	}

	return <SelectUnstyled {...props} ref={ref} components={components} />
})

export const Select = ({ name, data, setValues }) => {
	const [value, setValue] = useState('')

	useEffect(() => {
		setValues(value)
	}, [value])

	function renderValue(option) {
		if (name === 'month') {
			if (option == null) {
				return <span>Month </span>
			}
			return <span>{option.value.string}</span>
		}
		if (name === 'year') {
			if (option == null) {
				return <span>Year </span>
			}
			return <span>{option.value}</span>
		}
		return
	}

	return (
		<StyledEngineProvider injectFirst>
			<CustomSelect renderValue={renderValue} value={value} onChange={setValue}>
				{data.map((key) =>
					name === 'month' ? (
						<StyledOption value={key} key={key.number} text={key.string}>
							{key.string}
						</StyledOption>
					) : (
						<StyledOption value={key} key={key}>
							{key}
						</StyledOption>
					)
				)}
			</CustomSelect>
		</StyledEngineProvider>
	)
}
