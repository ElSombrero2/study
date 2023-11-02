import React from 'react'
import { ITitle } from './Title.interface'
import styles from '../Typography.module.scss'
import { useFormat } from '../../../core/format'

export const Title = ({heading, color, ...props}: ITitle) => {

    const { classes } = useFormat()

    return React.createElement(heading || 'h1', {
        ...props,
        className: classes(props.className, styles[heading || 'h1']),
        style: {...props.style, color}
    })
}