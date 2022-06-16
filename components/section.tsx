import React, { ReactNode } from 'react'
import Image from 'next/image'
import { motion, MotionProps } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

type sectionProps = {
  children?: ReactNode
  delay?: number | any
  duration?: number | any
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === 'transition'
  },
})

const Section = ({ children, delay, duration }: sectionProps) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration, delay }}
      mb={6}
    >
      {children}
    </StyledDiv>
  )
}

export default Section
