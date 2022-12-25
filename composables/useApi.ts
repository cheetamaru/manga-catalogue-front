import { HttpClient } from '@/shared/services/api/HttpClient'
import { MangaApiService } from '~~/services/MangaApiService'

export const useApi = (httpClient: HttpClient) => {
  const mangaApi = new MangaApiService(httpClient)

  return {
    api: {
      mangaApi,
    },
  }
}
