import { ApiService } from "~~/services/api/ApiSerice"
import { useMangaListApi } from "~~/services/useMangaListApi"

export default defineNuxtPlugin(() => {
    const api = new ApiService()
    const { mangaListApi } = useMangaListApi(useNuxtApp().$httpClient)

    api.setApi('mangaApi', mangaListApi)

    return {
        provide: {
            api,
        }
    }
})