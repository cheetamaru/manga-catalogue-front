export const useMangaListPage = () => {
    const { fetchMangaList } = useFetchMangaList()

    const statusOptions = ['finished', 'ongoing', 'hiatus', 'canceled', 'notstarted']

    const search = ref('')
    const status = ref()

    const watchChanges = computed(() => [search.value, status.value])

    watch(watchChanges, () => {
        fetch()
    })

    let data = ref<any>([])
    let pending = ref(false)
    const error = ref<any>()
    const refresh = ref()

    const list = computed(() => data.value?.results || [])

    const fetch = () => {
        const { data: intData, pending: internalPending, error: internalError, refresh: inter } = fetchMangaList({
            search: search.value || undefined,
            status: status.value
        })


        data.value = intData.value
        pending.value = internalPending.value
        error.value = internalError.value
        refresh.value = inter
    }

    const initPage = () => {
        return fetch()
    }

    return {
        fetch,
        initPage,
        status,
        search,
        list,
        pending,
        error,
        statusOptions,
        refresh,
    }
}