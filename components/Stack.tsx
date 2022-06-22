import React from 'react'
import { Box, SimpleGrid, Tooltip, Text } from '@chakra-ui/react'
import type { ProjectProps } from '../pages/project/[id]/[slug]'

const Stack: React.FC<ProjectProps> = (props) => {
  const { project, stack } = props

  return (
    <Box textAlign='center' alignContent='center'>
      <SimpleGrid columns={[2, 3, 3]} gap={4} justifyItems='center'>
        {Array.isArray(project?.technologies) ? (
          project?.technologies.map((item: string, index: number) =>
            item.toLowerCase() !== 'tensorflow' ? (
              <Tooltip
                label={stack?.[item.toLowerCase()]?.description}
                key={index}
                fontSize='12px'
                width='80%'
              >
                <Box width={150} my={4} key={index}>
                  <a
                    href={stack?.[item.toLowerCase()]?.wikipage}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i
                      className={`devicon-${
                        item.toLowerCase().split('/')[0]
                      }-plain colored`}
                      style={{
                        fontSize: '28px',
                        textShadow: '1px 1px black',
                      }}
                    ></i>
                    <Text textShadow='1px 1px black'>{item}</Text>
                  </a>
                </Box>
              </Tooltip>
            ) : (
              <Tooltip
                label={stack?.[item.toLowerCase()]?.description}
                key={index}
                fontSize='12px'
                width='80%'
              >
                <Box width={150} my={4} key={index}>
                  <a
                    href={stack?.[item.toLowerCase()]?.wikipage}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <i
                      className={`devicon-${item.toLowerCase()}-original colored`}
                      style={{
                        fontSize: '28px',
                        textShadow: '1px 1px black',
                      }}
                    ></i>
                    <Text textShadow='1px 1px black'>{item}</Text>
                  </a>
                </Box>
              </Tooltip>
            )
          )
        ) : (
          <Tooltip
            label={stack?.[project?.technologies.toLowerCase()]?.description}
          >
            <Box width={150} my={4}>
              <a
                href={stack?.[project?.technologies.toLowerCase()]?.wikipage}
                target='_blank'
                rel='noreferrer'
              >
                <i
                  className={`devicon-${project?.technologies.toLowerCase()}-plain colored`}
                  style={{ fontSize: '20px' }}
                ></i>
                <Text textShadow='1px 1px black'>{project?.technologies}</Text>
              </a>
            </Box>
          </Tooltip>
        )}
      </SimpleGrid>
    </Box>
  )
}

export default Stack
