import type { AsyncData, AsyncDataOptions } from 'nuxt/dist/app/composables/asyncData'
import type { MangaTitle } from '~~/types/ApiTypes';
import type { MangaListFetchQuery, ResponseError, MangaListResponse } from '~~/types/Types'
import type { ComputedRef } from 'vue'

type IMangaApi = {
    fetchList: (query: ComputedRef<MangaListFetchQuery>, asyncDataOptions?: AsyncDataOptions<MangaListResponse>) => AsyncData<MangaListResponse, ResponseError | null>;
    fetchItem: (id: string, asyncDataOptions?: AsyncDataOptions<MangaTitle>) => AsyncData<MangaTitle, ResponseError | null>
}

export const useMangaListApiAdapter = (): IMangaApi => {
  const mangaListApi = useNuxtApp().$api.mangaListApi

  const fetchList = (query: ComputedRef<MangaListFetchQuery>, asyncDataOptions?: AsyncDataOptions<MangaListResponse>) => {
    return useAsyncData<MangaListResponse, ResponseError>(() => mangaListApi.fetchList(query?.value), asyncDataOptions)
  }

  const fetchItem = (id: string, asyncDataOptions?: AsyncDataOptions<MangaTitle>) => {
    return useAsyncData<MangaTitle, ResponseError>(() => mangaListApi.fetchItem(id), asyncDataOptions)
  }

  return {
    fetchList,
    fetchItem,
  }
}
