import { useFormat } from '../../../core/format'
import { IFlex } from './Flex.interface'
import styles from './Flex.module.scss'

export const Flex = ({justifyContent, alignItems, gap, flexDirection, flexWrap, ...props}: IFlex) => {

    const { classes, unitFormatter } = useFormat()

    return (
        <div {...props} 
            className={classes(
                props.className, 
                styles['d-flex'],
                styles[props.display || '']
            )}
            style={{
                ...props.style,
                flexDirection,
                flexWrap,
                gap: unitFormatter(gap),
                alignItems,
                justifyContent
            }}
        />
    )
}