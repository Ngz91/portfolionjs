import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Button,
  Text,
  SimpleGrid,
  Tooltip,
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'

type AccordionProps = {
  project?: {
    id?: number
    name?: string
    image?: string
    description?: string
    github_repo?: string
    technologies?: any
    project_date?: string
  }

  stack: {
    [index: string]: string | any
    id?: number
    description?: string
    wikipage?: string
  }
}

const Stack: React.FC<AccordionProps> = (props) => {
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

const AccordionMain: React.FC<AccordionProps> = (props) => {
  const { project, stack } = props

  return (
    <Accordion allowMultiple>
      <AccordionItem>
        <h2>
          <AccordionButton
            style={{ boxShadow: 'none' }}
            _expanded={{ bgGradient: 'linear(to-r, teal.600, green.600)' }}
          >
            <Box flex='1' textAlign='left'>
             <Text textShadow='0.5px 0.5px black'>Description</Text> 
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text textAlign='justify' textShadow='0.5px 0.5px black'>{project?.description}</Text>
          <Box textAlign='center' mt={6}>
            <a href={project?.github_repo} target='_blank' rel='noreferrer'>
              <Button
                leftIcon={<IoLogoGithub />}
                bgGradient='linear(to-r, teal.500, green.500)'
                _hover={{ bgGradient: 'linear(to-r, teal.600, green.600)' }}
              >
                Github Repo
              </Button>
            </a>
          </Box>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            style={{ boxShadow: 'none' }}
            _expanded={{ bgGradient: 'linear(to-r, teal.600, green.600)' }}
          >
            <Box flex='1' textAlign='left'>
              <Text textShadow='0.5px 0.5px black'>Stack</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text mb={4} textShadow='0.5px 0.5px black'>Technologies used for this project:</Text>
          <Stack project={project} stack={stack} />
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <h2>
          <AccordionButton
            style={{ boxShadow: 'none' }}
            _expanded={{ bgGradient: 'linear(to-r, teal.600, green.600)' }}
          >
            <Box flex='1' textAlign='left'>
              <Text textShadow='0.5px 0.5px black'>Project Start Date</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Text textShadow='0.5px 0.5px black'>{project?.project_date?.replaceAll('-', '/')}</Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionMain
