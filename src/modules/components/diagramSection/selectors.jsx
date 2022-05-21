import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { vars} from '../../../stylesheet'
import { Select } from './select';


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

const monthOptions = [ /* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 */
    { number: 1, string: 'January' },
    { number: 2, string: 'February' },
{ number: 3, string: 'March' },
{ number: 4, string: 'April' },
{ number: 5, string: 'May' },
{ number: 6, string: 'June' },
{ number: 7, string: 'July' },
{ number: 8, string: 'August' },
{ number: 9, string: 'September' },
{ number: 10, string: 'October' },
{ number: 11, string: 'November' },
  { number: 12, string: 'December' }]

const yearOptions = [1970, 2020, 2021, 2022] 




const Selects = ({ setData }) => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (month !== '' && year !== '') { 
      setData({month, year})
    }
   },[month, year])
   
  
  return <SelectsContainer>
    <Select name={'month'} data={monthOptions} setValues={setMonth}></Select>
    <Select name={'year'} data={yearOptions} setValues={setYear}></Select>
    </SelectsContainer>
}

export { Selects}