import Image from 'next/image'
import { Block } from '../../ui/components/Containers/Block/Block'
import { Flex } from '../../ui/components/Containers/Flex/Flex'
import { Text } from '../../ui/components/Typography/Text/Text'
import { Theme } from '../../ui/themes/theme'
import { Strong } from '../../ui/components/Typography/Strong/Strong'

export const Quote = () => {
    return (
        <Flex gap={120} alignItems="center" justifyContent="center" flexWrap="wrap-reverse">
            <Block style={{maxWidth: '440px'}}>
                <i className="fa-solid fa-quote-left"
                    style={{fontSize: '60px'}}
                />
                <Text>
                Les cours sont exactement comme on me les a décrit, je tiens sincèrement à remercier ceux de 
                &nbsp;<strong>AOE Sup</strong>&nbsp;qui nous ont persuadés et qui ont toujours été là depuis le début. 
                Il y avait des complications mais ils ont toujours su nous aider à tout moment. 
                J’ai passé le premier semestre et c’était super malgré le confinement.
                </Text>
                <br />
                <Strong>Anonyme</Strong>
            </Block>
            <Image width={220}
                height={220}
                src="/user.jpg"
                alt="Alternative"
            />
        </Flex>
    )
}