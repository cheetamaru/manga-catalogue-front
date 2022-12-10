import { AsyncDataExecuteOptions } from "nuxt/dist/app/composables/asyncData"
import { MangaTitle } from "~~/types/ApiTypes";
import { FetchListQuery, TestError, TestType } from "~~/types/test"

type IMangaApi = {
    fetchList: (query?: FetchListQuery) => Promise<{ data: TestType | null; error: TestError | null; pending: boolean; refresh: (opts?: AsyncDataExecuteOptions | undefined) => Promise<void>;}>
    fetchItem: (id: string) => Promise<{ data: MangaTitle | null; error: TestError | null; pending: boolean; refresh: (opts?: AsyncDataExecuteOptions | undefined) => Promise<void>;}>
}

export const useMangaListApiAdapter = (): IMangaApi => {
    const mangaListApi  = useNuxtApp().$api.mangaListApi

    const fetchList = async (query?: FetchListQuery) => {
        const { data, error, pending, refresh } = await useAsyncData<TestType, TestError>(() => mangaListApi.fetchList(query))

        return { data: data.value, error: error.value, pending: pending.value, refresh }
    }

    const fetchItem = async (id: string) => {
        const { data, error, pending, refresh } = await useAsyncData<MangaTitle, TestError>(() => mangaListApi.fetchItem(id))

        return { data: data.value, error: error.value, pending: pending.value, refresh }
    }

    return {
        fetchList,
        fetchItem,
    }
}
