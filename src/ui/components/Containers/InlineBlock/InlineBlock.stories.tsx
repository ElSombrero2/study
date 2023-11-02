import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../themes/theme';
import { InlineBlock } from './InlineBlock';
import { Block } from '../Block/Block';

const meta = {
  title: 'Containers/InlineBlock',
  component: InlineBlock,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Block>;

export default meta;
type Story = StoryObj<typeof meta>;

const style = {
    border: `1px solid ${Theme.colors.dark}`,
    color: Theme.colors.dark,
    padding: '10px',
    margin: '10px'
}

export const Default: Story = {
    name: 'Inline Block',
    args: {
        children: (
            <>
                <InlineBlock style={style}>
                    <h5>First Block</h5>
                </InlineBlock>
                <InlineBlock style={style}>
                    <h5>Second Block</h5>
                </InlineBlock>
            </>
        ),
    },
};
