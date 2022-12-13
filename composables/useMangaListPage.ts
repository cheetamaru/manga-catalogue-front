export const useMangaListPage = () => {
    const { fetchMangaList } = useFetchMangaList()

    const statusOptions = ['finished', 'ongoing', 'hiatus', 'canceled', 'notstarted']

    const search = ref('')
    const status = ref()
    const page = ref(1)
    const ordering = ref()

    const orderingMap = {
        stratDateUp: 'startDate',
        startDateDown: '-startDate'
    }

    const orderingOptions = Object.values(orderingMap)

    const query = computed(() => {
        return {
            search: search.value || undefined,
            status: status.value,
            page: page.value,
            ordering: ordering.value
        }
    })

    const { data, pending, error, refresh } = fetchMangaList(query)

    const list = computed(() => data.value?.results || [])
    const total = computed(() => data.value?.count || 0)
    const totalPages = computed(() => Math.ceil(total.value / 4))

    return {
        fetch,
        status,
        search,
        list,
        pending,
        error,
        statusOptions,
        refresh,
        page,
        totalPages,
        ordering,
        orderingOptions,
    }
}