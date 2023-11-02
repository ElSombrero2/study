import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../themes/theme';
import { Block } from './Block';

const meta = {
  title: 'Containers/Block',
  component: Block,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Block>;

export default meta;
type Story = StoryObj<typeof meta>;

const style = {
    border: `1px solid ${Theme.colors.dark}`,
    color: Theme.colors.dark,
    padding: '20px 50px'
}

export const Default: Story = {
    name: 'Block',
    args: {
        children: (
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Commodi modi corrupti reiciendis iste suscipit pariatur harum <br />
                nesciunt ipsa repudiandae eveniet illo nisi dolorem, culpa necessitatibus <br /> 
                temporibus tempore odio facere minus.
            </p>
        ),
        style 
    },
};
