import { ThemeProvider } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { horizonTheme } from '@/theme';

import { PrimaryButton } from '.';

describe('Button component', () => {
  it('Button should render correctly', () => {
    render(
      <ThemeProvider theme={horizonTheme}>
        <PrimaryButton />
      </ThemeProvider>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
