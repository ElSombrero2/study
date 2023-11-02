import type { Meta, StoryObj } from '@storybook/react';
import { Status } from './Status';

const meta = {
  title: 'Status',
  component: Status,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Status>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Status',
    args: {
        colorScheme: 'primary',
        animated: true,
    },
};
