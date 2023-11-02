import { useFormat } from '../../../core/format';
import styles from '../Typography.module.scss'
import { IStrong } from './Strong.interface';

export const Strong = ({color, ...props}: IStrong) => {

    const { classes } = useFormat()

    return <strong {...props} 
        className={classes(
            styles.strong,
            styles[`text-${props.size || 'medium'}`],
            props.className
        )}
        style={{...props.style, color}}
    />
}