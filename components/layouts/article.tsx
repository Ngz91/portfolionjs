import { motion } from 'framer-motion'
import Head from 'next/head'
import React, { ReactNode } from 'react'
import { GridItemStyle } from '../grid-item'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

type layoutProps = {
  children?: ReactNode
  title?: string
}

const Layout: React.FC<layoutProps> = ({ children, title }) => (
  <motion.article
    initial='hidden'
    animate='enter'
    exit='exit'
    variants={variants}
    transition={{ duration: 0.4, type: 'easeInOut' }}
    style={{ position: 'relative' }}
  >
    <>
      {title && (
        <Head>
          <title>{title} - Nevio Gomez</title>
        </Head>
      )}
      {children}
      <GridItemStyle />
    </>
  </motion.article>
)

export default Layout
