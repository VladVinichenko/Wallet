import styled from 'styled-components'
import { RotatingLines } from 'react-loader-spinner'
import { vars } from 'stylesheet'

const Loader = styled.div`
	position: ${(props) => (props.inBlock ? 'absolute' : 'fixed')};
	z-index: 1500;
	top: 50%;
	left: 50%;

	transform: translate(-50%, -50%);
`

export const CustomLoader = ({ inBlock, size, color }) => {
	return (
		<Loader inBlock={inBlock}>
			<RotatingLines
				strokeColor={color ? color : (props) => props.theme.color.accent.primary}
				width={size ? size : 100}
			/>
		</Loader>
	)
}
