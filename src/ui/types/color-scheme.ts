export type ColorScheme = 'default' | 'dark' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning'

export interface IColor{ colorScheme?: ColorScheme }

export interface IColorScheme {
    default: string
    dark: string 
    primary: string
    secondary: string
    success: string
    danger: string
    warning: string
}

export type ColoredItem = ColorScheme | 'default-dark' | 'primary-dark' | 'secondary-dark' | 'success-dark' | 'danger-dark' | 'warning-dark'
| 'default-light' | 'primary-light' | 'secondary-light' | 'success-light' | 'danger-light' | 'warning-light' | 'grey' | 'black' | 'white'

export interface IColored extends IColorScheme {
    grey: string
    black: string
    white: string
    'default-dark': string
    'primary-dark': string 
    'secondary-dark': string
    'success-dark': string
    'danger-dark': string
    'warning-dark': string
    'default-light': string
    'primary-light': string 
    'secondary-light': string
    'success-light': string
    'danger-light': string
    'warning-light': string
}

export interface IBackground{ background?: `#${string}` }
