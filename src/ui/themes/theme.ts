import colors from './colors/colors.module.scss'
import breakpoints from './breakpoints/breakpoints.module.scss'
import { IBreakpoints } from '../types/breakpoints'
import { IColored } from '../types/color-scheme'

export const Theme = {
    colors: (colors as unknown) as IColored,
    breakpoints: (breakpoints as unknown) as IBreakpoints,
}
