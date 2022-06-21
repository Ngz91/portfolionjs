import React from 'react'
import { Box, SimpleGrid, Text, Tooltip } from '@chakra-ui/react'

type techProps = {
  tech?: string
  desc?: string
}

const TechIcon: React.FC<techProps> = ({ tech, desc }) => (
  <Tooltip label={desc} fontSize='12px' width='80%'>
    <Box width={150} my={4}>
      <a href='/' target='_blank'>
        <i
          className={`devicon-${tech}-plain colored`}
          style={{
            fontSize: '28px',
            textShadow: '1px 1px black',
          }}
        ></i>
        <Text textShadow='1px 1px black'>{tech}</Text>
      </a>
    </Box>
  </Tooltip>
)

const Skills: React.FC = () => (
  <Box textAlign='center' alignContent='center'>
    <SimpleGrid columns={[3, 4, 4]} gap={4} justifyItems='center'>
      <TechIcon tech='python' desc='description about the technology here' />
      <TechIcon tech='python' desc='description about the technology here' />
      <TechIcon tech='python' desc='description about the technology here' />
      <TechIcon tech='python' desc='description about the technology here' />
      <TechIcon tech='python' desc='description about the technology here' />
      <TechIcon tech='python' desc='description about the technology here' />
      <TechIcon tech='python' desc='description about the technology here' />
      <TechIcon tech='python' desc='description about the technology here' />
    </SimpleGrid>
  </Box>
)

export default Skills
