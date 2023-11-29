declare module '@mui/material/styles' {
  interface Palette {
    horizonWhite: Palette['primary'];
    horizonText: Palette['primary'];
    horizonGray1: Palette['primary'];
    horizonGray2: Palette['primary'];
    horizonGray3: Palette['primary'];
    horizonRed: Palette['primary'];
    horizonGreen: Palette['primary'];
    horizonBlue: Palette['primary'];
    horizonDisabled: Palette['primary'];
  }

  interface PaletteOptions {
    horizonWhite?: PaletteOptions['primary'];
    horizonText?: PaletteOptions['primary'];
    horizonGray1?: PaletteOptions['primary'];
    horizonGray2?: PaletteOptions['primary'];
    horizonGray3?: PaletteOptions['primary'];
    horizonRed?: PaletteOptions['primary'];
    horizonGreen?: PaletteOptions['primary'];
    horizonBlue?: PaletteOptions['primary'];
    horizonDisabled: PaletteOptions['primary'];
  }
}

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

export {};