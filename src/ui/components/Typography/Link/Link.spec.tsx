import { render, screen } from '@testing-library/react'
import { Link } from './Link'

describe('Link', () => {
    it('should be render', () => {
        render(<Link>Click me</Link>)

        const link = screen.getByRole('link')

        expect(link).toBeDefined()
    })
})