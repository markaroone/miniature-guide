import { createTheme } from '@mui/material';

import * as Themed from '@/components/themed';
import { MuiTextField } from '@/components/themed/mui-text-field';

import { breakpoints } from './breakpoints';
import { muiOutlinedInput } from './mui-outlined-input';
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
    MuiButton: Themed.MuiButton,
    MuiLink: Themed.MuiLink,
    MuiTypography: muiTypography,
    MuiInputBase: Themed.MuiInputBase,
    MuiInputLabel: Themed.MuiInputLabel,
    MuiTextField,
    MuiOutlinedInput: muiOutlinedInput,
  },
});
