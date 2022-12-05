import { HttpClient } from "@/services/api/HttpClient"
import { useMangaListApi } from "~~/services/useMangaListApi"

export const useApi = (httpClient: HttpClient) => {
    const { mangaListApi } = useMangaListApi(httpClient)

    return {
        api: {
            mangaListApi
        }
    }
}