import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../themes/theme';
import { Strong } from './Strong';

const meta = {
  title: 'Typography/Strong',
  component: Strong,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Strong>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Strong',
    args: { 
        children: 'It\'s a strong paragraph',
        color: Theme.colors.dark,
    },
};
