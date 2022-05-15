import { useState } from 'react';
import styled from 'styled-components';
import { vars} from '../../../stylesheet'


const SelectsContainer = styled.div`

margin-bottom: 20px;

@media (max-width: ${vars.breakpoints.mobileUp}) {
width: 280px;
}
@media (min-width: ${vars.breakpoints.tablet}) {
display: flex;
flex-direction: row;
justify-content: space-between;
width: 335px;
}
@media(min-width: ${vars.breakpoints.desktop}){
width: 395px;
}
`

const Select = styled.select`
font-size: 16px;
line-height: 24px;
height:50px;
border: ${vars.border.forthLine}; 
border-radius: ${vars.borderRadius.seconary};
appearance: none;

@media (max-width: ${vars.breakpoints.mobileUp}) {
width: 100%;
}
@media (min-width: ${vars.breakpoints.tablet}) {
width: 160px;
}
@media(min-width: ${vars.breakpoints.desktop}){
width:180px;
}
&:not(:last-child){
  @media (max-width: ${vars.breakpoints.mobileUp}) {
margin-bottom: 20px;
}
}

`
const monthOptions = ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December']
const yearOptions = [2020, 2021, 2022]

const Selects = () => { 
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'month':
        setMonth(value);
        break;
      case 'year':
        setYear(value);
        break;

      default:
        break;
    }
  };

    return <SelectsContainer>
        
            <Select name='month'
            placeholder='Month'
            onChange={handleChange}
            defaultValue='Month'
       >           
            <option value="Month"  disabled hidden>Month</option>
            {monthOptions.map(month => <option value={month} key={month}>{month}</option>) }
        </Select>
        
        <Select name='year'
            placeholder='Year'
            onChange={handleChange}
        defaultValue='Year'>
            <option value="Year"  disabled hidden>Year</option>
            {yearOptions.map(year => <option value={year} key={year}>{year}</option>) }
        </Select>
    </SelectsContainer>
}

export { Selects}