import { type ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: false; // adds the `mobile` breakpoint
    tablet: true;
    laptop: false;
    desktop: true;
  }
}

export const breakpoints: ThemeOptions['breakpoints'] = {
  values: {
    tablet: 774,
    desktop: 1140,
  },
};
