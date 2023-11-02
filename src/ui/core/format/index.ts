import { classes } from './classes/classes';
import { unitFormatter } from './unit/unit';

export function useFormat(){
    return  { 
        classes, 
        unitFormatter,
    }
}