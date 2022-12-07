import { AsyncDataExecuteOptions } from "nuxt/dist/app/composables/asyncData"
import { MangaTitle } from "~~/types/ApiTypes"
import { TestError, TestType } from "~~/types/test"

type IMangaApi = {
    fetchList: () => Promise<{ data: MangaTitle[]; error: TestError | null; pending: boolean; refresh: (opts?: AsyncDataExecuteOptions | undefined) => Promise<void>;}>
}

export const useMangaListApiAdapter = (): IMangaApi => {
    const mangaListApi  = useNuxtApp().$api.mangaListApi

    const fetchList = async () => {
        const { data, error, pending, refresh } = await useAsyncData<TestType, TestError>(() => mangaListApi.fetchList())

        return { data: data.value?.results || [], error: error.value, pending: pending.value, refresh }
    }

    return {
        fetchList,
    }
}
