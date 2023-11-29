import { createTheme } from '@mui/material';

import { breakpoints } from './breakpoints';
import { muiButton } from './mui-button';
import { muiInputBase } from './mui-input-base';
import { muiInputLabel } from './mui-input-label';
import { muiLink } from './mui-link';
import { muiOutlinedInput } from './mui-outlined-input';
import { muiTextField } from './mui-text-field';
import { muiTypography } from './mui-typography';
import { palette } from './palette';
import { typography } from './typography';

declare module '@mui/material/styles' {
  interface Palette {
    horizonWhite: Palette['primary'];
    horizonText: Palette['primary'];
    horizonGray1: Palette['primary'];
    horizonGray2: Palette['primary'];
    horizonGray3: Palette['primary'];
    horizonRed: Palette['primary'];
    horizonGreen: Palette['primary'];
    horizonBlue: Palette['primary'];
    horizonDisabled: Palette['primary'];
  }

  interface PaletteOptions {
    horizonWhite?: PaletteOptions['primary'];
    horizonText?: PaletteOptions['primary'];
    horizonGray1?: PaletteOptions['primary'];
    horizonGray2?: PaletteOptions['primary'];
    horizonGray3?: PaletteOptions['primary'];
    horizonRed?: PaletteOptions['primary'];
    horizonGreen?: PaletteOptions['primary'];
    horizonBlue?: PaletteOptions['primary'];
    horizonDisabled: PaletteOptions['primary'];
  }
}

export type HorizonTheme = typeof horizonTheme;

export const horizonTheme = createTheme({
  typography,
  palette,
  breakpoints,
  components: {
    MuiButton: muiButton,
    MuiLink: muiLink,
    MuiTypography: muiTypography,
    MuiInputBase: muiInputBase,
    MuiInputLabel: muiInputLabel,
    MuiTextField: muiTextField,
    MuiOutlinedInput: muiOutlinedInput,
  },
});
