import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { horizonTheme } from '../src/theme/horizon-theme';

import '@fontsource-variable/open-sans';
import '@fontsource/material-icons';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    expanded: true,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      horizon: horizonTheme,
    },
    defaultTheme: 'horizon',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];
