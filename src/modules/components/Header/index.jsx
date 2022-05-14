import styled from 'styled-components'
import { vars } from 'stylesheet'
import { Container } from 'modules/common'
import { Logo } from 'modules/common'
import { sprite } from 'assets'

const Head = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1100;
    padding-top: 15px;
    padding-bottom: 15px;

    background-color: ${vars.color.background.primary};

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        padding-top: 20px;
        padding-bottom: 20px;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-height: 60px;
    overflow: hidden;

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        max-height: 80px;
    }
`

const Menu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Name = styled.span`
    display: block;
    margin-right: 8px;
    margin-left: 12px;
    max-width: calc(100vw - 200px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    text-align: right;

    color: ${vars.color.font.third};

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        position: relative;
        margin-right: 0;
        padding-right: 12px;

        &::after {
            content: "";
            position: absolute;
            top: -1.5px;
            right: 0;
            width: 1px;
            height: 30px;
            background-color: ${vars.color.font.third};
        }
    }
`

const ExitButton = styled.button`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 100%;
    padding: 0;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;

    color: ${vars.color.font.third};
    fill: ${vars.color.font.third};

    background-color: transparent;

    border: 0;

    cursor: pointer;

    transition: all $transition-duration $timing-function;

    &:hover,
    &:focus {
        color: ${vars.color.font.negative};
        fill: ${vars.color.font.negative};
    }

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        margin-left: 12px;
    }
`
const ButtonSvg = styled.svg`
    width: 18px;
    height: 18px;

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        margin-right: 8px;
    }
`

const ButtonLabel = styled.span`
    display: none;

    @media screen and (min-width: ${vars.breakpoints.tablet}) {
        display: contents;
    }
`

export const Header = ({ openModal }) => {
    const name = 'Bayraktar Javelin'
    return (
        <Head>
            <Container>
                <HeaderContainer>
                    <Logo />
                    <Menu>
                        <Name>{name}</Name>
                        <ExitButton
                            onClick={openModal}
                            type="button"
                            arial-label="Log out">
                            <ButtonSvg width="18" height="18">
                                <use href={`${sprite}#icon-exit`} ></use>
                            </ButtonSvg>
                            <ButtonLabel>Log out</ButtonLabel>
                        </ExitButton>
                    </Menu>
                </HeaderContainer>
            </Container>
        </Head>
    );
}

