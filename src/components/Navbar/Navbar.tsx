import { Block } from '@/ui/components/Containers/Block/Block'
import { Flex } from '@/ui/components/Containers/Flex/Flex'
import { Title } from '@/ui/components/Typography/Title/Title'
import { useFormat } from '@/ui/core/format'
import styles from './Navbar.module.scss'
import { Link } from '../../ui/components/Typography/Link/Link'

export const Navbar = () => {
    
    const { classes } = useFormat()

    return (
        <Block className={classes(styles['navbar-wrapper'])}>
            <Flex className={classes(styles['navbar'])} justifyContent="space-between" alignItems="center">
                <Flex>
                    <Block>
                        <Title heading="h5">
                            Logo
                        </Title>
                    </Block>
                </Flex>
                <Flex display="hide-on-md" gap={32}>
                    <Block>
                        <Link href="#home" colorScheme="dark" size="small">
                            Acceuil
                        </Link>
                    </Block>
                    <Block>
                        <Link href="#info" colorScheme="dark" size="small">
                            Info
                        </Link>
                    </Block>
                    <Block>
                        <Link href="#testamonial" colorScheme="dark" size="small">
                            Témoignage
                        </Link>
                    </Block>
                    <Block>
                        <Link href="#contact" colorScheme="dark" size="small">
                            Contacte
                        </Link>
                    </Block>
                    <Block>
                        <Link href="#more" colorScheme="dark" size="small">
                            Plus
                        </Link>
                    </Block>
                </Flex>
            </Flex>
        </Block>
    )
}