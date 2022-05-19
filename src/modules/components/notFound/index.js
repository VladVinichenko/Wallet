import { Link } from 'react-router-dom'
import notFoundImage from 'assets/images/notFound/notFoundImage.webp'
import styled from 'styled-components'
import { vars } from 'stylesheet'

const StyledLink = styled(Link)`
	position: absolute;
	z-index: 1;
	font-family: 'Poppins', sans-serif;
	font-weight: 700;
	line-height: 1.5;
	cursor: pointer;
	&:hover,
	&:focus {
		color: ${vars.color.font.positive};
	}
	@media screen and (min-width: ${vars.breakpoints.mobile}) {
		font-size: 18px;
	}
	@media screen and (min-width: ${vars.breakpoints.tablet}) {
		font-size: 30px;
	}
`
const ImageWrapper = styled.div`
	position: absolute;
`

export const NotFound = () => {
	return (
		<>
			<ImageWrapper>
				<img src={notFoundImage} alt='page not found' width='100%' />
			</ImageWrapper>
			<StyledLink to='/'>back home</StyledLink>
		</>
	)
}
