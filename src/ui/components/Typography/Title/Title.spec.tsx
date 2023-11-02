import { render, screen } from '@testing-library/react'
import { Title } from './Title'

describe('Title', () => {
    it('should be rendered and have h1 className', () => {
        render(<Title>Title</Title>)

        const title = screen.getByText('Title')

        expect(title).toBeDefined()
        expect(title.className).toContain('h1')
    })

    it('should take heading type', () => {
        render(<Title heading="h3">Title</Title>)

        const title = screen.getByText('Title')

        expect(title.className).toContain('h3')
    })

    it('should take the color passed in props', () => {
        render(<Title color="red">Title</Title>)

        const title = screen.getByText('Title')

        expect(title.style.color).toEqual('red')
    })
})