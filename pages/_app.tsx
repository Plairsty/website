import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';

import { setCookie } from 'cookies-next';
/**
 * @param {AppProps} props The Component and Page props.
 * @return {JSX.Element}
 */
function MyApp(props: AppProps & { colorScheme: ColorScheme }): JSX.Element {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(
    props.colorScheme,
  );

  const toogleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, {
      maxAge: 30 * 24 * 60 * 60,
    });
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toogleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Component {...pageProps} />;
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
