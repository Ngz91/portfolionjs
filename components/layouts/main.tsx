import React, { ReactNode } from 'react'
import Head from 'next/head'
import useRouter from 'next/router'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'

type mainProps = {
  children: ReactNode
  router: typeof useRouter
}

const Main: React.FC<mainProps> = ({ children, router }) => {
  return (
    <Box as='main' pb={8}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='shortcut icon' href='/glasses.ico' />
        <title>Nevio&apos;s Portfolio</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW='xl' pt={14}>
        {children}
      </Container>
    </Box>
  )
}

export default Main
