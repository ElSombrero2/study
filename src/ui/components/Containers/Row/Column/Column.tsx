import { useFormat } from '../../../../core/format';
import { Block } from '../../Block/Block';
import { IColumn } from './Column.interface';
import styles from './Column.module.scss'

export const Column = (props: IColumn) => {

    const { classes } = useFormat()

    return (
        <Block {...props} 
            className={classes(
                props.className,
                styles[props.col ? `column-${props.col}` : 'column'],
                styles[(props.xl && `column-xl-${props.xl}`) || ''],
                styles[(props.md && `column-md-${props.md}`) || ''],
                styles[(props.sm && `column-sm-${props.sm}`) || ''],
                styles[(props.xs && `column-xs-${props.xs}`) || ''],
            )}
        />
    )
}