import { useFormat } from '../../../core/format';
import styles from '../Typography.module.scss'
import { IText } from './Text.interface';

export const Text = ({color, ...props}: IText) => {
    const { classes } = useFormat()

    return <p {...props} 
        className={classes(
            styles.paragraph,
            styles[props.weight || 'regular'],
            styles[`text-${props.size || 'medium'}`],
            props.className
        )}
        style={{...props.style, color}}
    />
}