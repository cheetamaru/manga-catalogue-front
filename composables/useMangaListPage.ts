import debounce from 'lodash.debounce'

export const useMangaListPage = () => {
  const router = useRouter()
  const route = useRoute()

  const { fetchMangaList } = useFetchMangaList()
    
  const statusOptions = [{
    title: 'finished',
    value: 'finished',
  },
  {
    title: 'ongoing',
    value: 'ongoing',
  },
  {
    title: 'hiatus',
    value: 'hiatus',
  },
  {
    title: 'canceled',
    value: 'canceled',
  },
  {
    title: 'notstarted',
    value: 'notstarted',
  }]

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
  const totalPages = computed(() => Math.ceil(total.value / 10))

  const loading = ref(false)

  const setLoading = (val: boolean) => {
    loading.value = val
  }

  const debouncedSetLoading = debounce(setLoading, 300)

  watch(pending, (val) => {
    debouncedSetLoading(val)
  })

  const updateSearch = (val: string) => {
    search.value = val
  }
  
  const debouncedUpdateSearch = debounce(updateSearch, 100)
  
  const onSearch = (val) => {
    debouncedUpdateSearch(val)
  }  

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
    loading,
    onSearch,
  }
}
