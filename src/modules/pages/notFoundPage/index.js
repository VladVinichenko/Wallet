import { NotFound } from 'modules/components'
import { Container } from 'modules/common'
import styled from 'styled-components'

const ImageWrapper = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 1000;
`

export const NotFoundPage = () => {
	return (
		<div>
			<NotFound />
		</div>
	)
}
