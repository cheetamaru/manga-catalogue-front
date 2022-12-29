import type { AsyncDataOptions } from 'nuxt/dist/app/composables/asyncData'
import type { MangaTitle } from '~~/types/ApiTypes';
import type { MangaListFetchQuery, ResponseError, MangaListResponse } from '~~/types/Types'
import type { ComputedRef } from 'vue'
import type { IMangaApiAdapter } from '@/ports/IMangaApiAdapter'

export const useMangaApiAdapter = (): IMangaApiAdapter => {
  const mangaApi = useNuxtApp().$api.mangaApi

  const fetchList = (query: ComputedRef<MangaListFetchQuery>, asyncDataOptions?: AsyncDataOptions<MangaListResponse>) => {
    return useAsyncData<MangaListResponse, ResponseError>(() => mangaApi.fetchList(query?.value), asyncDataOptions)
  }

  const fetchItem = (id: string, asyncDataOptions?: AsyncDataOptions<MangaTitle>) => {
    return useAsyncData<MangaTitle, ResponseError>(() => mangaApi.fetchItem(id), asyncDataOptions)
  }

  return {
    fetchList,
    fetchItem,
  }
}
