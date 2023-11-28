import { Components } from '@mui/material';
import { horizonTheme } from '@/theme';

export const MuiButton: Components<typeof horizonTheme>['MuiButton'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: ({ theme }: any) => ({
      borderRadius: 8,
      textTransform: 'capitalize',
      '&.MuiButton-contained': {
        '&:hover': {
          backgroundColor: theme.palette.horizonGray1.main,
        },
        '&.Mui-disabled': {
          backgroundColor: `${theme.palette.horizonBlue.main}30`,
          color: theme.palette.horizonWhite.main,
        },
      },
      '&.MuiButton-outlined': {
        color: 'black',
        border: '1px solid black',
        '&:hover': {
          color: theme.palette.horizonBlue.main,
          border: `1px solid ${theme.palette.horizonBlue.main}`,
        },
        '&.Mui-disabled': {
          border: '1px solid #00000020',
          color: '#00000020',
        },
      },
    }),
  },
};
