import { HttpClient } from '@/shared/services/api/HttpClient'
import { errorMessage } from '~~/constants'
import { getBaseApiUrl } from '~~/shared/utils/getBaseApiUrl'

export default defineNuxtPlugin(() => {
  const baseURL = getBaseApiUrl()

  if (!baseURL) {
    throw new Error(errorMessage.httpClientPluginUrlNotFound)
  }

  const fetchClient = $fetch.create({ baseURL })

  const httpClient = new HttpClient(fetchClient)

  return {
    provide: {
      httpClient,
    },
  }
})
