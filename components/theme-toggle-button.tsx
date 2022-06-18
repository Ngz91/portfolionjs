import { IconButton, useColorModeValue, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { Tooltip } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'

const ThemeToggleButton: React.FC = () => {
  const { toggleColorMode } = useColorMode()

  return (
    <Tooltip label='Toggle Theme'>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          style={{ display: 'inline-block' }}
          key={useColorModeValue('light', 'dark')}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <IconButton
            aria-label='Toggle Theme'
            colorScheme={useColorModeValue('purple', 'orange')}
            icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
            onClick={toggleColorMode}
            transitionDuration='200ms'
          />
        </motion.div>
      </AnimatePresence>
    </Tooltip>
  )
}

export default ThemeToggleButton
