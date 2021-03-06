import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import theme from '../lib/theme'
import { SingletonRouter } from 'next/router'

type mainProps = Omit<AppProps, 'router'> & {
  router: SingletonRouter
}

function MyApp({ Component, pageProps, router }: mainProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
