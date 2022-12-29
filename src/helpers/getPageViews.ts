import { getTokenFromUmami } from '@/helpers/getTokenFromUmami'
import umami from '@/libs/umami'

export interface PageViews {
  bounces: { value: number; change: number }
  pageviews: { value: number; change: number }
  totaltime: { value: number; change: number }
  unique: { value: number; change: number }
}

interface PageViewsReturn {
  isError: boolean
  data: number | null
}

const reducePageViewsToNumber = (arr: Array<PageViews>) =>
  arr.reduce((acc, curVal) => {
    const newVal = acc.pageviews.value + curVal.pageviews.value

    acc.pageviews.value = newVal
    return acc
  }).pageviews.value

export const getPageViews = async (slug: string): Promise<PageViewsReturn> => {
  const end_date = new Date().getTime()

  const token = await getTokenFromUmami()
  if (!token) {
    return { isError: true, data: null }
  }
  const end_date = new Date()

  const websitesId = 'ed4514ff-0629-43ad-bff0-5bba16e9f785'
  // please change to your first deploy umami app
  const firtsDeployedAppAtMs = 1671642000000
  const config = { headers: { Authorization: `Bearer ${token}` } }

  const articleURL = `/api/websites/${websitesId}/stats?start_at=${firtsDeployedAppAtMs}&end_at=${end_date.getTime()}&url=/blog/${slug.toString()}`
  const blogURL = `/api/websites/${websitesId}/stats?start_at=${firtsDeployedAppAtMs}&end_at=${end_date.getTime()}&url=/blog/${slug.toString()}`

  const responseArticle = await umami.get<PageViews>(articleURL, config)
  const responseBlog = await umami.get<PageViews>(blogURL, config)

  const mergedResponseData = Object.values([responseArticle.data, responseBlog.data])

  const data = reducePageViewsToNumber(mergedResponseData)

  return {
    isError: false,
    data
  }
}
