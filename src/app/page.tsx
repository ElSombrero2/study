'use client';
import { Button } from '../ui/components/Buttons/Button/Button'
import { Flex } from '../ui/components/Containers/Flex/Flex'
import { Column } from '../ui/components/Containers/Row/Column/Column'
import { Row } from '../ui/components/Containers/Row/Row'
import { Text } from '../ui/components/Typography/Text/Text'
import { Link } from '../ui/components/Typography/Link/Link'
import { clients } from '../data/clients'
import { Block } from '../ui/components/Containers/Block/Block'
import { Title } from '../ui/components/Typography/Title/Title'
import { classes } from '../ui/core/format/classes/classes'
import { Theme } from '../ui/themes/theme'
import { User } from '../components/User/User'
import Image from 'next/image'
import styles from './page.module.scss'
import { Quote } from '../components/Quote/Quote'
import StudentAnimation from '../animations/student.json'
import BookAnimation from '../animations/books.json'
import { useLottie } from 'lottie-react';
import { Strong } from '../ui/components/Typography/Strong/Strong';
import { Small } from '../ui/components/Typography/Small/Small';

export default function Home() {

  const {View: StudentView} = useLottie({
    animationData: StudentAnimation,
    loop: true,
    width: '250px',
    height: '250px'
  })

  const {View: BookView} = useLottie({
    animationData: BookAnimation,
    loop: true,
    width: '250px',
    height: '250px'
  })

  return (
    <Flex gap={64} flexDirection="column">
      <Flex flexDirection="column" gap={96} className="main" id="home">
        <Flex gap={24} className={styles['home']} justifyContent="center" alignItems="center">
          <Flex>
            <Flex flexDirection="column" gap={24}>
              <h1 className={styles['giant-text']}>
                AOE-SUP.
              </h1>
              <Text className={styles['text']}>
                L’orientation après-bac représente pourtant une étape très importante : elle permet 
                aux jeunes de mieux cibler les études qu’ils voudraient poursuivre, et aboutir plus tard aux 
                débouchés correspondant à ces études. Mieux s’orienter, c’est donc optimiser le temps et 
                l’investissement dans les études supérieures. C’est aller droit au but et disposer de l’un des 
                outils nécessaires pour mieux se construire un avenir professionnel. Les jeunes d’aujourd’hui 
                ont besoin qu’on les aide à mieux choisir le bon chemin qu’ils doivent suivre. C’est un domaine 
                qui nous a paru intéressant, et c’est pourquoi nous voulions effectuer ce projet.
              </Text>
              <Flex gap={24}>
                <Button onClick={() => location.assign('#info')} colorScheme="dark" size="small">
                  Commencer
                </Button>
                <Button onClick={() => location.assign('#contact')} variant="outline" colorScheme="dark" size="small">
                  Contact
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex display="hide-on-md" style={{maxWidth: '550px', maxHeight: '550px'}}>
            {StudentView}
          </Flex>
        </Flex>

        <Flex justifyContent="center">
          <Flex flexWrap="wrap" 
            gap={64}
            alignItems="center"
            justifyContent="center"
            className={styles['clients']}
          >
            {
              clients.map((e, i) => (
                <Link key={i} href={e.url}>
                  <Image className={styles['client-image']} 
                    src={e.image}
                    placeholder="blur"
                    blurDataURL={e.image}
                    height={0} 
                    width={0}
                    sizes="100%"
                    alt={e.image}
                  />
                </Link>
              ))
            }
          </Flex>
        </Flex>

        <Flex id="info" 
          className={styles['staff']} 
          justifyContent="space-between"
          alignItems="center"
          gap={32}
          flexWrap="wrap"  
        >
          <Block>
            <h1>Le Staff</h1>
            <Text>
              Une equipe dynamique et engagée
            </Text>
          </Block>

          <User src="/user.jpg"
            name="John Doe"
            title="Vendeur"
            description="A short text description"
          />

          <User src="/user.jpg"
            name="Jane Doe"
            title="Vendeuse"
            description="A short text description"
            color={Theme.colors.success}
          />
        </Flex>

        <Flex gap={96} alignItems="center" justifyContent="center" className={styles['home']}>
          <Flex style={{maxWidth: '550px', maxHeight: '550px'}} display="hide-on-sm">
            {BookView}
          </Flex>
          <Flex>
            <Flex flexDirection="column" gap={24}>
              <Title>
                Pour Qui <br />
                S&apos;Adresse Notre <br />
                Agence?
              </Title>
              <Text className={styles['text']}>
                L’agence s’adresse surtout à des personnes qui ont des pouvoirs d’achat allant de 10 000 Ar et 
                plus. On proposera des services d’orientation adapté à tout le monde. En outre, les services 
                seront la distinction par rapport à la concurrence.
              </Text>
              <Text className={styles['text']}>
                Les investissements sont nombreux pour la création de cette agence. De plus, ils se 
                répartissent en plusieurs catégories. Le montant total se monte à 364 100 000 Ariary. 
                Par conséquent, les travaux à faire dans les locaux ne sont pas à négliger. 
              </Text>
              <Flex gap={24}>
                <Button onClick={() => location.assign('#home')} variant="outline" colorScheme="primary" size="small">
                    En Savoir Plus
                    &nbsp;
                    <i className="fa-solid fa-arrow-right"></i>
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex  id="testamonial" className={classes(
          'main',
          styles['quote-section']
        )}
        justifyContent="center"
        alignItems="center"
      >
        <Quote />
      </Flex>

      <Flex  id="contact" justifyContent="center" alignItems="center" flexWrap="wrap" gap={24}>
        <Block>
          <Image className={styles['brand']} 
            src="/brochure.jpg"
            height={0}
            width={0}
            sizes="100%"
            alt="Alternative" 
          />
        </Block>
        <form className={classes('main', styles['form-container'])}>
          <h1>Contact Us</h1>
          <Flex flexDirection="column" className={styles['form']} gap={24}>
            <Flex gap={10}>
                <Flex flexDirection="column" gap={8} className={styles['form-group']}>
                  <label htmlFor="">
                    Nom
                  </label>
                  <input type="text" placeholder="Ex: John" />
                </Flex>
                <Flex flexDirection="column" gap={8} className={styles['form-group']}>
                  <label htmlFor="">
                    Prénom
                  </label>
                  <input type="text" placeholder="Ex: Doe" />
                </Flex>
                <Flex flexDirection="column" gap={8} className={styles['form-group']}>
                  <label htmlFor="">
                    Date de Naissance
                  </label>
                  <input type="date" placeholder="Format: DD/MM/YYYY" />
                </Flex>
            </Flex>
            <Flex gap={10}>
                <Flex flexDirection="column" gap={8} className={styles['form-group']}>
                  <label htmlFor="">
                    Numéro de Telephone (+261)
                  </label>
                  <input type="number" placeholder="34 12 365 81" />
                </Flex>
                <Flex flexDirection="column" gap={8} className={styles['form-group']}>
                  <label htmlFor="">
                    Adresse Email
                  </label>
                  <input type="email" placeholder="Ex: my.mail@group.com" />
                </Flex>
            </Flex>
            <Flex gap={10}>
                <Flex flexDirection="column" gap={8} className={styles['form-group']}>
                  <label htmlFor="">
                    Niveau d&apos;Etude
                  </label>
                  <select>
                    <optgroup label="Bacc">
                      <option>BACC A1</option>
                      <option>BACC A2</option>
                      <option>BACC C</option>
                      <option>BACC D</option>
                    </optgroup>

                    <optgroup label="Niveau Supérieur">
                      <option>BACC +1</option>
                      <option>BACC +2</option>
                      <option>BACC +3</option>
                      <option>BACC +4</option>
                      <option>BACC +5</option>
                    </optgroup>
                  </select>

                </Flex>
                <Flex flexDirection="column" gap={8} className={styles['form-group']}>
                  <label htmlFor="">
                    Université
                  </label>
                  <select>
                    <option>ISPM</option>
                    <option>ISCAM</option>
                    <option>ITU</option>
                    <option>INSCAE</option>
                    <option>IST</option>
                    <option>ESPA</option>
                    <option>ENI</option>
                  </select>
                </Flex>
            </Flex>
            <br />
            <Flex>
              <Button colorScheme="dark">Envoyer un Offre</Button>
            </Flex>
          </Flex>
        </form>
        
      </Flex>

      <Flex justifyContent="center" alignItems="center" flexWrap="wrap" className={classes('main', styles['grid'])}>
        <Image src="/1.jpg"
          width={150}
          height={150}
          alt="Image"
        />
        <Image src="/2.jpg"
          width={150}
          height={150}
          alt="Image"
        />
        <Image src="/3.jpg"
          width={150}
          height={150}
          alt="Image"
        />
        <Image src="/4.jpg"
          width={150}
          height={150}
          alt="Image"
        />
        <Image src="/5.jpg"
          width={150}
          height={150}
          alt="Image"
        />
      </Flex>

      <Block className="main">
        <Flex className={styles['block']} 
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          gap={32}
        >
            <Title heading="h1" style={{textAlign: 'center'}}>
              Pourquoi Avoir Ouvert L&apos;Agence?
            </Title>
            <Text style={{textAlign: 'center'}}>
              Cette idée nous est venue lorsque nous avons constaté qu’il y a beaucoup de jeunes 
              étudiants qui abandonnent leurs études car il n’aimait pas la filière qu’ils ont choisie, et qu’ils 
              ne savent pas ce qui leur convient vraiment. Ils ont besoin d’aide pour pouvoir s’épanouir dans 
              leur vie scolaire ou même professionnelle. 
            </Text>
            <Flex gap={24}>
              <Button onClick={() => location.assign('#contact')} colorScheme="dark">
                Nous Contacter
              </Button>
              <Button onClick={() => location.assign('#home')} colorScheme="default">
                A Propos de Nous
              </Button>
            </Flex>
        </Flex>
        <br /> <br />
        <Flex className={classes(styles['footer'])} justifyContent="space-between" alignItems="center">
          <Flex gap={36} alignItems="center">
            <Strong>Copyright 2023</Strong>
            <Small>All right reserved to <strong>AOE Sup</strong></Small>
          </Flex>
          <Flex gap={36} alignItems="center">
            <Link colorScheme="dark">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link colorScheme="dark">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link colorScheme="dark">
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </Flex>
        </Flex>
      </Block>
    </Flex>
  )
}
