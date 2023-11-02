import { render, screen } from '@testing-library/react'
import { Strong } from './Strong'

describe('Strong', () => {
    it('should be rendered', () => {
        render(<Strong>My Long Text</Strong>)

        const strong = screen.getByText('My Long Text')

        expect(strong).toBeDefined()
    })

    it('should take the size passed in props', () => {
        render(<Strong size="giant">My Long Text</Strong>)

        const strong = screen.getByText('My Long Text')

        expect(strong.className).toContain('giant')
    })

    it('should take the color passed in props', () => {
        render(<Strong color="red">My Long Text</Strong>)

        const strong = screen.getByText('My Long Text')

        expect(strong.style.color).toEqual('red')
    })
})
