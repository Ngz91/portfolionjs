import React from 'react';
import { GetStaticProps } from 'next'

import path from 'path'
import fs from 'fs'

import { Box, SimpleGrid, Text } from "@chakra-ui/react"

type skillsProps = {
    stack: {
    [index: string]: string | any
    id?: number
    description?: string
    wikipage?: string
  }
}

const Skills: React.FC<skillsProps> = (props) => {
  return (
    <Box>
      Something here
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  const fs = require('fs/promises')

  try {
    const filePath = path.join(process.cwd(), 'tech_data.json')
    const jsonData = await fs.readFile(filePath)
    const objectData = JSON.parse(jsonData.toString())
    return {
      props: {
        stack: objectData,
      },
    }
  } catch (error) {
    return {
      props: {
        stack: [],
      },
    }
  }
}

export default Skills
