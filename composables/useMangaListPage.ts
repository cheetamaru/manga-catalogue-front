import debounce from 'lodash.debounce'
import { MangaPublishingStatus } from '~~/types/Types'

export const useMangaListPage = () => {
  const router = useRouter()
  const route = useRoute()

  const { fetchMangaList } = useFetchManga()

  const {
    search,
    status,
    page,
    ordering,
  } = useMangaListFilters()

  search.value = route.query.search ? String(route.query.search) : ''
  status.value = route.query.status ? String(route.query.status) as MangaPublishingStatus : undefined
  page.value = route.query.page ? Number(route.query.page) : 1
  ordering.value = route.query.ordering ? String(route.query.ordering) : undefined

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

    router.push({ query: newQuery })
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
  
  const debouncedUpdateSearch = debounce(updateSearch, 100)
  
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

  const isListEmpty = computed(() => {
    return !list.value.length
  })

  const appendInnerIcon = computed(() => {
    return isFilterEmpty.value ? undefined : 'mdi-delete-sweep'
  })

  const appendIcon = computed(() => {
    return isFilterEmpty.value ? 'mdi-filter-menu-outline' : 'mdi-filter-menu'
  })

  const getToPath = (id: number | undefined) => {
    return { path: `/manga-info/${id}` }
  }

  const {
    sidebar,
    toggleSidebar,
  } = useMangaListSidebar()

  return {
    fetch,
    status,
    search,
    list,
    pending,
    error,
    refresh,
    page,
    totalPages,
    ordering,
    loading,
    onSearch,
    isFilterEmpty,
    resetFilters,
    sidebar,
    isListEmpty,
    appendInnerIcon,
    appendIcon,
    toggleSidebar,
    getToPath,
  }
}
