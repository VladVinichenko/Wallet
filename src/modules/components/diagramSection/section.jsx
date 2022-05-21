import { useState , useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Chart } from './chart';
import { DiagramTable } from './table';
import { Selects } from './selectors';
import { vars } from '../../../stylesheet';
import { getStatistics } from '../../../store/finance/finance-operation';
import {selectorsFinance } from '../../../store/finance/finance-selectors'
import Media from 'react-media';

const StatisticsSection = styled.section`

@media (min-width:${vars.breakpoints.tablet}) and (max-width:${vars.breakpoints.tabletUp}) {
  /*  position: relative; */
padding-bottom: 35px;
}
padding-bottom: 50px;

@media (min-width: ${vars.breakpoints.tablet}) {
  /* padding-top: 45px; */
  width: 704px;
}

@media (min-width: ${vars.breakpoints.desktop}) {
  /* padding-top: 45px; */
  width: 715px;
}
`
const SectionTitle = styled.h2`
text-align: left;
font-family: 'Poppins',sans-serif;
font-weight: 400;
font-size: 30px;
line-height: 45px;
margin-bottom: 20px;


/* @media (min-width:${vars.breakpoints.tablet})and (max-width:${vars.breakpoints.tabletUp}) {
   position: absolute;
   top: 0;
   left: 0;
} */
@media (max-width: ${vars.breakpoints.mobileUp}) {
  margin-bottom: 5px;
} 
`

const SectionContent = styled.div`
 
@media (min-width: ${vars.breakpoints.tablet}) {
   display: flex;
   justify-content: space-between;

   & div:only-child {
     margin-left: auto;
   }
}
`

const TableWrapper = styled.div`
  @media (min-width: ${vars.breakpoints.tablet}) {
    width: 336px;
    margin-top: -43px;
  }

  @media (min-width: ${vars.breakpoints.desktop}) {
    width: 395px;
    margin: 0;
  }
`


const ChartSection = () => {
  
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const { totalOutlaySlct, totalIncomeSlct, categoriesStatisticsSlct, getCategories } = selectorsFinance;
  const allCategories = useSelector(getCategories);
  const totalOutlay = useSelector(totalOutlaySlct);
  const totalIncome = useSelector(totalIncomeSlct);
  const categoriesStatistics = useSelector(categoriesStatisticsSlct);

  const dispatch = useDispatch()
  useEffect(() => {
    if (month !== '' && year !== '') {
      dispatch(getStatistics({month , year}));
     }
     
  }, [month, year])

  const setDate = data => { 
    setMonth(data.month.number);
    setYear(data.year)
  }
  return (
    <StatisticsSection>
      <SectionTitle>Statistics</SectionTitle>     
      <SectionContent> 
        {totalOutlay !== '0.00'  &&<Chart statistics={categoriesStatistics} outlay={totalOutlay} categories={ allCategories}/> }
        
        <TableWrapper>
          <Selects setData={setDate} />
          {(totalIncome!=='0.00'||totalOutlay!=='0.00')
            ? (<DiagramTable outlay={totalOutlay} income={totalIncome} statistics={categoriesStatistics} categories={allCategories} />)
            : (<p>Nothing was founded. Please select month and year.</p>)}  
      </TableWrapper>  
      </SectionContent>  
    </StatisticsSection>
  );
};

export { ChartSection}
