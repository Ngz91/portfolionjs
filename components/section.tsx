import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'
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

const Section: React.FC<sectionProps> = ({ children, delay, duration }) => {
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
