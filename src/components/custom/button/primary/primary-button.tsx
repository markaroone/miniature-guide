import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';

type PrimaryButtonPropsToOmit = 'variant' | 'color';

export type PrimaryButtonProps = Omit<ButtonProps, PrimaryButtonPropsToOmit>;

const InitPrimaryButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'color',
})<PrimaryButtonProps>(({ theme }) => ({
  color: '#FFF',
  backgroundColor: theme.palette.horizonGray1.main,
  '&:hover': {
    backgroundColor: '#6C8AA3',
  },
  '&.Mui-disabled': {
    background: '#EAEAEA',
    color: '#C0C0C0',
  },
}));

export const PrimaryButton = (props: PrimaryButtonProps) => (
  <InitPrimaryButton {...props} />
);
