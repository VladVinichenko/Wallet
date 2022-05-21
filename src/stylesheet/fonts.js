import { createGlobalStyle } from 'styled-components'
import CirceRegular from '../assets/fonts/Circe-Regular.otf'
import CirceBold from '../assets/fonts/Circe-Bold.otf'
import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf'
import PoppinsMedium from '../assets/fonts/Poppins-Medium.ttf'
import PoppinsSemiBold from '../assets/fonts/Poppins-SemiBold.ttf'
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf'
import Segoeui from '../assets/fonts/segoeui.ttf'
import Segoeuib from '../assets/fonts/segoeuib.ttf'

export const Fonts = createGlobalStyle`
@font-face {
  font-family: 'Circe';
  src: url(${CirceRegular}) format('opentype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Circe';
  src: url(${CirceBold}) format('opentype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsRegular}) format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsMedium}) format('truetype');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsSemiBold}) format('truetype');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Poppins';
  src: url(${PoppinsBold}) format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI';
  src: url(${Segoeui}) format('truetype');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Segoe UI';
  src: url(${Segoeuib}) format('truetype');
  font-weight: 700;
  font-style: normal;
}
`
