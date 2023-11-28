import type { Meta, StoryObj } from '@storybook/react';

import { TextField } from './mui-outlined-input.themed';

const meta = {
  title: 'MUI/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    value: '',
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    value: '',
    error: true,
    helperText: 'Helper Text',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    value: 'Value',
    disabled: true,
  },
};
