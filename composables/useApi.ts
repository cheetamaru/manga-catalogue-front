import { HttpClient } from "@/shared/services/api/HttpClient"
import { MangaListApiService } from "@/services/MangaListApiService"

export const useApi = (httpClient: HttpClient) => {
    const mangaListApi = new MangaListApiService(httpClient)

    return {
        api: {
            mangaListApi
        }
    }
}