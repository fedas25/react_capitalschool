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

  ::placeholder { 
    color: #BCBCC5; 
  }

/*minireset*/
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select {
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

img,
video {
  height: auto;
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

input {
  overflow: visible;
}

textarea {
  overflow: auto;
}

[type="checkbox"],[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}

[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}
`;