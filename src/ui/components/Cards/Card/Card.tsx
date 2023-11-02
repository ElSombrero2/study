import { useFormat } from '../../../core/format'
import { Block } from '../../Containers/Block/Block'
import { ICard } from './Card.interface'
import styles from './Card.module.scss'

export const Card = ({colorScheme, children, width, style, elevation, className, id}: ICard) => {

    const { classes, unitFormatter } = useFormat()

    return (
        <Block id={id} 
            className={classes(
                styles.card,
                styles[`bg-${colorScheme || 'primary'}`],
                styles[`shadow-${elevation}`],
                className
            )}
            style={{width: width && unitFormatter(width), ...style}}
        >
            {children}
        </Block>
    )
}