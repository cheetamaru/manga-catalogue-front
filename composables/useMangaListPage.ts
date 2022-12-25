import debounce from 'lodash.debounce'
import type { MangaTitle } from '~~/types/ApiTypes'
import type { MangaPublishingStatus } from '~~/types/Types'

export const useMangaListPage = () => {
  const router = useRouter()
  const route = useRoute()

  const { fetchMangaList } = useFetchManga()
    
  const { getStatusNameByValue } = useMangaPublishingStatusName()

  type MangaPublishingStatusOption = {
    title: string;
    value: MangaPublishingStatus
  }

  const availableStatuses: MangaPublishingStatus[] = [
    'finished',
    'ongoing',
    'hiatus',
    'canceled',
    'notstarted',
  ]

  const statusOptions: MangaPublishingStatusOption[] = availableStatuses.map((el) => {
    return {
      title: getStatusNameByValue(el),
      value: el,
    }
  })

  type MangaOrderingOption = {
    title: string;
    value: keyof MangaTitle | `-${keyof MangaTitle}`;
  }

  const orderingOptions: MangaOrderingOption[] = [
    {
      title: 'Start date asc',
      value: 'startDate',
    },
    {
      title: 'Start date desc',
      value: '-startDate',
    },
    {
      title: 'End date asc',
      value: 'endDate',
    },
    {
      title: 'End date desc',
      value: '-endDate',
    },
  ]

  const search = ref(route.query.search ? String(route.query.search) : '')
  const status = ref(route.query.status ? String(route.query.status) : undefined)
  const page = ref<number | undefined>(route.query.page ? Number(route.query.page) : 1)
  const ordering = ref(route.query.ordering ? String(route.query.ordering) : undefined)

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

  const filters = computed(() => [
    ordering.value,
    status.value,
  ])

  const isFilterEmpty = computed(() => {
    return !filters.value.some((el) => el)
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
    if (!pending) {
      setLoading(pending)
      return
    }
    
    debouncedSetLoading(val)
  })

  const updateSearch = (val: string) => {
    search.value = val
  }
  
  const debouncedUpdateSearch = debounce(updateSearch, 1000)
  
  const onSearch = (val: string) => {
    if (!val) {
      updateSearch(val)
      return
    }
    
    debouncedUpdateSearch(val)
  }

  const resetFilters = () => {
    status.value = undefined
    ordering.value = undefined
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
    isFilterEmpty,
    resetFilters,
  }
}
