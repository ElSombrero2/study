import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../themes/theme';
import { Title } from './Title';

const meta = {
  title: 'Typography/Title',
  component: Title,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Title',
    args: { 
        children: 'It\'s a Title Component',
        color: Theme.colors.dark,
    },
};

export const Heading1: Story = {
    args: { 
        children: 'It\'s a Heading 1',
        heading: 'h1',
        color: Theme.colors.dark,
    },
};

export const Heading2: Story = {
    args: { 
        children: 'It\'s a Heading 2',
        heading: 'h2',
        color: Theme.colors.dark,
    },
};

export const Heading3: Story = {
    args: { 
        children: 'It\'s a Heading 3',
        heading: 'h3',
        color: Theme.colors.dark,
    },
};

export const Heading4: Story = {
    args: { 
        children: 'It\'s a Heading 4',
        heading: 'h4',
        color: Theme.colors.dark,
    },
};

export const Heading5: Story = {
    args: { 
        children: 'It\'s a Heading 5',
        heading: 'h5',
        color: Theme.colors.dark,
    },
};

export const Heading6: Story = {
    args: { 
        children: 'It\'s a Heading 6',
        heading: 'h6',
        color: Theme.colors.dark,
    },
};
