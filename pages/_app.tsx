import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';

import { getCookie, setCookie } from 'cookies-next';
import { useHotkeys } from '@mantine/hooks';
/**
 * @param {AppProps} props The Component and Page props.
 * @return {JSX.Element}
 */
function MyApp(props: AppProps & { colorScheme: ColorScheme }): JSX.Element {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = React.useState<ColorScheme>(
    props.colorScheme,
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, {
      maxAge: 30 * 24 * 60 * 60,
    });
  };

  useHotkeys([
    ['mod+J', () => toggleColorScheme()],
    ['ctrl+K', () => console.log('Trigger search')],
    ['/', () => console.log('Trigger search')],
  ]);

  // Check cookie on mount for color scheme
  useEffect(() => {
    const cookie = getCookie('mantine-color-scheme');
    if (cookie) {
      setColorScheme(cookie as ColorScheme);
    }
  }, []);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ colorScheme, primaryColor: 'cyan' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Component {...pageProps} />;
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
