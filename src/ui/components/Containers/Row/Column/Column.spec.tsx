import { render, screen } from '@testing-library/react'
import { Column } from './Column'

describe('Column', () => {
    it('should be rendered and have className column', () => {
        render(<Column data-testid="column" />)

        const column = screen.getByTestId('column')

        expect(column).toBeDefined()
        expect(column.className).toContain('column')
        expect(column.className.includes('column-')).toBeFalsy()
    })

    it('should render children', () => {
        const text = 'Hello World'

        render(
            <Column data-testid="column">
                <h1>{text}</h1>
            </Column>
        )

        const title = screen.getByText(text)

        expect(title).toBeDefined()
    })

    it('should take the display props', () => {
        render(<Column data-testid="column" display="hide-on-xl" />)

        const column = screen.getByTestId('column')

        expect(column.className).toContain('hide-on-xl')
    })

    it('should take columns data and breakpoints if they\'re passed in props', () => {
        render(
            <Column data-testid="column" col={1} sm={1} md={1} xl={1} xs={1} />
        )

        const column = screen.getByTestId('column')

        expect(column.className).toContain('column-1')
        expect(column.className).toContain('column-xl-1')
        expect(column.className).toContain('column-md-1')
        expect(column.className).toContain('column-sm-1')
        expect(column.className).toContain('column-xs-1')
    })

    it('should take the className and styles passes in props', () => {
        render(
            <Column data-testid="column" className="my-column" />
        )

        const column = screen.getByTestId('column')

        expect(column.className).toContain('my-column')
    })
})