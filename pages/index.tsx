import type { NextPage, GetStaticProps } from 'next'
import NextLink from 'next/link'
import axios from 'axios'

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import { ChevronRightIcon } from '@chakra-ui/icons'

import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDiscord,
  IoLogoGoogle,
} from 'react-icons/io5'
import Link from 'next/link'

type ProjectListProps = {
  projects: {
    id?: number
    name?: string
    description?: string
    technologies?: any
    project_date?: string
  }
}

const Home: NextPage<ProjectListProps> = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius='lg'
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          textAlign='center'
        >
          Hello, I'm a Python/Django/NextJs developer from Venezuela!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as='h2' variant='page-title'>
              Nevio Gomez
            </Heading>
            <p>Industrial Engineer / Developer / Data Science Enthusiast</p>
          </Box>

          <Box
            flexShrink={0}
            mt={{ base: 6, md: 0 }}
            ml={{ md: 6 }}
            textAlign='center'
            mb={0}
          >
            <Image
              src='/profile-image.jpg'
              borderColor='whiteAlpha.800'
              borderWidth={2}
              borderStyle='solid'
              maxWidth='100px'
              display='inline-block'
              borderRadius='full'
              alt='Profile Image'
              transition='1s ease-out'
              _hover={{ filter: 'brightness(120%)' }}
            />
          </Box>
        </Box>

        <Section delay={0.1} duration={0.8}>
          <Heading
            as='h3'
            borderBottom='lg'
            fontSize={24}
            textDecoration='underline'
            textUnderlineOffset={6}
            textDecorationColor='#525252'
            mb={3}
            mt={4}
          >
            Work
          </Heading>
          <Text textAlign='justify' style={{ textIndent: '1rem' }}>
            Industrial Engineer who discovered a passion for coding and building
            Machine Learning models. I have experience working in projects where
            code must be changed and updated constantly to achieve a better
            result. The majority of my projects have been directed to the
            automation of various tasks, but aside from my job I have continued
            to develop my skills and have had the opportunity to work on
            different projects including creating a program which works by
            applying statistics to the field of horse betting.
          </Text>
          <Box textAlign='center' my={4}>
            <NextLink href='/projects'>
              <Button
                rightIcon={<ChevronRightIcon />}
                bgGradient='linear(to-r, teal.500, green.500)'
                _hover={{ bgGradient: 'linear(to-r, teal.600, green.600)' }}
              >
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.1} duration={0.8}>
          <Heading
            as='h3'
            borderBottom='lg'
            fontSize={24}
            textDecoration='underline'
            textUnderlineOffset={6}
            textDecorationColor='#525252'
            mb={3}
            mt={4}
          >
            My skills
          </Heading>
          <Text textAlign='justify' style={{ textIndent: '1rem' }}>
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </Text>
        </Section>
        <Section>
          <Heading
            as='h3'
            borderBottom='lg'
            fontSize={24}
            textDecoration='underline'
            textUnderlineOffset={6}
            textDecorationColor='#525252'
            mb={3}
            mt={4}
          >
            On the Web
          </Heading>
          <SimpleGrid
            columns={[1, 2, 2]}
            gap={4}
            textAlign='center'
            alignContent='center'
          >
            <a
              href='https://github.com/ngz91'
              target='_blank'
              style={{ textAlign: 'left', width: '170px' }}
            >
              <Button
                colorScheme='teal'
                variant='ghost'
                leftIcon={<Icon as={IoLogoGithub} />}
                width={170}
                justifyContent='left'
              >
                @Ngz91
              </Button>
            </a>
            <a
              href='https://linkedin.com/in/neviogomez'
              target='_blank'
              style={{ textAlign: 'left', width: '170px' }}
            >
              <Button
                colorScheme='teal'
                variant='ghost'
                leftIcon={<Icon as={IoLogoLinkedin} />}
                width={170}
                justifyContent='left'
              >
                Nevio Gomez
              </Button>
            </a>
            <a
              href='https://discordapp.com/users/366047479399186432'
              target='_blank'
              style={{ textAlign: 'left', width: '170px' }}
            >
              <Button
                colorScheme='teal'
                variant='ghost'
                leftIcon={<Icon as={IoLogoDiscord} />}
                width={170}
                justifyContent='left'
              >
                @Ari777
              </Button>
            </a>
            <Button
              colorScheme='teal'
              variant='ghost'
              leftIcon={<Icon as={IoLogoGoogle} />}
              width={170}
              justifyContent='left'
            >
              Neviogomez91
            </Button>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
