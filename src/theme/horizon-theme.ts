import { createTheme } from '@mui/material';

import * as Themed from '@/components/themed';
import { MuiTextField } from '@/components/themed/mui-text-field';

import { breakpoints } from './breakpoints';
import { muiOutlinedInput } from './mui-outlined-input';
import { muiTypography } from './mui-typography';
import { palette } from './palette';
import { typography } from './typography';

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
