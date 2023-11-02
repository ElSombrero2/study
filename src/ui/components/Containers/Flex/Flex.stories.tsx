import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { Theme } from '../../../themes/theme';

const meta = {
  title: 'Containers/Flex',
  component: Flex,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

const styles = {
    width: '120px',
    height: '120px',
    background: Theme.colors.dark,
    color: Theme.colors.white
}

export const Default: Story = {
    name: 'Flex',
    args: {
        children: (
            <>
                {Array.from({length: 5}).map((el, index) => (
                    <Flex key={index} style={styles} justifyContent="center" alignItems="center">
                        <h5>Block {index + 1}</h5>
                    </Flex>
                ))}
            </>
        ),
        gap: 30
    },
};
