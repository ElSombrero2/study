import React from 'react';
import { Variant } from '../../types/common/variant';
import { IColor } from '../../types/color-scheme';
import { ISize } from '../../types/common/size';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement>, ISize, IColor {
    variant?: Variant
    w100?: boolean
}