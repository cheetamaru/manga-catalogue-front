import { HttpClient } from '@/shared/services/api/HttpClient'
import { getBaseApiUrl } from '~~/shared/utils/getBaseApiUrl'

export default defineNuxtPlugin(() => {
  const baseURL = getBaseApiUrl()

  if (!baseURL) {
    throw new Error('[httpClientPlugin] Base Api Url Not Found')
  }

  const fetchClient = $fetch.create({ baseURL })

  const httpClient = new HttpClient(fetchClient)

  return {
    provide: {
      httpClient,
    },
  }
})
