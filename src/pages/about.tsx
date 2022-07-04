import HeroWithPhoto from '@/components/mollecules/HeroWithPhoto'
import Timeline from '@/components/organism/Timeline'
import Layout, { LayoutProps } from '@/components/templates/Layout'

import { timeline } from '@/libs/constants/timeline'
import { getMetaData } from '@/libs/metaData'
import { twclsx } from '@/libs/twclsx'

import { NextPage } from 'next'

const About: NextPage = () => {
  const meta = getMetaData({
    title: 'About Me',
    description: `A SMK student, a learner of Cloud Computing, Backend, and Computer Science. I like to learn something new and put the knowledge I have gained into an article.`,
    keywords: ['About Muhammad Ichsanul Fadhil'],
    og_image: 'https://ik.imagekit.io/uvma3bkbp/IMG_20220704_122659_yPxOWXqUb.jpg',
    og_image_alt: 'Muhammad Ichsanul Fadhil',
    slug: '/about',
    type: 'website'
  })

  return (
    <Layout {...(meta as LayoutProps)}>
      <HeroWithPhoto
        title='About Me'
        subtitle='Muhammad Ichsanul Fadhil'
        description={meta.description as string}
        img={{
          src: meta.openGraph?.images ? meta.openGraph.images[0].url : '',
          alt_title: 'Muhammad Ichsan'
        }}
      >
        <div className={twclsx('prose dark:prose-invert')}>
          <p className={twclsx('text-theme-700 dark:text-theme-200')}>
            I have liked computer science since I was 15 years old, self-taught learning with new knowledge is fun for
            me.
          </p>
          <blockquote>
            <style jsx>
              {`
                blockquote {
                  border-image: linear-gradient(to bottom, #3b82f6, #14b8a6) 1;
                }
              `}
            </style>
            <p className={twclsx('text-theme-700 dark:text-theme-200')}>
              Make the hereafter in your heart, the world in your hands, and death in your eyelids. ~ Imam Syafii
            </p>
          </blockquote>
        </div>
      </HeroWithPhoto>

      <section className={twclsx('')}>
        <h2 className={twclsx('mb-2')}>Timeline</h2>
        <p className={twclsx('max-w-prose mb-4')}>My education and career journey with a lot of experience in it.</p>
        <Timeline timeline={timeline} />
      </section>

      <section className={twclsx('pt-10 md:pt-10')}>
        <h2 className={twclsx('mb-4')}>Contact</h2>
        <p>
          Hi there, if you want to make a new friendship, bring your idea to reality, or just want to know more about
          me, please contact me on one of my social media account 👇.
        </p>
        <br></br>
        Thank You 😄
      </section>
    </Layout>
  )
}

export default About
