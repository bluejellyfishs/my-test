import React from 'react';
import 'antd/dist/antd.css';

import { createGlobalStyle } from 'styled-components';

import { wrapper } from '../store';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Kanit', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 13px;
  }

  :root {
    font-size: 13px;
  }
`;

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default wrapper.withRedux(MyApp);
