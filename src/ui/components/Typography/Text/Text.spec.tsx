import { render, screen } from '@testing-library/react'
import { Text } from './Text'

describe('Text', () => {
    it('should be rendered', () => {
        render(<Text>My Long Text</Text>)

        const text = screen.getByText('My Long Text')

        expect(text).toBeDefined()
    })

    it('should take the weight passed in props', () => {
        render(<Text weight="bold">My Long Text</Text>)

        const text = screen.getByText('My Long Text')

        expect(text.className).toContain('bold')
    })

    it('should take the size passed in props', () => {
        render(<Text size="giant">My Long Text</Text>)

        const text = screen.getByText('My Long Text')

        expect(text.className).toContain('giant')
    })

    it('should take the color passed in props', () => {
        render(<Text color="red">My Long Text</Text>)

        const text = screen.getByText('My Long Text')

        expect(text.style.color).toEqual('red')
    })
})