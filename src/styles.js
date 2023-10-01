import { createGlobalStyle } from 'styled-components';

import MontserratRegular400 from './Montserrat/static/Montserrat-Regular.ttf'
import MontserratMedium500 from './Montserrat/static/Montserrat-Medium.ttf'
import MontserratSemiBold600 from './Montserrat/static/Montserrat-SemiBold.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat-Regular-400';
    src: url(${MontserratRegular400}) format('truetype');
  }
  @font-face {
    font-family: 'Montserrat-Medium-500';
    src: url(${MontserratMedium500}) format('truetype');
  }
  @font-face {
    font-family: 'Montserrat-bold-600';
    src: url(${MontserratSemiBold600}) format('truetype');
  }
`;