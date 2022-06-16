import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Spinner,
  Text,
  Tooltip,
  SimpleGrid,
  Button,
} from '@chakra-ui/react'
import fsPromises from 'fs/promises'
import Layout from '../../../components/layouts/article'
import path from 'path'
import { ChevronLeftIcon } from '@chakra-ui/icons'

type ProjectProps = {
  project?: {
    id?: number
    name?: string
    image?: string
    description?: string
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

const Project: NextPage<ProjectProps> = ({ project, stack }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Nevio's Portfolio | {project?.name}</title>
      </Head>
      {router.isFallback ? (
        <Box textAlign='center' alignContent='center'>
          <Spinner
            thickness='4px'
            speed='0.70s'
            color='gray.500'
            emptyColor='gray.200'
            size='lg'
          />
        </Box>
      ) : (
        <Layout>
          <Container>
            <Heading
              as='h3'
              fontSize={20}
              mt={6}
              mb={4}
              borderBottom='lg'
              textDecoration='underline'
              textUnderlineOffset={6}
              textDecorationColor='#525252'
            >
              {project?.name}
            </Heading>
            <Box textAlign='center'>
              <Image
                src={
                  `http://localhost:8000/${project?.image?.replace('/', '')}` ||
                  '/vercel.svg'
                }
                width={500}
                height={350}
                alt={project?.name}
              />
            </Box>
            <Text align='justify'>{project?.description}</Text>
            <br />
            <Text
              mb={6}
              fontWeight='bold'
              textDecoration='underline'
              borderBottom='lg'
              textUnderlineOffset={6}
              textDecorationColor='#525252'
            >
              Stack:
            </Text>
            <Box textAlign='center' alignContent='center'>
              <SimpleGrid columns={[2, 3, 3]} gap={4}>
                {Array.isArray(project?.technologies) ? (
                  project?.technologies.map((item: string, index: number) =>
                    item.toLowerCase() !== 'tensorflow' ? (
                      <Tooltip
                        label={stack?.[item.toLowerCase()]?.description}
                        key={index}
                        fontSize='12px'
                        width='80%'
                      >
                        <Box width={150}>
                          <a
                            href={stack?.[item.toLowerCase()]?.wikipage}
                            target='_blank'
                          >
                            <i
                              key={index}
                              className={`devicon-${
                                item.toLowerCase().split('/')[0]
                              }-plain colored`}
                              style={{
                                fontSize: '20px',
                                textShadow: '1px 1px black',
                              }}
                            >
                              {' '}
                              {item}{' '}
                            </i>
                          </a>
                        </Box>
                      </Tooltip>
                    ) : (
                      <Tooltip
                        label={stack?.[item.toLowerCase()]?.description}
                        key={index}
                      >
                        <Box width={150}>
                          <a
                            href={stack?.[item.toLowerCase()]?.wikipage}
                            target='_blank'
                          >
                            <i
                              key={index}
                              className={`devicon-${item.toLowerCase()}-original colored`}
                              style={{ fontSize: '20px' }}
                            >
                              {' '}
                              {item}{' '}
                            </i>
                          </a>
                        </Box>
                      </Tooltip>
                    )
                  )
                ) : (
                  <Tooltip
                    label={
                      stack?.[project?.technologies.toLowerCase()]?.description
                    }
                  >
                    <Box width={150}>
                      <a
                        href={
                          stack?.[project?.technologies.toLowerCase()]?.wikipage
                        }
                      >
                        <i
                          className={`devicon-${project?.technologies.toLowerCase()}-plain colored`}
                          style={{ fontSize: '22px' }}
                        >
                          {' '}
                          {project?.technologies}{' '}
                        </i>
                      </a>
                    </Box>
                  </Tooltip>
                )}
              </SimpleGrid>
            </Box>
            <Text my={6}><b>Project start date:</b> {project?.project_date?.replaceAll('-', '/')}</Text>
            <NextLink href='/projects'>
              <Button
                leftIcon={<ChevronLeftIcon />}
                bgGradient='linear(to-r, teal.500, green.500)'
                _hover={{ bgGradient: 'linear(to-r, teal.600, green.600)' }}
              >
                Projects
              </Button>
            </NextLink>
          </Container>
        </Layout>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: '', id: '' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  try {
    const res = await axios.get(
      `http://localhost:8000/api/project/${params.id}/${params.slug}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
        },
      }
    )
    const filePath = path.join(process.cwd(), 'tech_data.json')
    const jsonData = await fsPromises.readFile(filePath)
    const objectData = JSON.parse(jsonData.toString())
    return {
      props: {
        project: res.data,
        stack: objectData,
      },
    }
  } catch (error) {
    return {
      props: {
        project: [],
        stack: [],
      },
    }
  }
}

export default Project
