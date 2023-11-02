import { Unit } from '../../../types/common/unit';
import { IContainer } from '../Container.interface';

export interface IFlex extends IContainer {
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly',
    flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse',
    gap?: Unit,
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
} 