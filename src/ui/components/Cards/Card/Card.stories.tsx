import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../../Typography/Text/Text';
import { Theme } from '../../../themes/theme';

const meta = {
  title: 'Cards/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Card',
    args: {
        children: (
            <Text color={Theme.colors.white}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ratione placeat earum animi quaerat? Blanditiis amet quis id eveniet? Corporis libero iste repudiandae, vel sapiente illum vero consequatur a atque!
            </Text>
        ),
        width: 350,
    },
};
