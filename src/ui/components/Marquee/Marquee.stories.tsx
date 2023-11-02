import type { Meta, StoryObj } from '@storybook/react';
import { Marquee } from './Marquee';
import { Title } from '../Typography/Title/Title';
import { Theme } from '../../themes/theme';

const meta = {
  title: 'Marquee',
  component: Marquee,
  parameters: { 

  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Obj: Story = {
    name: 'Marquee',
    args: {
      children: (
          <>
              {
                  Array.from({length: 10})
                  .map((e, i) => (
                      <Title color={Theme.colors.default} key={i} heading='h1'>
                          Hello {i}
                      </Title>
                  ))
              }
          </>
      ),
      duration: 30
    },
  };

export const Default: Story = {
  args: {
    children: (
        <>
            {
                Array.from({length: 10})
                .map((e, i) => (
                    <Title color={Theme.colors.secondary} key={i} heading='h1'>
                        Hello {i}
                    </Title>
                ))
            }
        </>
    ),
    duration: 30,
    colorScheme: 'default',
  },
};

export const Primary: Story = {
    args: {
      children: (
          <>
              {
                  Array.from({length: 10})
                  .map((e, i) => (
                      <Title color={Theme.colors.default} key={i} heading='h1'>
                          Hello {i}
                      </Title>
                  ))
              }
          </>
      ),
      duration: 30,
      colorScheme: 'primary'
    },
};

export const Secondary: Story = {
    args: {
      children: (
          <>
              {
                  Array.from({length: 10})
                  .map((e, i) => (
                      <Title color={Theme.colors.default} key={i} heading='h1'>
                          Hello {i}
                      </Title>
                  ))
              }
          </>
      ),
      duration: 30,
      colorScheme: 'secondary'
    },
}

export const Danger: Story = {
    args: {
      children: (
          <>
              {
                  Array.from({length: 10})
                  .map((e, i) => (
                      <Title color={Theme.colors.default} key={i} heading='h1'>
                          Hello {i}
                      </Title>
                  ))
              }
          </>
      ),
      duration: 30,
      colorScheme: 'danger'
    },
}

export const Success: Story = {
    args: {
      children: (
          <>
              {
                  Array.from({length: 10})
                  .map((e, i) => (
                      <Title color={Theme.colors.default} key={i} heading='h1'>
                          Hello {i}
                      </Title>
                  ))
              }
          </>
      ),
      duration: 30,
      colorScheme: 'success'
    },
}

export const Warning: Story = {
    args: {
      children: (
          <>
              {
                  Array.from({length: 10})
                  .map((e, i) => (
                      <Title color={Theme.colors.default} key={i} heading='h1'>
                          Hello {i}
                      </Title>
                  ))
              }
          </>
      ),
      duration: 30,
      colorScheme: 'warning'
    },
}

export const Dark: Story = {
    args: {
      children: (
          <>
              {
                  Array.from({length: 10})
                  .map((e, i) => (
                      <Title color={Theme.colors.default} key={i} heading='h1'>
                          Hello {i}
                      </Title>
                  ))
              }
          </>
      ),
      duration: 30,
      colorScheme: 'dark'
    },
}