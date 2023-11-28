import { type Theme } from '@emotion/react';
import { createTheme, type ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';

import { horizonTheme } from '@/theme';

export const overrideTheme = (theme?: ThemeOptions): Theme =>
  createTheme(deepmerge(horizonTheme, createTheme(theme)));
