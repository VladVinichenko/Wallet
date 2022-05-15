import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { vars } from 'stylesheet'
import { sprite } from 'assets'

const Nav = styled.ul`
    display: flex;
    width: 100%;
    background-color: light-grey;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 44px;
    height: 44px;
`

const StyledLink = styled(NavLink)`
    display: flex;
    align-items: center;
    box-sizing: border-box;

    cursor: pointer;

    transition: all ${vars.animation.duration} ${vars.animation.function};

    &:hover,
    &:focus,
    &.${props => props.activeClassName} {
        & div {
            fill: ${vars.color.accent.seconary};
            background-color: ${vars.color.background.primary};
            filter: ${vars.filter.navigationFilter};
        }
    }

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        /* margin-left: 12px; */
    } 
`

const Wrapper = styled.div`
    width: 38px;
    height: 38px;

    fill: ${vars.color.accent.fourth};
    background-color: transparent;
    filter: none;

    border-radius: ${vars.borderRadius.fifth};

    /* transition: all ${vars.animation.duration} ${vars.animation.function}; */
`

const Svg = styled.svg`
    width: 38px;
    height: 38px;

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        /* margin-right: 8px; */
    }
`

const Label = styled.p`
    display: none;
`

export const Navigation = () => {
    const name = 'Bayraktar Javelin'
    return (
        <Nav>
            <Item>
                <StyledLink to='/' activeClassName="active">
                    <Wrapper>
                        <Svg width="18" height="18">
                            <use href={`${sprite}#icon-home`} ></use>
                        </Svg>
                    </Wrapper>
                    <Label>Home</Label>
                </StyledLink>
            </Item>
            <Item>
                <StyledLink to='/diagram' activeClassName="active">
                    <Wrapper>
                        <Svg width="18" height="18">
                            <use href={`${sprite}#icon-statistic`} ></use>
                        </Svg>
                    </Wrapper>
                    <Label>Statistic</Label>
                </StyledLink>
            </Item>
            <Item>
                <StyledLink to='/currency' activeClassName="active">
                    <Wrapper>
                        <Svg width="18" height="18">
                            <use href={`${sprite}#icon-currency`} ></use>
                        </Svg>
                    </Wrapper>
                </StyledLink>
            </Item>
        </Nav>
    );
}
