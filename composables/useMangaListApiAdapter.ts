import { MangaListApiService } from "@/services/MangaListApiService"

export const useMangaListApiAdapter = () => {
    const nuxtApp = useNuxtApp()

    const mangaListApi = new MangaListApiService('/list/', nuxtApp.$httpClient)

    const fetchList = () => {
        return mangaListApi.fetchList()
    }

    return {
        fetchList,
    }
}