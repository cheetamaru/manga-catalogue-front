export const useMangaListPage = () => {
    const { fetchMangaList } = useFetchMangaList()

    const statusOptions = ['finished', 'ongoing', 'hiatus', 'canceled', 'notstarted']

    const search = ref('')
    const status = ref()

    const query = computed(() => {
        return {
            search: search.value || undefined,
            status: status.value
        }
    })

    const { data, pending, error, refresh } = fetchMangaList(query)

    const list = computed(() => data.value?.results || [])

    return {
        fetch,
        status,
        search,
        list,
        pending,
        error,
        statusOptions,
        refresh,
    }
}