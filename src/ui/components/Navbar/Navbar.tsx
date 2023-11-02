import { useFormat } from '../../core/format'
import { Flex } from '../Containers/Flex/Flex'
import { INavbar } from './Navbar.interface'
import styles from './Navbar.module.scss' 

export const Navbar = ({children, ...props}: INavbar) => {
    const { classes } = useFormat()

    return (
        <div>
            <Flex {...props} 
            justifyContent="space-between"
                alignItems="center"
                className={classes(
                    styles.navbar,
                    props.className,
                )}
            >
                {children}
            </Flex>
        </div>
    )
}