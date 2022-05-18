import styled from 'styled-components'
import { sprite } from '../../../assets/images/index'

const StyledLogoSvg = styled.svg`
	display: block;
	width: 120px;
	height: 30px;
	margin-bottom: 60px;
	@media screen and (min-width: 768px) {
		width: 180px;
		height: 30px;
	}
`

export const LogoAuth = () => {
	return (
		<StyledLogoSvg>
			<use href={sprite + '#icon-logo-form'} />
		</StyledLogoSvg>
	)
}
