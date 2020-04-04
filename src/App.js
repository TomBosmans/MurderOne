import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Layout from './components/Layout';
import { AudioContextProvider } from './audioContext';

export default () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
	  primary: { main: '#dd2c00' },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <AudioContextProvider>
        <Layout> hallo world </Layout>
      </AudioContextProvider>
    </ThemeProvider>
  );
}
