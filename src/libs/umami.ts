import Axios from 'axios'

const UMAMI_URL = 'umami.taufikcrisnawan.dev'

const headers = { 'Content-Type': 'application/json' }

const umami = Axios.create({
  baseURL: UMAMI_URL,
  headers
})

export default umami
