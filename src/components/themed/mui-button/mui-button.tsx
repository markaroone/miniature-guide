import { Components } from '@mui/material';
import { horizonTheme } from '@/theme';

export const MuiButton: Components<typeof horizonTheme>['MuiButton'] = {
  variants: [
    {
      props: {
        variant: 'horizonPrimary',
      },
      style: ({ theme }) => ({
        backgroundColor: '#0099FF',
        color: theme.palette.horizonBlue.main,
        '&:hover': {
          backgroundColor: '#6C8AA3',
        },
        '&.Mui-disabled': {
          background: '#EAEAEA',
          color: '#C0C0C0',
        },
      }),
    },
  ],
  styleOverrides: {
    root: ({ theme }) => ({
      textTransform: 'capitalize',
      height: 40,
      backgroundColor: theme.palette.horizonBlue.main,
    }),
  },
};
