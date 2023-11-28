import { type Components } from '@mui/material';

import { type horizonTheme } from '@/theme';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    title3: true;
    titleBold1: true;
    titleBold2: true;
    titleBold3: true;
    body: true;
    bodySmall: true;
    bodyLarge: true;
    bodyBold: true;
    bodyBoldSmall: true;
    bodyBoldLarge: true;
    footnote: true;
    legal: true;
    footnoteBold: true;
    legalBold: true;
    quotes: true;
    text: true;
    label: true;
    notation: true;
    help: true;
    action: true;
    code: true;
    display1: true;
    display2: true;
    display3: true;
  }
}

export const MuiTypography: Components<typeof horizonTheme>['MuiTypography'] = {
  variants: [
    {
      props: { variant: 'title1' },
      style: ({ theme }) => ({
        fontSize: 16,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 24,
        },
      }),
    },
    {
      props: { variant: 'title2' },
      style: ({ theme }) => ({
        fontSize: 22,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 26,
        },
      }),
    },
    {
      props: { variant: 'title3' },
      style: ({ theme }) => ({
        fontSize: 26,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 32,
        },
      }),
    },
    {
      props: { variant: 'titleBold1' },
      style: ({ theme }) => ({
        fontSize: 16,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 24,
        },
      }),
    },
    {
      props: { variant: 'titleBold2' },
      style: ({ theme }) => ({
        fontSize: 22,
        fontWeight: 700,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 26,
        },
      }),
    },
    {
      props: { variant: 'titleBold3' },
      style: ({ theme }) => ({
        fontSize: 26,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 32,
        },
      }),
    },
    {
      props: { variant: 'body' },
      style: ({ theme }) => ({
        fontSize: 16,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 12,
        },
      }),
    },
    {
      props: { variant: 'bodySmall' },
      style: ({ theme }) => ({
        fontSize: 14,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 12,
        },
      }),
    },
    {
      props: { variant: 'bodyLarge' },
      style: ({ theme }) => ({
        fontSize: 20,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 12,
        },
      }),
    },
    {
      props: { variant: 'bodyBold' },
      style: ({ theme }) => ({
        fontSize: 16,
        fontWeight: 700,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 16,
        },
      }),
    },
    {
      props: { variant: 'bodyBoldSmall' },
      style: ({ theme }) => ({
        fontSize: 14,
        fontWeight: 700,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 16,
        },
      }),
    },
    {
      props: { variant: 'bodyBoldLarge' },
      style: ({ theme }) => ({
        fontSize: 20,
        fontWeight: 700,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 16,
        },
      }),
    },
    {
      props: { variant: 'footnote' },
      style: ({ theme }) => ({
        fontSize: 14,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 16,
        },
      }),
    },
    {
      props: { variant: 'legal' },
      style: ({ theme }) => ({
        fontSize: 14,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 16,
        },
      }),
    },
    {
      props: { variant: 'footnoteBold' },
      style: ({ theme }) => ({
        fontSize: 14,
        fontWeight: 700,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 16,
        },
      }),
    },
    {
      props: { variant: 'legalBold' },
      style: ({ theme }) => ({
        fontSize: 14,
        fontWeight: 700,
        [theme.breakpoints.up('desktop')]: {
          fontSize: 16,
        },
      }),
    },
    {
      props: { variant: 'quotes' },
      style: () => ({
        fontSize: 16,
      }),
    },
    {
      props: { variant: 'text' },
      style: () => ({
        fontSize: 22,
      }),
    },
    {
      props: { variant: 'h1' },
      style: {
        fontSize: 26,
      },
    },
    {
      props: { variant: 'h2' },
      style: {
        fontSize: 24,
      },
    },
    {
      props: { variant: 'h3' },
      style: {
        fontSize: 22,
      },
    },
    {
      props: { variant: 'h4' },
      style: {
        fontSize: 20,
      },
    },
    {
      props: { variant: 'h5' },
      style: {
        fontSize: 18,
      },
    },
    {
      props: { variant: 'label' },
      style: {
        fontSize: 16,
      },
    },
    {
      props: { variant: 'notation' },
      style: {
        fontSize: 16,
      },
    },
    {
      props: { variant: 'help' },
      style: {
        fontSize: 16,
      },
    },
    {
      props: { variant: 'action' },
      style: {
        fontSize: 16,
      },
    },
    {
      props: { variant: 'code' },
      style: {
        fontSize: 16,
      },
    },
    {
      props: { variant: 'display1' },
      style: {
        fontSize: 84,
      },
    },
    {
      props: { variant: 'display2' },
      style: {
        fontSize: 58,
      },
    },
    {
      props: { variant: 'display3' },
      style: {
        fontSize: 42,
      },
    },
  ],
};
