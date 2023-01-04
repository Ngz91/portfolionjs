import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { AppProps } from 'next/app'

const styles = {
  global: (props: AppProps) => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props),
    },
  }),
}

const components = {
  Heading: {
    variant: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textdecorationThickness: 4,
        marginBottom: 4,
        marginTop: 3,
      },
    },
  },
  Link: {
    baseStyle: (props: AppProps) => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
    }),
  },
}

const fonts = {
  heading: "'M PLUS rounded 1c'",
}

const colors = {
  glassTeal: '#319795',
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
})

export default theme
