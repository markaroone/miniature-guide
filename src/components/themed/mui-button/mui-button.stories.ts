import { ButtonProps } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button-themed';

const meta = {
  title: 'Button/Themed',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: [
        'contained',
        'outlined',
        'text',
        'horizonPrimary',
      ] as ButtonProps['variant'][],
      description: 'The variant of the component.',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'horizonPrimary',
    children: 'Primary Button',
  },
};
