import { type Components } from '@mui/material';

export const muiLink: Components['MuiLink'] = {
  styleOverrides: {
    root: {
      color: '#7DDD00',
      textDecoration: 'none',
      '&:hover': {
        color: '#7DDD0080',
      },
    },
  },
};
