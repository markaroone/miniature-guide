import { type Components } from '@mui/material';

import { type HorizonTheme } from '@/theme';

export const MuiInputLabel: Components<HorizonTheme>['MuiInputLabel'] = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontSize: 14,
      top: '-5.5px',
      '&.MuiInputLabel-shrink': {
        top: '1px',
      },
      '&.Mui-focused': {
        color: theme.palette.text.primary,
        '&.Mui-error': {
          color: theme.palette.error.main,
        },
      },
    }),
  },
};
