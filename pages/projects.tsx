import { NextPage, GetStaticProps } from 'next'
import { SimpleGrid, Heading } from '@chakra-ui/react'

import axios from 'axios'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { ProjectsGridItem } from '../components/grid-item'

type projectProps = {
  projects: {
    id?: number
    name?: string
    description?: string
    brief_description?: string
    technologies?: any
    project_date?: string
  }
}

const Projects: NextPage<projectProps> = ({ projects }) => {
  type T = keyof typeof projects

  return (
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
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        {Object.keys(projects).map((item: string) => (
          <Section key={projects[item as T].id}>
            <ProjectsGridItem
              title={projects[item as T].name}
              id={projects[item as T].id}
              slug={projects[item as T].slug}
              brief_desc={projects[item as T].brief_description}
              thumbnail={`https://ngzportfolioapi.herokuapp.com${projects[item as T].image}`}
            />
          </Section>
        ))}
      </SimpleGrid>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await axios.get('https://ngzportfolioapi.herokuapp.com/api/projects/', {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36',
      },
    })
    return {
      props: {
        projects: res.data,
      },
    }
  } catch (error) {
    return {
      props: {
        projects: [],
      },
    }
  }
}

export default Projects
