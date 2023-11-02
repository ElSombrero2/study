import React from 'react';
import { ColorScheme } from '../../../types/color-scheme';
import { Unit } from '../../../types/common/unit';

export interface ICard {
    children?: React.ReactNode,
    colorScheme?: ColorScheme,
    elevation?: 0 | 1 | 2 | 3 | 4,
    width?: Unit,
    style?: StyleSheet,
    id?: string,
    className?: string
}