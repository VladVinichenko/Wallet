import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { vars} from '../../../stylesheet'
ChartJS.register(ArcElement, Tooltip, Legend);


const ChartWrap = styled.div`
position: relative;
@media (max-width: ${vars.breakpoints.tabletUp}) {
margin: 0 30px  0 0;
width: 335px;
height: 335px;
}
@media (max-width: ${vars.breakpoints.mobileUp}) {
width: 280px;
height: 280px;
margin:0 0 30px 0;
}

@media(min-width: ${vars.breakpoints.desktop}){
width: 290px;
height: 290px;
margin: 0 30px  0 0;
}
`
const TotalBalance = styled.p`
font-weight: 700;
font-size: 18px;
line-height: 27px;
 position: absolute;
 top: 50%;
 left:50%;
 transform: translate(-50%, -50%) ;
 `

export const data = {
  /* labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'], */
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3, 4,5,7],
      backgroundColor: [
         vars.color.chart.basic,
         vars.color.chart.products,
         vars.color.chart.car,
          vars.color.chart.careAbout,
         vars.color.chart.careChild,
          vars.color.chart.forHome,
          vars.color.chart.education,
          vars.color.chart.leisure,
         vars.color.chart.other,
        
      ],
      borderColor: [
        vars.color.chart.basic,
         vars.color.chart.products,
         vars.color.chart.car,
          vars.color.chart.careAbout,
         vars.color.chart.careChild,
          vars.color.chart.forHome,
          vars.color.chart.education,
          vars.color.chart.leisure,
         vars.color.chart.other,
      ],
          borderWidth: 1,
          cutout: '70%',
     
    },
  ],
};
const Chart = () => { 
    return(<ChartWrap><Doughnut data={data} />
        <TotalBalance>&#x24; {/* {balance} */}</TotalBalance>
      </ChartWrap>)
    
}

export { Chart}