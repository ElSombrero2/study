import { useFormat } from '../../core/format'
import { Flex } from '../Containers/Flex/Flex'
import { IStatus } from './Status.interface'
import styles from './Status.module.scss'

export const Status = ({colorScheme, size, animated}: IStatus) => {
    
    const { classes } = useFormat()

    return (
        <Flex justifyContent="center" alignItems="center" 
            className={classes(
                styles.status,
                styles[`status-${colorScheme || 'primary'}`],
                styles[`status-${size || 'medium'}`],
                {[styles.animated]: animated}
            )} 
        />
    )
}