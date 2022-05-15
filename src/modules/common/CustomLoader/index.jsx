import styled from 'styled-components'
import {Oval} from 'react-loader-spinner'
import { vars } from 'stylesheet';

const Loader = styled.div`
    position: fixed;
    z-index: 1500;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
`

export const CustomLoader = () => {
  return (
    <Loader>
      <Oval 
      color={vars.color.accent.primary} 
      secondaryColor={vars.color.accent.seconary}
      height={100} 
      width={100} />
    </Loader>
  );
};