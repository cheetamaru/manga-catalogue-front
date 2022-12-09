export const useMangaListPage = () => {
    const { fetchMangaList } = useFetchMangaList()

    const statusOptions = ['finished', 'ongoing', 'hiatus', 'canceled', 'notstarted']

    const search = ref('')
    const status = ref()

    const watchChanges = computed(() => search.value + status.value)

    watch(watchChanges, () => {
        fetch()
    })

    const list = ref<any>([])
    const pending = ref(false)
    const error = ref<any>()

    const fetch = async () => {
        const { data, pending: internalPending, error: internalError } = await fetchMangaList({
            search: search.value || undefined,
            status: status.value
        })

        list.value = data
        pending.value = internalPending
        error.value = internalError
    }

    const initPage = () => {
        fetch()
    }

    return {
        fetch,
        initPage,
        status,
        search,
        list,
        pending,
        error,
        statusOptions
    }
}