import { useFormat } from '../../../core/format'
import { IContainer } from '../Container.interface'
import styles from './InlineBlock.module.scss'

export const InlineBlock = (props: IContainer) => {
    const { classes } = useFormat()

    return (
        <span {...props} 
            className={classes(
                props.className, 
                styles['d-inline-block'],
                styles[props.display || '']
            )}
        />
    )
}