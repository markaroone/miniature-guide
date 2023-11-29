import { type ThemeOptions } from '@mui/material';

import { colors } from './colors';

export const palette: ThemeOptions['palette'] = {
  text: {
    primary: colors[5],
  },
  action: {
    hover: colors[3],
    active: colors[3],
    focus: colors[3],
    disabled: colors[8],
  },
  horizonWhite: {
    main: colors[0],
  },
  horizonText: {
    main: colors[5],
  },
  horizonGray1: {
    main: colors[6],
  },
  horizonGray2: {
    main: colors[7],
  },
  horizonGray3: {
    main: colors[1],
  },
  horizonRed: {
    main: colors[2],
  },
  horizonGreen: {
    main: colors[4],
  },
  horizonBlue: {
    main: colors[3],
  },
  horizonDisabled: {
    main: colors[8],
  },
  // * FOR TEST
  primary: {
    main: colors[3],
  },
  secondary: {
    main: colors[4],
  },
};
