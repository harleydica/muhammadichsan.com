import useTheme from '@/hooks/useTheme'
import { isDev } from '@/libs/constants/environmentState'
import { twclsx } from '@/libs/twclsx'

import Giscus from '@giscus/react'
import { memo } from 'react'

const GiscusComment = () => {
  const { theme } = useTheme()

  if (isDev) return null

  return (
    <figure className={twclsx('mt-4 md:mt-8')}>
      <Giscus
        theme={theme}
        emitMetadata='0'
        inputPosition='top'
        repo='ichsanputr/muhammadichsan.com'
        repoId='R_kgDOHmDs_w'
        category='General'
        categoryId='DIC_kwDOHmDs_84CTTg7'
        mapping='pathname'
        reactionsEnabled='0'
        loading='lazy'
      />
    </figure>
  )
}

export default memo(GiscusComment)
