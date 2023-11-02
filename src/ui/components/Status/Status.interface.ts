import { ColorScheme } from '../../types/color-scheme';
import { Size } from '../../types/common/size';

export interface IStatus{
    colorScheme?: ColorScheme,
    size?: Size,
    animated?: boolean
}