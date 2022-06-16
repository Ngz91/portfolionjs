import type { NextPage, GetStaticProps } from 'next'
import NextLink from 'next/link'
import axios from 'axios'

import {
  Box,
  Container,
  Heading,
  Button,
  Image,
  useColorModeValue,
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'

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
          <Paragraph>
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
          </Paragraph>
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
      </Container>
    </Layout>
  )
}

export default Home
