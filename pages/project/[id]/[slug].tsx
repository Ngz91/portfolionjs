import { NextRouter, useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import {
  Box,
  SimpleGrid,
  Tooltip,
  Heading,
  Spinner,
  Text,
  Button,
} from '@chakra-ui/react'
import fsPromises from 'fs/promises'
import Layout from '../../../components/layouts/article'
import path from 'path'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

export type ProjectProps = {
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

const Project: NextPage<ProjectProps> = ({ project, stack }) => {
  const router: NextRouter = useRouter()

  return (
    <>
      <Head>
        <title>Nevio&apos;s Portfolio | {project?.name}</title>
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
                `https://ngzportfolioapi.herokuapp.com/${project?.image?.replace(
                  '/',
                  ''
                )}` || '/vercel.svg'
              }
              width={545}
              height={350}
              alt={project?.name}
            />
          </Box>
          <Text align='justify' mt={3}>
            {project?.description}
          </Text>
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
          <Stack project={project} stack={stack} />
          <Text my={6}>
            <b>Project start date:</b>{' '}
            {project?.project_date?.replaceAll('-', '/')}
          </Text>
          <NextLink href='/projects'>
            <Button
              leftIcon={<ChevronLeftIcon />}
              bgGradient='linear(to-r, teal.500, green.500)'
              _hover={{ bgGradient: 'linear(to-r, teal.600, green.600)' }}
            >
              Projects
            </Button>
          </NextLink>
        </Layout>
      )}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'klickwell', id: '3' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  try {
    const res = await axios.get(
      `https://ngzportfolioapi.herokuapp.com/api/project/${params.id}/${params.slug}`,
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
