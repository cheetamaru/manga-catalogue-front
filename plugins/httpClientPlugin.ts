import { HttpClient } from "@/services/api/HttpClient"
import { useMangaListApi } from "~~/services/useMangaListApi"

export default defineNuxtPlugin(() => {
    const baseURL = 'http://127.0.0.1:8000/api'

    const fetchClient = $fetch.create({ baseURL })

    const httpClient = new HttpClient(fetchClient)

    const { mangaListApi } = useMangaListApi(httpClient)

    httpClient.setSubClient('mangaApi', mangaListApi)

    return {
        provide: {
            httpClient,
        }
    }
})