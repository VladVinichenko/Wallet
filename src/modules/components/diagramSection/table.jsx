import styled from 'styled-components';
import { vars} from '../../../stylesheet'
const Table = styled.table`
font-size: 16px;
line-height: 24px;
border-collapse: collapse; 
background-color: pink;

@media (max-width: ${vars.breakpoints.tabletUp}) {
    width: 340px;
}
@media (max-width: ${vars.breakpoints.mobileUp}) {
    width: 280px;
} 
@media(min-width: ${vars.breakpoints.desktop}){
width: 395px;
}


`
const THead = styled.thead`
border-radius: 30px;
background-color: ${vars.color.background.primary};
font-size: 18px;
line-height: 27px;
`


const THeadCategory = styled.th`
border-top-left-radius: ${vars.borderRadius.seconary};
border-bottom-left-radius:${vars.borderRadius.seconary};
height: 58px;
padding-left: 28px;
text-align: left;
width: 60%;
`
const THeadSum = styled.th`
border-top-right-radius:   ${vars.borderRadius.seconary} ;
border-bottom-right-radius: ${vars.borderRadius.seconary};
padding-right: 28px;
text-align: right;
width: 40%;
`

const TRow = styled.tr`
border-bottom: ${vars.border.firstLine};
`
const TBodyCategory = styled.td`
height: 50px;

@media (max-width: ${vars.breakpoints.tabletUp}) {
padding-left: 20px;
}
@media (max-width: ${vars.breakpoints.mobileUp}) {
padding-left: 15px;
}

@media(min-width: ${vars.breakpoints.desktop}){
padding-left: 25px;
}
`
const CategoryContents = styled.div`
display: flex;
align-items: center;
`
const TBodySum = styled.td`

text-align: right;
@media (max-width: ${vars.breakpoints.tabletUp}) {
padding-right: 20px;
}
@media(min-width: ${vars.breakpoints.desktop}){
padding-right: 30px;
}
`
const TFootRow = styled.tr`
font-weight: 700;
vertical-align: bottom;
`
const TFootCategory = styled.td`
height: 40px;
font-weight: 700;
@media (max-width: ${vars.breakpoints.tabletUp}) {
padding-left: 20px;
}
@media (max-width: ${vars.breakpoints.mobileUp}) {
padding-left: 15px;
}

@media(min-width: ${vars.breakpoints.desktop}){
padding-left: 25px;
}
`

const TFootSum = styled.td`
text-align: right;
color: ${props => { 
  return  props.Outlay? vars.color.font.negative:vars.color.font.positive
}};
@media (max-width: ${vars.breakpoints.tabletUp}) {
padding-right: 20px;
}
@media(min-width: ${vars.breakpoints.desktop}){
padding-right: 30px;
}
`
const ColorSquare = styled.span`
background-color: ${props => { 
    if (props.basic) { return vars.color.chart.basic};
    if (props.foodstuff) { return vars.color.chart.products };
    if (props.car) { return vars.color.chart.car};
    if (props.careofyourself) { return vars.color.chart.careAbout };
    if (props.children) { return vars.color.chart.careChild };
    if (props.household) { return vars.color.chart.forHome };
    if (props.education) { return vars.color.chart.education };
    if (props.leisure) { return vars.color.chart.leisure};
    if (props.other) {return vars.color.chart.other }
}};
width: 24px;
height: 24px;
border-radius: ${vars.borderRadius.third};
margin-right: 16px;
`
const DiagramTable = () => { 
    return <>
        <Table>
            <THead><tr>
                <THeadCategory>Category</THeadCategory>
                <THeadSum>Sum</THeadSum>
            </tr></THead>
            <tbody>
                <TRow>
                    <TBodyCategory><CategoryContents><ColorSquare basic/>Basic outlay</CategoryContents></TBodyCategory>
                    <TBodySum>300000.00</TBodySum>
                </TRow>
                 <TRow>
                    <TBodyCategory><CategoryContents><ColorSquare foodstuff/>Foodstuff</CategoryContents></TBodyCategory>
                    <TBodySum></TBodySum>
                </TRow>
                 <TRow>
                    <TBodyCategory><CategoryContents><ColorSquare car/>Car</CategoryContents></TBodyCategory>
                    <TBodySum></TBodySum>
                </TRow>
                 <TRow>
                    <TBodyCategory><CategoryContents><ColorSquare careofyourself/>Care of yourself</CategoryContents></TBodyCategory>
                    <TBodySum></TBodySum>
                </TRow>
                 <TRow>
                    <TBodyCategory><CategoryContents><ColorSquare children/>Care of children</CategoryContents></TBodyCategory>
                    <TBodySum></TBodySum>
                </TRow>
                 <TRow>
                    <TBodyCategory><CategoryContents><ColorSquare household/>Household goods</CategoryContents></TBodyCategory>
                    <TBodySum></TBodySum>
                </TRow>
                 <TRow>
                    <TBodyCategory><CategoryContents><ColorSquare education/>Education</CategoryContents></TBodyCategory>
                    <TBodySum></TBodySum>
                </TRow>
                 <TRow>
                    <TBodyCategory><CategoryContents><ColorSquare leisure/>Leisure</CategoryContents></TBodyCategory>
                    <TBodySum></TBodySum>
                </TRow>
                 <TRow>
                    <TBodyCategory><CategoryContents><ColorSquare other/>Other outlay</CategoryContents></TBodyCategory>
                    <TBodySum></TBodySum>
                </TRow>
            </tbody>
            <tfoot>
                <TFootRow>
                    <TFootCategory > Outlay</TFootCategory>
                    <TFootSum Outlay>30000.00</TFootSum>
                </TFootRow>
                <TFootRow>
                    <TFootCategory >Income</TFootCategory>
                    <TFootSum Income>230000.00</TFootSum>
                </TFootRow>
            </tfoot>
        </Table>
    </>
}

export { DiagramTable}