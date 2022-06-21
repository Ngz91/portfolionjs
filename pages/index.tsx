import type { NextPage, GetStaticProps } from 'next'
import NextLink from 'next/link'
import axios from 'axios'

import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'

import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDiscord,
  IoLogoGoogle,
} from 'react-icons/io5'
import Skills from '../components/skills'

const Home: NextPage = () => {
  return (
    <Layout>
      <Flex flexDirection='column' my={6}>
        <Box
          flexShrink={0}
          mt={{ base: 6, md: 0 }}
          mr={{ md: 6 }}
          textAlign='center'
          mb={0}
        >
          <Image
            src='/profile-image.jpg'
            borderColor='whiteAlpha.800'
            borderWidth={2}
            borderStyle='solid'
            maxWidth='120px'
            display='inline-block'
            borderRadius='full'
            alt='Profile Image'
            transition='1s ease-out'
            _hover={{ filter: 'brightness(120%)' }}
          />
        </Box>
        <Box flexGrow={1} ml={3} textAlign='center'>
          <Heading as='h2' variant='page-title'>
            Nevio Gomez
          </Heading>
          <Text
            textColor={useColorModeValue('blackAlpha.700', 'whiteAlpha.600')}
          >
            Industrial Engineer / Developer / Data Science Enthusiast
          </Text>
        </Box>
      </Flex>

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
          automation of various tasks, but aside from my job I have continued to
          develop my skills and have had the opportunity to work on different
          projects including creating a program which works by applying
          statistics to the field of horse betting.
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
          My Top Skills
        </Heading>
        <Text textAlign='justify' style={{ textIndent: '1rem' }}>
          Some of the technologies that I've worked with in my years as a
          software developer:
        </Text>
        <Skills />
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
          On the Web
        </Heading>
        <SimpleGrid columns={2} gap={4} justifyItems='center' my={6}>
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
    </Layout>
  )
}
export default Home
