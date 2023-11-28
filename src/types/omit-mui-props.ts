import { StyledComponent } from '@emotion/styled';

export type OmitMUIProps<
  Component,
  Props extends PropertyKey,
> = Component extends StyledComponent<infer P, infer S, infer J>
  ? StyledComponent<Omit<P, Props>, S, J>
  : never;
