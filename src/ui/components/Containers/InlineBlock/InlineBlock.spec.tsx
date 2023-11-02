import { render, screen } from '@testing-library/react'
import { InlineBlock } from './InlineBlock'

describe('InlineBlock', () => {
    it('should be rendered and contains d-inline-block class', () => {
        render(<InlineBlock data-testid="inline-block" />)

        const inlineBlock = screen.getByTestId('inline-block')

        expect(inlineBlock).toBeDefined()
        expect(inlineBlock.className).toContain('d-inline-block')
    })

    it('should render children', () => {
        const text = 'Hello World'

        render(
            <InlineBlock>
                <h1>{text}</h1>
            </InlineBlock>
        )

        const title = screen.getByText(text)

        expect(title).toBeDefined()
    })

    it('should take the display props', () => {
        render(<InlineBlock data-testid="inline-block" display="hide-on-xl" />)

        const inlineBlock = screen.getByTestId('inline-block')

        expect(inlineBlock.className).toContain('hide-on-xl')
    })

    it('should take the className and styles passes in props', () => {
        render(
            <InlineBlock data-testid="inline-block" className="my-block" />
        )

        const inlineBlock = screen.getByTestId('inline-block')

        expect(inlineBlock.className).toContain('my-block')
    })
})