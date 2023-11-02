import { render, screen } from '@testing-library/react'
import { Block } from './Block'  

describe('Block', () => {
    it('should be rendered and contains d-block class', () => {
        render(<Block data-testid="block" />)

        const block = screen.getByTestId('block')

        expect(block).toBeDefined()
        expect(block.className).toContain('d-block')
    })

    it('should render children', () => {
        const text = 'Hello World'

        render(
            <Block data-testid="block">
                <h1>{text}</h1>
            </Block>
        )

        const title = screen.getByText(text)

        expect(title).toBeDefined()
    })

    it('should take the display props', () => {
        render(<Block data-testid="block" display="hide-on-xl" />)

        const block = screen.getByTestId('block')

        expect(block.className).toContain('hide-on-xl')
    })

    it('should take the className and styles passes in props', () => {
        render(
            <Block data-testid="block" className="my-block" />
        )

        const block = screen.getByTestId('block')

        expect(block.className).toContain('my-block')
    })
})