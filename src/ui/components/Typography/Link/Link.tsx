import { useFormat } from '../../../core/format'
import { ILink } from './Link.interface'
import styles from './Link.module.scss'

export const Link = ({colorScheme, undecorated, ...props}: ILink) => {

    const { classes } = useFormat()

    return (
        <a {...props} 
            role="link"
            className={classes(
                styles[`link-${colorScheme || 'primary'}`],
                styles[props.weight || 'regular'],
                styles[`text-${props.size || 'medium'}`],
                {[styles.decorated]: !undecorated},
                props.className
            )}
        />
    )
}