export const useMangaListPage = () => {
  const router = useRouter()
  const route = useRoute()

  const { fetchMangaList } = useFetchMangaList()
    
  const statusOptions = ['finished', 'ongoing', 'hiatus', 'canceled', 'notstarted']

  const search = ref(route.query.search ? String(route.query.search) : '')
  const status = ref(route.query.status ? String(route.query.status) : undefined)
  const page = ref<number | undefined>(route.query.page ? Number(route.query.page) : 1)
  const ordering = ref(route.query.ordering ? String(route.query.ordering) : undefined)

  const orderingMap = {
    stratDateUp: 'startDate',
    startDateDown: '-startDate',
  }

  const orderingOptions = Object.values(orderingMap)

  const query = computed(() => {
    return {
      search: search.value || undefined,
      status: status.value,
      page: page.value,
      ordering: ordering.value,
    }
  })

  watch(query, (val) => {
    const newQuery = {
      page: val.page === 1 ? undefined : Number(val.page),
      status: val.status || undefined,
      ordering: val.ordering || undefined,
      search: val.search || undefined,
    }

    router.replace({ query: newQuery })
  })

  const paramsToResetPageNumber = computed(() => [
    search.value,
    ordering.value,
    status.value,
  ])

  watch(paramsToResetPageNumber, () => {
    page.value = 1
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
