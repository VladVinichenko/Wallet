import * as React from 'react'
import SelectUnstyled, { selectUnstyledClasses } from '@mui/base/SelectUnstyled'
import OptionUnstyled, { optionUnstyledClasses } from '@mui/base/OptionUnstyled'
import PopperUnstyled from '@mui/base/PopperUnstyled'
import { styled } from '@mui/system'
import { StyledEngineProvider } from '@mui/material/styles'
import { vars } from 'stylesheet'
import { varsRef } from 'stylesheet'

import rowDown from 'assets/images/openMenu/row-down.svg'

const StyledButton = styled('button')(
	({ theme }) => `
  font-family: Circe, sans-serif;
  font-size: 18px;
  font-style: normal;
  box-sizing: border-box;
  width: 100%;
  height: 32px;
  border-bottom: 1px solid ${varsRef().color.accent.buttonOpenMenu};
  text-align: left;
  line-height: 27px;
  padding: 0 20px;
	margin-bottom:40px;
  color: ${varsRef().color.accent.buttonOpenMenu};


  &.${selectUnstyledClasses.focusVisible} {
    outline: 1px solid ${varsRef().color.accent.buttonOpenMenu};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: url(${rowDown});
      color: ${varsRef().color.accent.buttonOpenMenu};
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
  font-weight: normal;
  box-sizing: border-box;
  padding: 20px 0;
  margin: 4px 0 0;
  width: 95vw;
  height: 352px;
  background: ${varsRef().color.background.openMenu};
  border: 1px solid inherit;
  border-radius: ${varsRef().borderRadius.primary};
  box-shadow: ${varsRef().boxShadow.openMenu};
  backdrop-filter: blur(50px);
  overflow: auto;
  outline: 0px;
  cursor: pointer;

  @media (min-width: ${vars.breakpoints.tablet}) {
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
    background-color: ${varsRef().color.background.primary};
    color: ${varsRef().color.accent.openMenu};
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
