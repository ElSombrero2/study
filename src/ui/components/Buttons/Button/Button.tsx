import { useFormat } from '../../../core/format'
import { Text } from '../../Typography/Text/Text'
import { IButton } from '../Button.interface'
import styles from './Button.module.scss'

export const Button = ({children, variant, colorScheme, ...props}: IButton) => {

    const { classes } = useFormat()

    return (
        <button {...props}
            className={classes(
                props.className,
                styles[`button-${variant || 'contained'}`],
                styles[`button-${colorScheme || 'primary'}`],
                {[styles['w-100']]: !(!props.w100)}
            )}
        >
            <Text weight="semi-bold" size={props.size || 'medium'}>{children}</Text>
        </button>
    )
}