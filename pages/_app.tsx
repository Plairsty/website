import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React from 'react';
/**
 * @param {AppProps} Component The Component
 * @return {JSX.Element}
 */
function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
