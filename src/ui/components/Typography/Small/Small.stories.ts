import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../themes/theme';
import { Small } from './Small';

const meta = {
  title: 'Typography/Small',
  component: Small,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Small>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Small',
    args: { 
        children: 'A small text description',
        color: Theme.colors.dark,
    },
};
