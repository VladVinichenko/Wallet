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
@media (min-width: ${vars.breakpoints.tablet})and(max-width:${vars.breakpoints.tabletUp}) {
   position: relative;

}
`
const SectionTitle = styled.h2`
text-align: left;
font-weight: 400;
font-size: 30px;
line-height: 45px;
margin-bottom: 20px;
@media (max-width: ${vars.breakpoints.mobileUp}) {
  margin-bottom: 5px;
} 
@media (min-width: ${vars.breakpoints.tablet})and(max-width:${vars.breakpoints.tabletUp}) {
   position: absolute;
   top: 0;
   left: 0;
   transform: translateY(-50%);

}
`
const SectionContent = styled.div`
 
@media (min-width: ${vars.breakpoints.tablet}) {
   display: flex;
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
      dispatch(getStatistics({month,year}));
     }
     
  }, [month, year])

  const setDate = data => { 
    setMonth(data.month);
    setYear(data.year)
  }
  return (
    <section>
      <SectionTitle>Statistics</SectionTitle>     
      <SectionContent> 
        <Chart statistics={categoriesStatistics} outlay={totalOutlay} categories={ allCategories}/>
        <div>
          <Selects setData={ setDate}/>
          <DiagramTable outlay={totalOutlay} income={totalIncome} statistics={categoriesStatistics} categories={allCategories }/> 
      </div>  
      </SectionContent>  
    </section>
  );
};

export { ChartSection}