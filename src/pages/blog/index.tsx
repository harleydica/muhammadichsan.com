// import Card from '@/components/atoms/Card'
// import BlogCard from '@/components/mollecules/BlogCard'
import Hero from '@/components/mollecules/Hero'
import Searchbar from '@/components/mollecules/Searchbar'
import Layout, { LayoutProps } from '@/components/templates/Layout'

import { Blogs } from '@/data/blog/blog.type'
import { getBlog } from '@/helpers/getBlog'
// import { getPageViewsEach } from '@/helpers/getPageViewsEach'
import useSearch from '@/hooks/useSearch'
// import { isProd } from '@/libs/constants/environmentState'
import { getMetaData } from '@/libs/metaData'

// import { getNewestBlog } from '@/libs/sortBlog'
// import { twclsx } from '@/libs/twclsx'
// import umamiClient from '@/libs/umamiClient'
import { GetStaticProps, NextPage } from 'next'
import readingTime from 'reading-time'

interface BlogPageProps {
  allBlogs: Array<Blogs>
}

const meta = getMetaData({
  title: 'Blog',
  description: `I write blog once in a while, talks about Cloud Computing, Computer Science and Backend related topics, I like to share my knowledge and experience throught writing blog.`,
  keywords: ['Rizki Maulana Citra', 'Rizki M Citra', 'Rizkicitra', 'Rizki Citra', 'rizkicitra.dev'],
  og_image:
    'https://og-image.vercel.app/**Blog%20%E2%80%94%20Rizki%20M%20Citra**%3Cbr%20%2F%3ETalks%20about%20Frontend%20Development%20Related%20Topics.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg',
  og_image_alt: 'Blog — Rizki M Citra',
  slug: '/blog',
  type: 'website'
})

const BlogPage: NextPage<BlogPageProps> = ({ allBlogs }) => {
  const { query, handleChange } = useSearch<BlogPageProps['allBlogs']>(allBlogs, 'blog')

  return (
    <Layout {...(meta as LayoutProps)}>
      <Hero title='Blog Muhammad Ichsan' description={meta.description as string} />

      <Searchbar onChange={handleChange} value={query} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const response = await getBlog()

  const allBlogs = response.map((r) => ({ ...r.header, est_read: readingTime(r.content).text }))
  return {
    props: {
      allBlogs
    }
  }
}

export default BlogPage
