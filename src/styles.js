import { createGlobalStyle } from 'styled-components';

import MontserratItalic from './Montserrat/static/Montserrat-Regular.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratItalic}) format('truetype');
  }
`;