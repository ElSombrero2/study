import { IContainer } from '../../Container.interface';

type TColumn = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export interface IColumn extends IContainer {
    col?: TColumn
    sm?: TColumn | 'auto'
    md?: TColumn | 'auto'
    xl?: TColumn | 'auto'
    xs?: TColumn | 'auto'
}
