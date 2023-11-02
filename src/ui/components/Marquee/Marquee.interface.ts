import React from 'react';
import { ColorScheme } from '../../types/color-scheme';
import { Unit } from '../../types/common/unit';

export interface IMarquee {
    children?: React.ReactNode,
    colorScheme?: ColorScheme,
    duration?: number,
    padding?: Unit,
    gap?: Unit,
    direction?: 'left' | 'right'
}