import { render, screen } from '@testing-library/react'
import { Small } from './Small'

describe('Small', () => {
    it('should be rendered', () => {
        render(<Small>My Long Text</Small>)

        const small = screen.getByText('My Long Text')

        expect(small).toBeDefined()
    })

    it('should take the weight passed in props', () => {
        render(<Small weight="bold">My Long Text</Small>)

        const small = screen.getByText('My Long Text')

        expect(small.className).toContain('bold')
    })

    it('should take the color passed in props', () => {
        render(<Small color="red">My Long Text</Small>)

        const small = screen.getByText('My Long Text')

        expect(small.style.color).toEqual('red')
    })
})