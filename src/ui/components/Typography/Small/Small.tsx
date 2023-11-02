import { useFormat } from '../../../core/format';
import styles from '../Typography.module.scss'
import { ISmall } from './Small.interface';

export const Small = ({color, ...props}: ISmall) => {

    const { classes } = useFormat()

    return <small {...props} 
        className={classes(
            styles.small,
            styles[props.weight || 'regular'],
            props.className
        )}
        style={{...props.style, color}}
    />
}