import { render, screen } from '@testing-library/react'
import { Row } from './Row'

describe('Row', () => {
    it('should be rendered', () => {
        render(<Row data-testid="row" />)

        const row = screen.getByTestId('row')

        expect(row).toBeDefined()
    })

    it('should render children', () => {
        const text = 'Hello World'

        render(
            <Row data-testid="row">
                <h1>{text}</h1>
            </Row>
        )

        const title = screen.getByText(text)

        expect(title).toBeDefined()
    })

    it('should take the display props', () => {
        render(<Row data-testid="row" display="hide-on-xl" />)

        const row = screen.getByTestId('row')

        expect(row.className).toContain('hide-on-xl')
    })

    it('should pass row property to style', () => {
        render(
            <Row data-testid="row" gap={60} />
        )

        const row = screen.getByTestId('row')

        expect(row.style).toHaveProperty('gap', '60px')
    })

    it('should take the className and styles passes in props', () => {
        render(
            <Row data-testid="row" className="my-row" />
        )

        const row = screen.getByTestId('row')

        expect(row.className).toContain('my-row')
    })
})