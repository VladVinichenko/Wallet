
import styled from 'styled-components';
import { Chart } from './chart';
import { DiagramTable } from './table';
import { Selects } from './selectors';
import { vars } from '../../../stylesheet';
import Media from 'react-media';

const StatisticsSection = styled.section``
const SectionTitle = styled.h2`
text-align: left;
font-weight: 400;
font-size: 30px;
line-height: 45px;
margin-bottom: 20px;
@media (max-width: ${vars.breakpoints.mobileUp}) {
  margin-bottom: 5px;
} 
`
const SectionContent = styled.div`

@media (max-width: ${vars.breakpoints.mobileUp}) {
  
} 
@media (min-width: ${vars.breakpoints.tablet}) {
   display: flex;
}
@media(min-width: ${vars.breakpoints.desktop}){

}`


const ChartSection = () => {
  
  return (
    <section>
      <SectionTitle>Statistics</SectionTitle>     
      <SectionContent> 
        <Chart/>
        <div>
            <Selects/>
            <DiagramTable/> 
      </div>  
      </SectionContent>  
    </section>
  );
};

export { ChartSection}