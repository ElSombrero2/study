import { render, screen } from '@testing-library/react'
import { Flex } from './Flex'

describe('Flex', () => {
    it('should be rendered and contains d-flex class', () => {
        render(<Flex data-testid="flex" />)

        const flex = screen.getByTestId('flex')

        expect(flex).toBeDefined()
        expect(flex.className).toContain('d-flex')
    })

    it('should render children', () => {
        const text = 'Hello World'

        render(
            <Flex data-testid="flex">
                <h1>{text}</h1>
            </Flex>
        )

        const title = screen.getByText(text)

        expect(title).toBeDefined()
    })

    it('should take the display props', () => {
        render(<Flex data-testid="flex" display="hide-on-xl" />)

        const flex = screen.getByTestId('flex')

        expect(flex.className).toContain('hide-on-xl')
    })

    it('should pass flex property to style', () => {
        render(
            <Flex data-testid="flex" justifyContent="center" alignItems="center" flexDirection="column" flexWrap="wrap" gap={60} />
        )

        const flex = screen.getByTestId('flex')

        expect(flex.style).toHaveProperty('justifyContent', 'center')
        expect(flex.style).toHaveProperty('flexDirection', 'column')
        expect(flex.style).toHaveProperty('alignItems', 'center')
        expect(flex.style).toHaveProperty('flexWrap', 'wrap')
        expect(flex.style).toHaveProperty('gap', '60px')
    })

    it('should take the className and styles passes in props', () => {
        render(
            <Flex data-testid="flex" className="my-flex" />
        )

        const flex = screen.getByTestId('flex')

        expect(flex.className).toContain('my-flex')
    })
})