import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
    it('should be rendered', () => {
        render(<Button />)

        const button = screen.getByRole('button')
        
        expect(button).toBeDefined()
    })
})