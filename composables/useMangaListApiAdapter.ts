import { AsyncDataExecuteOptions } from "nuxt/dist/app/composables/asyncData"
import { MangaTitle } from "~~/types/ApiTypes";
import { FetchListQuery, TestError, TestType } from "~~/types/test"
import { Ref } from "vue"

type IMangaApi = {
    fetchList: (query?: FetchListQuery) => { data: Ref<TestType | null>; error: Ref<TestError | null>; pending: Ref<boolean>; refresh: (opts?: AsyncDataExecuteOptions | undefined) => Promise<void>;};
    fetchItem: (id: string) => { data: Ref<MangaTitle | null>; error: Ref<TestError | null>; pending: Ref<boolean>; refresh: (opts?: AsyncDataExecuteOptions | undefined) => Promise<void>;};
}

export const useMangaListApiAdapter = (): IMangaApi => {
    const mangaListApi  = useNuxtApp().$api.mangaListApi

    const fetchList = (query?: FetchListQuery) => {
        const { data, error, pending, refresh } = useAsyncData<TestType, TestError>('abc', () => mangaListApi.fetchList(query), {
            lazy: true,
            default: () => ({
                results: []
            })
        })

        return { data, error, pending, refresh }
    }

    const fetchItem = (id: string) => {
        const { data, error, pending, refresh } = useAsyncData<MangaTitle, TestError>('def', () => mangaListApi.fetchItem(id), {
            lazy: true,
        })

        return { data, error, pending, refresh }
    }

    return {
        fetchList,
        fetchItem,
    }
}
