import { useFormat } from '../../core/format'
import { Flex } from '../Containers/Flex/Flex'
import { IMarquee } from './Marquee.interface'
import styles from './Marquee.module.scss'

export const Marquee = ({colorScheme, children, gap, duration, padding, direction}: IMarquee) => {

    const { classes, unitFormatter } = useFormat()

    return (
        <Flex className={classes(
                styles.wrapper,
                styles[`bg-${colorScheme || 'primary'}`]
            )}
            style={{padding: unitFormatter(padding || 25)}}
        >
            <Flex className={classes(
                 styles.marquee,
                 styles[`marquee-${direction || 'left'}`]
                )} 
                gap={gap || 120}
                alignItems="center"
                style={{animationDuration: `${duration || 30}s`}}
            >
                {Array.from({length: 6}).map((e, i) => children)}
            </Flex>
        </Flex>
    )
}