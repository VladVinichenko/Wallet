import { useNavigate } from 'react-router-dom'
import notFoundImage from 'assets/images/notFound/notFoundImage.webp'
import { Button } from 'modules/common'
import styled from 'styled-components'
import { Container } from 'modules/common'

const PageWrapper = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
`

const ContainerPage = styled(Container)`
	padding: 20px 0;
`

const ImageWrapper = styled.div`
	background-image: url(${notFoundImage});
	height: 100%;
	width: 100%;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	background-color: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(50px);
`

const NotFoundPage = () => {
	const navigate = useNavigate()
	const backHome = () => {
		navigate('/')
	}
	return (
		<>
			<PageWrapper>
				<ImageWrapper>
					<ContainerPage>
						<Button onClickButton={backHome} type='button' title={'back home'} label={'back home'}>
							Back home
						</Button>
					</ContainerPage>
				</ImageWrapper>
			</PageWrapper>
		</>
	)
}

export default NotFoundPage
