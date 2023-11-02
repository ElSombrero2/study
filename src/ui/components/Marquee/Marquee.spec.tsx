import { render } from '@testing-library/react'
import { Marquee } from './Marquee'
import { Title } from '../Typography/Title/Title'

describe('Marquee', () => {
    it('should be rendered', () => {
        const { container } = render(
            <Marquee>
                <Title>Hello world</Title>
            </Marquee>
        )

        const marquee = container.firstChild

        expect(marquee).toBeDefined()
    })
})