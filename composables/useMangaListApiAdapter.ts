import { AsyncDataExecuteOptions } from 'nuxt/dist/app/composables/asyncData'
import { MangaTitle } from '~~/types/ApiTypes';
import { FetchListQuery, TestError, TestType } from '~~/types/test'
import { Ref, ComputedRef } from 'vue'

type IMangaApi = {
    fetchList: (query?: ComputedRef<FetchListQuery>) => { data: Ref<TestType | null>; error: Ref<TestError | null>; pending: Ref<boolean>; refresh: (opts?: AsyncDataExecuteOptions | undefined) => Promise<void>;};
    fetchItem: (id: string) => { data: Ref<MangaTitle | null>; error: Ref<TestError | null>; pending: Ref<boolean>; refresh: (opts?: AsyncDataExecuteOptions | undefined) => Promise<void>;};
}

export const useMangaListApiAdapter = (): IMangaApi => {
  const mangaListApi = useNuxtApp().$api.mangaListApi

  const fetchList = (query?: ComputedRef<FetchListQuery>) => {
    const { data, error, pending, refresh } = useAsyncData<TestType, TestError>('abc', () => mangaListApi.fetchList(query?.value), {
      lazy: true,
      watch: [query || {}],
    })

    return { data, error, pending, refresh }
  }

  const fetchItem = (id: string) => {
    const { data, error, pending, refresh } = useAsyncData<MangaTitle, TestError>('def', () => mangaListApi.fetchItem(id), {
      lazy: false,
    })

    return { data, error, pending, refresh }
  }

  return {
    fetchList,
    fetchItem,
  }
}
