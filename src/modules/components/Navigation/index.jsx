import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { vars } from 'stylesheet'
import { sprite } from 'assets'

const Nav = styled.ul`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 0 14px;
    
    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
    }
`

const Item = styled.li`
    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        display: ${props=>props.visib};
        
       &:not(:first-child) {
           margin-top: 12px;
       }
    }
`

const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    box-sizing: border-box;

    font-family: 'Poppins',sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;

    cursor: pointer;

    transition: all ${vars.animation.duration} ${vars.animation.function};

    &:hover,
    &:focus,
    &.${props => props.activeClassName} {        
        & div div{
            fill: ${vars.color.accent.seconary};
            background-color: ${vars.color.background.primary};
            filter: ${vars.filter.navigationFilter};
        }
    }

    &.${props => props.activeClassName} {
	        font-style: normal;
	        font-weight: 700;
	        font-size: 18px;
	        line-height: 1.5;
    }
`

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        width: 24px;
        height: 24px;
        margin-right: 20px;
    }
`

const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;

    overflow: hidden;

    fill: ${vars.color.accent.fourth};
    background-color: transparent;
    filter: none;

    border-radius: ${vars.borderRadius.fifth};

    transition: all ${vars.animation.duration} ${vars.animation.function};

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        width: 18px;
        height: 18px;

        border-radius: ${vars.borderRadius.third};
    }
`

const Svg = styled.svg`
    width: 38px;
    height: 38px;

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        width: 18px;
        height: 18px;
    }
`

const Label = styled.p`
    display: none;

    transition: all ${vars.animation.duration} ${vars.animation.function};

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        display: contents;
    }
`

export const Navigation = () => {
    const name = 'Bayraktar Javelin'
    return (
        <Nav>
            <Item>
                <StyledLink to='/' activeClassName="active">
                    <Wrapper>
                        <Background>
                            <Svg width="18" height="18">
                                <use href={`${sprite}#icon-home`} ></use>
                            </Svg>
                        </Background>
                    </Wrapper>
                    <Label>Home</Label>
                </StyledLink>
            </Item>
            <Item>
                <StyledLink to='/diagram' activeClassName="active">
                    <Wrapper>
                        <Background>
                        <Svg width="18" height="18">
                            <use href={`${sprite}#icon-statistic`} ></use>
                        </Svg>
                        </Background>
                    </Wrapper>
                    <Label>Statistic</Label>
                </StyledLink>
            </Item>
            <Item visib='none'>
                <StyledLink to='/currency' activeClassName="active">
                    <Wrapper>
                        <Background>
                        <Svg width="18" height="18">
                            <use href={`${sprite}#icon-currency`} ></use>
                        </Svg>
                        </Background>
                    </Wrapper>
                </StyledLink>
            </Item>
        </Nav>
    );
}
