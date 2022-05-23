import * as React from 'react'
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
  font-size: 18px;
  font-style: normal;
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  border-bottom: 1px solid ${(props) => props.theme.color.accent.buttonOpenMenu};
  text-align: left;
  line-height: 27px;
  padding: 0 20px;
	margin-bottom:40px;
  color: ${(props) => props.theme.color.accent.buttonOpenMenu};


  &.${selectUnstyledClasses.focusVisible} {
    outline: 1px solid ${(props) => props.theme.color.accent.buttonOpenMenu};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: url(${rowDown});
      color: ${(props) => props.theme.color.accent.buttonOpenMenu};
    }
  }

  &::after {
    content: url(${rowDown});
    float: right;
    
  }

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 394px;
  }
  `
)

const StyledListbox = styled('ul')(
	({ theme }) => `
  font-family: Circe, sans-serif;
  font-size: 18px;
  line-height: 27px;
  font-weight: normal;
  box-sizing: border-box;
  padding: 20px 0;
  margin: 4px 0 0;
  width: 95vw;
  height: 352px;
  background: ${(props) => props.theme.color.background.openMenu};
  border: 1px solid inherit;
  border-radius: ${(props) => props.theme.borderRadius.primary};
  box-shadow: ${(props) => props.theme.boxShadow.openMenu};
  backdrop-filter: blur(50px);
  overflow: auto;
  outline: 0px;
  cursor: pointer;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    width: 394px;
  }
  `
)

const StyledOption = styled(OptionUnstyled)(
	({ theme }) => `
  list-style: none;
  padding: 8px;

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

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
	const components = {
		Root: StyledButton,
		Listbox: StyledListbox,
		Popper: StyledPopper,
		...props.components,
	}

	return <SelectUnstyled {...props} ref={ref} components={components} />
})

export const OpenMenu = ({ data, value, func }) => {
	function renderValue(option) {
		if (option == null) {
			return <span>Select category...</span>
		}
		return <span>{renderName(value)}</span>
	}

	const renderName = (id) => {
		return data.find((category) => category._id === id).name
	}
	return (
		<>
			<StyledEngineProvider injectFirst>
				<CustomSelect renderValue={renderValue} onChange={func}>
					{data.map((category) => {
						return (
							<StyledOption value={category._id} key={category._id}>
								{category.name}
							</StyledOption>
						)
					})}
				</CustomSelect>
			</StyledEngineProvider>
		</>
	)
}
