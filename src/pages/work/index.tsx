import Card from '@/components/atoms/Card'
import Hero from '@/components/mollecules/Hero'
import ProjectCard from '@/components/mollecules/ProjectCard'
import Searchbar from '@/components/mollecules/Searchbar'
import Layout, { LayoutProps } from '@/components/templates/Layout'

import { PortfolioHeadProps } from '@/data/portfolio/portfolio.type'
import getPortfolio from '@/helpers/getPortfolio'
import useSearch from '@/hooks/useSearch'
import { getMetaData } from '@/libs/metaData'
import { getNewestPortfolio } from '@/libs/sortPortfolio'
import { twclsx } from '@/libs/twclsx'

import { GetStaticProps, NextPage } from 'next'

interface ProjectPageProps {
  projects: Array<PortfolioHeadProps>
}

const meta = getMetaData({
  title: 'My Work',
  description: `The work/projects that I have done so far have been done individually and with a team.`,
  keywords: ['Muhammad Ichsan Work', 'Muhammad Ichsan'],
  og_image: `https://og-image.vercel.app/**Portfolio%20%E2%80%94%20Rizki%20M%20Citra**%3Cbr%20%20%2F%3EProof%20Of%20Work.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg`,
  og_image_alt: 'My Work — Muhammad Ichsan',
  slug: '/work',
  type: 'website'
})

const ProjectPage: NextPage<ProjectPageProps> = ({ projects }) => {
  const { query, handleChange, filteredData } = useSearch<ProjectPageProps['projects']>(projects, 'portfolio')

  return (
    <Layout {...(meta as LayoutProps)}>
      <Hero title={meta.title as string} description={meta.description as string} />
      <Searchbar onChange={handleChange} value={query} />

      <div className={twclsx('flex flex-col gap-8')}>
        {query.length === 0 && projects.length > 0 ? (
          <section>
            <div className={twclsx('grid grid-cols-1 md:grid-cols-2', 'gap-4 flex-auto')}>
              {projects.map((p) => (
                <Card key={p.title}>
                  <ProjectCard {...p} />
                </Card>
              ))}
            </div>
          </section>
        ) : null}

        {query.length > 0 && (
          <section>
            <h2 className={twclsx('mb-4')}>Search My Work</h2>
            {filteredData.length > 0 ? (
              <div className={twclsx('grid grid-cols-1 md:grid-cols-2', 'gap-4 flex-auto')}>
                {filteredData.map((p) => (
                  <Card key={p.title}>
                    <ProjectCard {...p} />
                  </Card>
                ))}
              </div>
            ) : (
              <p>No work found, maybe you typo?</p>
            )}
          </section>
        )}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<ProjectPageProps> = async () => {
  const response = await getPortfolio()

  const projects = response.sort(getNewestPortfolio)

  return {
    props: {
      projects
    }
  }
}

export default ProjectPage
