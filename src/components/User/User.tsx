import Image from 'next/image'
import { Flex } from '../../ui/components/Containers/Flex/Flex'
import { useFormat } from '../../ui/core/format'
import styles from './User.module.scss'
import { Small } from '../../ui/components/Typography/Small/Small'
import { Text } from '../../ui/components/Typography/Text/Text'
import { Strong } from '../../ui/components/Typography/Strong/Strong'
import { Theme } from '../../ui/themes/theme'

export const User = ({src, title, name, description, color}: {src: string, title: string, name: string, description: string, color?: string}) => {

    const { classes } = useFormat()

    return (
        <Flex gap={16} alignItems="center">
            <Flex flexDirection='column' alignItems='center' gap={5}>
                <Image src={src} 
                    width={60}
                    height={60}
                    alt="Image"
                    className={styles['image']}
                />
            </Flex>
            <Flex flexDirection="column" gap={5}>
                <Small>{title}</Small>
                <Text>{description}</Text>
                <Strong>{name}</Strong>
            </Flex>
        </Flex>
    )
}