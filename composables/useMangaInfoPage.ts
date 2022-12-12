import { MangaTitle } from "~~/types/ApiTypes"

export const useMangaInfoPage = () => {
    const route = useRoute()
    const { fetchMangaItem } = useFetchMangaItem()

    const mangaTitle = ref<MangaTitle | null>()
    let pending = ref(false)
    const error = ref<any>()

    const fetch = (id: string) => {
        const { data, pending: internalPending, error: internalError } = fetchMangaItem(id)

        mangaTitle.value = data.value
        pending.value = internalPending.value
        error.value = internalError.value
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