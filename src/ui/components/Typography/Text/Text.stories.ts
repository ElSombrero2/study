import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../themes/theme';
import { Text } from './Text';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Text',
    args: { 
        children: 'It\'s a text paragraph',
        color: Theme.colors.dark,
    },
};
