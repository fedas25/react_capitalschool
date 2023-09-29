import React from 'react';
import ReactDOM from 'react-dom/client';

import GlobalFonts from './styles';
import App from './app'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalFonts/>
    <App/>
  </React.StrictMode>
);
