import { type ReactElement } from 'react';

import { Typography, type TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export type PrimaryTypographyProps = TypographyProps & {
  weight?: 'light' | 'regular' | 'semibold' | 'bold';
};

const MuiTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'color',
})<PrimaryTypographyProps>(({ weight }) => ({
  fontWeight:
    weight === 'light'
      ? 300
      : weight === 'bold'
        ? 700
        : weight === 'semibold'
          ? 600
          : '400',
  // backgroundColor: theme.palette.primary.main,
  // '&:hover': {
  //   backgroundColor: '#6C8AA3',
  // },
  // '&.Mui-disabled': {
  //   backgroundColor: `${theme.palette.primary.main}20`,
  //   color: '#FFFFFF',
  // },
}));

export const CustomTypography = (
  props: PrimaryTypographyProps
): ReactElement => <MuiTypography weight={'regular'} {...props} />;
