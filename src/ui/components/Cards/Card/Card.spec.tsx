import { render } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {
    it('should be rendered', () => {
        const { container } = render(<Card></Card>)

        const card = container.firstChild

        expect(card).toBeDefined()
    })

    it('should take the width if width exists', () => {
        const { container } = render(<Card width={300}></Card>)

        const card = container.firstChild as HTMLElement

        expect(card.style.width).toEqual('300px')
    })
})