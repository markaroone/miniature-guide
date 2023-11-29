import { type ReactElement } from 'react';

import { Button, type ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

export type PrimaryButtonPropsToOmit = 'color' | 'size';

export type PrimaryButtonProps = Omit<ButtonProps, PrimaryButtonPropsToOmit>;

const MuiButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'color',
})<PrimaryButtonProps>(() => ({
  // color: '#FFFFFF',
  // backgroundColor: theme.palette.primary.main,
  // '&:hover': {
  //   backgroundColor: '#6C8AA3',
  // },
  // '&.Mui-disabled': {
  //   backgroundColor: `${theme.palette.primary.main}20`,
  //   color: '#FFFFFF',
  // },
}));

export const PrimaryButton = (props: ButtonProps): ReactElement => (
  <MuiButton disableElevation {...props} />
);
