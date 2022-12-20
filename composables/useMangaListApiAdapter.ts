import type { AsyncData } from 'nuxt/dist/app/composables/asyncData'
import type { MangaTitle } from '~~/types/ApiTypes';
import type { MangaListFetchQuery, ResponseError, MangaListResponse } from '~~/types/Types'
import type { ComputedRef } from 'vue'

type IMangaApi = {
    fetchList: (query?: ComputedRef<MangaListFetchQuery>) => AsyncData<MangaListResponse, ResponseError | null>;
    fetchItem: (id: string) => AsyncData<MangaTitle, ResponseError | null>
}

export const useMangaListApiAdapter = (): IMangaApi => {
  const mangaListApi = useNuxtApp().$api.mangaListApi

  const fetchList = (query?: ComputedRef<MangaListFetchQuery>) => {
    return useAsyncData<MangaListResponse, ResponseError>(() => mangaListApi.fetchList(query?.value), {
      lazy: true,
      watch: [query || {}],
    })
  }

  const fetchItem = (id: string) => {
    return useAsyncData<MangaTitle, ResponseError>(() => mangaListApi.fetchItem(id), {
      lazy: true,
    })
  }

  return {
    fetchList,
    fetchItem,
  }
}
