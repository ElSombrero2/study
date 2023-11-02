import { render } from '@testing-library/react'
import { Status } from './Status'

describe('Status', () => {
    it('should be rendered', () => {
        const { container } = render(<Status />)
        
        const status = container.firstChild

        expect(status).toBeDefined()
    })

    it('should take the colorScheme passed in props', () => {
        const { container } = render(<Status colorScheme="danger" />)
        
        const status = container.firstChild as HTMLElement

        expect(status.className).toContain('danger')
    })

    it('should take the size passed in props', () => {
        const { container } = render(<Status size="extra-large" />)
        
        const status = container.firstChild as HTMLElement

        expect(status.className).toContain('extra-large')
    })

    it('should not be animated when animated is not passed', () => {
        const { container } = render(<Status />)
        
        const status = container.firstChild as HTMLElement

        expect(status.className.includes('animated')).toBeFalsy()
    })

    it('should animate when animated is passed', () => {
        const { container } = render(<Status animated />)
        
        const status = container.firstChild as HTMLElement

        expect(status.className).toContain('animated')
    })
})