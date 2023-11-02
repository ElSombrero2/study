import React from 'react';
import { ISize } from '../../../types/common/size';
import { IWeight } from '../../../types/typography/weight';
import { IColor } from '../../../types/color-scheme';

export interface ILink extends IWeight, ISize, React.AnchorHTMLAttributes<HTMLAnchorElement>, IColor {
    undecorated?: boolean
}