import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../../../themes/theme';
import { Row } from './Row';
import { Column } from './Column/Column';
import { Flex } from '../Flex/Flex';

const meta = {
  title: 'Containers/Grid System',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

const style = {
    border: `1px solid ${Theme.colors.dark}`,
    color: Theme.colors.dark,
    padding: '20px 50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export const Default: Story = {
    name: 'Rows',
    args: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        children: (
            <>
                <Row>
                    <Column col={12} style={style}>
                        <h5>Column 12</h5>
                    </Column>
                </Row>

                <Row>
                    <Column col={11} style={style}>
                        <h5>Column 11</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                </Row>

                <Row>
                    <Column col={10} style={style}>
                        <h5>Column 10</h5>
                    </Column>
                    <Column col={2} style={style}>
                        <h5>Column 2</h5>
                    </Column>
                </Row>

                <Row>
                    <Column col={9} style={style}>
                        <h5>Column 9</h5>
                    </Column>
                    <Column col={3} style={style}>
                        <h5>Column 3</h5>
                    </Column>
                </Row>

                <Row>
                    <Column col={8} style={style}>
                        <h5>Column 8</h5>
                    </Column>
                    <Column col={4} style={style}>
                        <h5>Column 4</h5>
                    </Column>
                </Row>

                <Row>
                    <Column col={7} style={style}>
                        <h5>Column 7</h5>
                    </Column>
                    <Column col={5} style={style}>
                        <h5>Column 5</h5>
                    </Column>
                </Row>

                <Row>
                    <Column col={6} style={style}>
                        <h5>Column 6</h5>
                    </Column>
                    <Column col={6} style={style}>
                        <h5>Column 6</h5>
                    </Column>
                </Row>

                <Row>
                    <Column col={5} style={style}>
                        <h5>Column 5</h5>
                    </Column>
                    <Column col={5} style={style}>
                        <h5>Column 5</h5>
                    </Column>
                    <Column col={2} style={style}>
                        <h5>Column 2</h5>
                    </Column>
                </Row>

                <Row>
                    <Column col={4} style={style}>
                        <h5>Column 4</h5>
                    </Column>
                    <Column col={4} style={style}>
                        <h5>Column 4</h5>
                    </Column>
                    <Column col={4} style={style}>
                        <h5>Column 4</h5>
                    </Column>
                </Row>

                <Row>
                    <Column col={3} style={style}>
                        <h5>Column 3</h5>
                    </Column>
                    <Column col={3} style={style}>
                        <h5>Column 3</h5>
                    </Column>
                    <Column col={3} style={style}>
                        <h5>Column 3</h5>
                    </Column>
                    <Column col={3} style={style}>
                        <h5>Column 3</h5>
                    </Column>
                </Row>

                <Row>
                    <Column col={2} style={style}>
                        <h5>Column 2</h5>
                    </Column>
                    <Column col={2} style={style}>
                        <h5>Column 2</h5>
                    </Column>
                    <Column col={2} style={style}>
                        <h5>Column 2</h5>
                    </Column>
                    <Column col={2} style={style}>
                        <h5>Column 2</h5>
                    </Column>
                    <Column col={2} style={style}>
                        <h5>Column 2</h5>
                    </Column>
                    <Column col={2} style={style}>
                        <h5>Column 2</h5>
                    </Column>
                </Row>

                <Row>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                </Row>
            </>
        ),
    },
};

export const Auto: Story = {
    args: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        children: (
            <>
                <Row gap={20}>
                    <Column style={style}>
                        <h5>Column Auto</h5>
                    </Column>
                    <Column style={style}>
                        <h5>Column Auto</h5>
                    </Column>
                    <Column style={style}>
                        <h5>Column Auto</h5>
                    </Column>
                    <Column style={style}>
                        <h5>Column Auto</h5>
                    </Column>
                    <Column style={style}>
                        <h5>Column Auto</h5>
                    </Column>
                </Row>

                <Row gap={20}>
                    <Column col={6} style={style}>
                        <h5>Column 6</h5>
                    </Column>
                    <Column style={style}>
                        <h5>Column Auto</h5>
                    </Column>
                </Row>

                <Row gap={20}>
                    <Column col={6} style={style}>
                        <h5>Column 6</h5>
                    </Column>
                    <Column col={3} style={style}>
                        <h5>Column 3</h5>
                    </Column>
                    <Column style={style}>
                        <h5>Column Auto</h5>
                    </Column>
                </Row>

                <Row gap={20}>
                    <Column col={9} style={style}>
                        <h5>Column 9</h5>
                    </Column>
                    <Column col={1} style={style}>
                        <h5>Column 1</h5>
                    </Column>
                    <Column style={style}>
                        <h5>Column Auto</h5>
                    </Column>
                </Row>
            </>
        ),
    },
};

export const Responsive: Story = {
    args: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        children: (
            <>
                <Row gap={20}>
                    <Column col={6} md={12} style={style}>
                        <h5>Column 6 / Column Medium 12</h5>
                    </Column>
                    <Column md={12} style={style}>
                        <h5>Column Auto / Column Medium 12</h5>
                    </Column>
                </Row>

                <Row gap={20}>
                    <Column col={4} md={6} sm={12} style={style}>
                        <h5>Column 4 / Column Medium 6 / Column Small 12</h5>
                    </Column>
                    <Column col={4} md="auto" sm={12} style={style}>
                        <h5>Column 4 / Column Auto / Column Small 12</h5>
                    </Column>
                    <Column md={12} style={style}>
                        <h5>Column Auto / Column Medium 12</h5>
                    </Column>
                </Row>

                <Row gap={20}>
                    <Column col={12} md={4} sm={12} style={style}>
                        <h5>Column 12 / Column Medium 4 / Column Small 12</h5>
                    </Column>
                    <Column col={12} md={4} sm={12} style={style}>
                        <h5>Column 12 / Column 4 / Column Small 12</h5>
                    </Column>
                    <Column col={12} md="auto" sm={12} style={style}>
                        <h5>Column 12 / Medium Auto / Column Small 12</h5>
                    </Column>
                </Row>
            </>
        ),
    },
};

