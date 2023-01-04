import React from 'react'
import { Box, SimpleGrid, Text, Tooltip } from '@chakra-ui/react'

type techProps = {
  tech: string
  desc: string
  page: string
}

const TechIcon: React.FC<techProps> = ({ tech, desc, page }) => (
  <Tooltip label={desc} fontSize='12px' width='80%'>
    <Box width={130} my={4}>
      <a href={page} target='_blank' rel='noreferrer'>
        <i
          className={`devicon-${tech.toLowerCase()}-plain colored`}
          style={{
            fontSize: '40px',
            textShadow: '0.5px 0.5px black',
          }}
        ></i>
        <Text textShadow='0.5px 0.5px black'>{tech}</Text>
      </a>
    </Box>
  </Tooltip>
)

const Skills: React.FC = () => (
  <Box textAlign='center' alignContent='center'>
    <SimpleGrid columns={[3, 4, 4]} gap={4} justifyItems='center' my={4}>
      <TechIcon
        tech='Python'
        desc='Python is a programming language that lets you work quickly and integrate systems more effectively.'
        page='https://www.python.org/'
      />
      <TechIcon
        tech='JavaScript'
        desc='JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web.'
        page='https://www.javascript.com/'
      />
      <TechIcon
        tech='TypeScript'
        desc='TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.'
        page='https://www.typescriptlang.org/'
      />
      <TechIcon
        tech='React'
        desc='React is a JavaScript library for building user interfaces.'
        page='https://www.react.org/'
      />
      <TechIcon
        tech='Nextjs'
        desc='Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites.'
        page='https://www.nextjs.org/'
      />
      <TechIcon
        tech='Django'
        desc='Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.'
        page='https://www.djangoproject.com/'
      />
      <TechIcon
        tech='Tailwindcss'
        desc='Tailwindcss is a utility-first CSS framework.'
        page='https://www.tailwindcss.com/'
      />
      <TechIcon
        tech='Postgresql'
        desc='PostgreSQL is a powerful, open source object-relational database.'
        page='https://postgresql.org/'
      />
    </SimpleGrid>
  </Box>
)

export default Skills
