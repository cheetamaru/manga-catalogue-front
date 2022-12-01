import { HttpClient } from "@/services/api/HttpClient"
import { MangaListApiService } from "@/services/MangaListApiService"

export const useMangaListApi = (httpClient: HttpClient) => {
    const mangaListApi = new MangaListApiService(httpClient)

    return {
        mangaListApi,
    }
}