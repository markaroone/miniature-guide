import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './mui-footer';

const meta = {
  title: 'Custom/Footer',
  component: Footer,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: `ChangeGPS Pty Ltd © ${new Date().getFullYear()}`,
    data: [
      {
        label: "Terms of Use",
        link: "Link Here"
      },
      {
        label: "Privacy Policy",
        link: "Link Here"
      },
      {
        label: "Security & Compliance",
        link: "Link Here"
      },
    ]
  },
};
