import { Unit } from '../../../types/common/unit';

export const unitFormatter = (size: Unit | undefined = undefined, unit: string = 'px') => (typeof size === 'number') ? `${size}${unit}` : size