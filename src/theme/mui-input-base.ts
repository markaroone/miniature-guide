import { type Components } from '@mui/material';

export const muiInputBase: Components['MuiInputBase'] = {
  defaultProps: {
    autoComplete: 'off',
  },
  styleOverrides: {
    root: {
      fontSize: 14,
      height: 40,
    },
  },
};
