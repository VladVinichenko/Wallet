import styled from 'styled-components'
import { sprite } from '../../../assets/images/index'

const StyledLogo = styled.div`
	margin-bottom: 60px;
`
const StyledLogoSvg = styled.svg`
	width: 120px;
	height: 30px;

	@media screen and (min-width: 768px) {
		width: 180px;
		height: 30px;
	}
`

export const LogoAuth = () => {
	return (
		<StyledLogo>
			<StyledLogoSvg>
				<use href={sprite + '#icon-logo-form'} />
			</StyledLogoSvg>
		</StyledLogo>
	)
}
