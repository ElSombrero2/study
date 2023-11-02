import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta = {
  title: 'Typography/Link',
  component: Link,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    name: 'Link',
    args: { 
        children: 'redirect me',
        colorScheme: 'primary',
        href: '/',
    },
};

export const Basic: Story = {
    name: 'Default',
    args: { 
        children: 'redirect me',
        colorScheme: 'default',
        href: '/',
    },
};

export const Primary: Story = {
    args: { 
        children: 'redirect me',
        colorScheme: 'primary',
        href: '/',
    },
};

export const Secondary: Story = {
    args: { 
        children: 'redirect me',
        colorScheme: 'secondary',
        href: '/',
    },
};

export const Warning: Story = {
    args: { 
        children: 'redirect me',
        colorScheme: 'warning',
        href: '/',
    },
};

export const Danger: Story = {
    args: { 
        children: 'redirect me',
        colorScheme: 'danger',
        href: '/',
    },
};

export const Success: Story = {
    args: { 
        children: 'redirect me',
        colorScheme: 'success',
        href: '/',
    },
};

export const Dark: Story = {
    args: { 
        children: 'redirect me',
        colorScheme: 'dark',
        href: '/',
    },
};

