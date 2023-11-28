import { type Components } from '@mui/material';

import { getStatePropsValue } from '@/utils';

import { type HorizonTheme } from '.';

export const muiOutlinedInput: Components<HorizonTheme>['MuiOutlinedInput'] = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      '&.MuiInputBase-multiline': {
        height: 'unset',
      },
      '& fieldset': {
        borderColor: theme.palette.horizonGray3.main,
        borderWidth: '1.5px',
      },
      '&&:hover fieldset': {
        borderColor: getStatePropsValue(ownerState, {
          disabled: 'text.disabled',
          error: theme.palette.error.main,
          default: theme.palette.horizonBlue.main,
        }),
      },
      '&&.Mui-focused fieldset': {
        borderColor: theme.palette.horizonBlue.main,
        borderWidth: '1.5px',
      },
      '&.Mui-focused': {
        '&.Mui-disabled fieldset': {
          borderColor: 'text.disabled',
        },
        '&.Mui-error fieldset': {
          borderColor: theme.palette.error.main,
          borderWidth: '1.5px',
        },
      },
    }),
    input: ({ ownerState, theme }) => ({
      '&::placeholder': {
        color: theme.palette.horizonGray1.main,
      },
      color: getStatePropsValue(ownerState, {
        disabled: 'text.disabled',
        error: theme.palette.error.main,
        default: theme.palette.text.primary,
      }),
    }),
  },
};
