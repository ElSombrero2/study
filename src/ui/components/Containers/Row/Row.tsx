import { useFormat } from '../../../core/format'
import { Flex } from '../Flex/Flex'
import { IRow } from './Row.interface'
import styles from './Row.module.scss'

export const Row = (props: IRow) => {

    const { classes } = useFormat()

    return (
        <Flex {...props} 
            flexWrap="wrap"
            className={classes(
                props.className, 
                styles.row
            )} 
        />
    )
}