import type { Meta, StoryObj } from '@storybook/react';

import { CustomTypography } from './mui-typography';

const meta = {
  title: 'MUI/Typography',
  component: CustomTypography,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  }
} satisfies Meta<typeof CustomTypography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const title1: Story = {
  args: {
    children: 'Title 1',
    variant: "title1"
  },
};

export const title1Bold: Story = {
  args: {
    children: 'Title 1',
    variant: "title1",
    weight: "bold"
  },
};

export const title2: Story = {
  args: {
    children: 'Title 2',
    variant: "title2",
  },
};

export const title2Bold: Story = {
  args: {
    children: 'Title 2',
    variant: "title2",
    fontWeight: 700
  },
};

export const title3: Story = {
  args: {
    children: 'Title 3',
    variant: "title3"
  },
};

export const title3Bold: Story = {
  args: {
    children: 'Title 3',
    variant: "title3",
    fontWeight: 700
  },
};

export const body: Story = {
  args: {
    children: 'Body',
    variant: "body"
  },
};

export const bodyBold: Story = {
  args: {
    children: 'Body',
    variant: "body",
    fontWeight: 700
  },
};

export const bodySmall: Story = {
  args: {
    children: 'Body Small',
    variant: "bodySmall"
  },
};

export const bodyBoldSmall: Story = {
  args: {
    children: 'Body Small',
    variant: "bodySmall",
    fontWeight: 700
  },
};

export const bodyLarge: Story = {
  args: {
    children: 'Body Large',
    variant: "bodyLarge"
  },
};

export const bodyBoldLarge: Story = {
  args: {
    children: 'Body Large',
    variant: "bodyLarge",
    fontWeight: 700
  },
};

export const footnote: Story = {
  args: {
    children: 'Footnote',
    variant: "footnote"
  },
};

export const footnoteBold: Story = {
  args: {
    children: 'Footnote',
    variant: "footnote",
    fontWeight: 700
  },
};

export const legal: Story = {
  args: {
    children: 'Legal',
    variant: "legal"
  },
};

export const legalBold: Story = {
  args: {
    children: 'Legal',
    variant: "legal",
    fontWeight: 700
  },
};

export const quotes: Story = {
  args: {
    children: 'The quick brown fox jumped over the lazy dog',
    variant: "quotes",
    fontWeight: 700
  },
};

export const label: Story = {
  args: {
    children: 'The quick brown fox jumped over the lazy dog',
    variant: "label"
  },
};

export const notation: Story = {
  args: {
    children: 'The quick brown fox jumped over the lazy dog',
    variant: "notation"
  },
};

export const help: Story = {
  args: {
    children: 'The quick brown fox jumped over the lazy dog',
    variant: "help"
  },
};

export const action: Story = {
  args: {
    children: 'The quick brown fox jumped over the lazy dog',
    variant: "quotes"
  },
};

export const code: Story = {
  args: {
    children: 'The quick brown fox jumped over the lazy dog',
    variant: "code"
  },
};

export const display1: Story = {
  args: {
    children: 'The quick brown fox jumped over the lazy dog',
    variant: "display1"
  },
};

export const display2: Story = {
  args: {
    children: 'The quick brown fox jumped over the lazy dog',
    variant: "display2"
  },
};

export const display3: Story = {
  args: {
    children: 'The quick brown fox jumped over the lazy dog',
    variant: "display3"
  },
};
