import React, { ReactNode } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import ThemeToggleButton from './theme-toggle-button'

import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'
import { SiHeroku } from 'react-icons/si'

type linkProps = {
  href?: string | any
  path?: string
  children?: ReactNode
}

const LinkItem: React.FC<linkProps> = ({ href, path, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('black', 'whiteAlpha.900')

  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? 'glassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        fontWeight={600}
        rounded='lg'
        _hover={{
          textDecoration: 'none',
        }}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const NavBar: React.FC<linkProps> = (props) => {
  const { path } = props

  return (
    <Box
      position='fixed'
      as='nav'
      w='100%'
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display='flex'
        p={2}
        maxW='container.md'
        justifyContent='space-between'
        flexWrap='wrap'
      >
        <Flex align='center' mr={5}>
          <Heading as='h1' size='lg' letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          align='center'
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          textColor={'black'}
        >
          <LinkItem href='/projects' path={path}>
            Projects
          </LinkItem>
          <LinkItem
            href='https://github.com/Ngz91'
            path={path}
            target='_blank'
            display='inline-flex'
            alignItems='center'
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Github
          </LinkItem>
          <LinkItem
            href='https://ngzportfolio.herokuapp.com'
            path={path}
            target='_blank'
            display='inline-flex'
            alignItems='center'
            style={{ gap: 4 }}
            pl={2}
          >
            <SiHeroku />
            Old Portfolio
          </LinkItem>
        </Stack>

        <Box flex={1} textAlign='right'>
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant='outline'
                aria-label='Options'
              />
              <MenuList>
                <NextLink href='/' passHref>
                  <MenuItem as={Link} _hover={{ textDecoration: 'none' }}>
                    About
                  </MenuItem>
                </NextLink>
                <NextLink href='/projects' passHref>
                  <MenuItem as={Link} _hover={{ textDecoration: 'none' }}>
                    Projects
                  </MenuItem>
                </NextLink>
                <NextLink href='https://github.com/Ngz91' passHref>
                  <MenuItem as={Link} _hover={{ textDecoration: 'none' }}>
                    Github
                  </MenuItem>
                </NextLink>
                <NextLink href='https://ngzportfolio.herokuapp.com' passHref>
                  <MenuItem as={Link} _hover={{ textDecoration: 'none' }}>
                    Old Portfolio
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default NavBar
