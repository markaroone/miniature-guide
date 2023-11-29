import { TextField } from '@mui/material';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('TextField', () => {
  it('should be rendered and have value.', () => {
    render(<TextField value="Test value" />);

    const textFieldValue = screen.getByDisplayValue('Test value');

    expect(textFieldValue).toBeInTheDocument();
  });
});
