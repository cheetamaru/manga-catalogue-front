import { MangaTitle } from "~~/types/ApiTypes"

export const useMangaInfoPage = () => {
    const route = useRoute()
    const { fetchMangaItem } = useFetchMangaItem()

    const mangaTitle = ref<MangaTitle | null>()
    const pending = ref(false)
    const error = ref<any>()

    const fetch = async (id: string) => {
        const { data, pending: internalPending, error: internalError } = await fetchMangaItem(id)

        mangaTitle.value = data
        pending.value = internalPending
        error.value = internalError
    }

    const fetchByRoute = () => {
        if (Array.isArray(route.params.id)) {
            return
        }
        fetch(route.params.id)
    }

    const initPage = () => {
        fetchByRoute()
    }

    return {
        mangaTitle,
        pending,
        error,
        initPage,
        fetchByRoute,
    }   
}