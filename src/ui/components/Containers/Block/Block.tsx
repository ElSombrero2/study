import { useFormat } from '../../../core/format'
import { IContainer } from '../Container.interface'
import styles from './Block.module.scss'

export const Block = (props: IContainer) => {
    const { classes } = useFormat()

    return (
        <div {...props} 
            className={classes(
                props.className, 
                styles['d-block'],
                styles[props.display || '']
            )}
        />
    )
}