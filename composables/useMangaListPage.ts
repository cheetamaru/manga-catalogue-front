const limit = 10

export const useMangaListPage = () => {
  const { fetchMangaList } = useFetchManga()

  const {
    sidebar,
    toggleSidebar,
  } = useMangaListSidebar()

  const {
    search,
    status,
    page,
    ordering,
    query,
    onUpdateSearch,
    resetSidebarFilters,
    appendInnerIcon,
    appendIcon,
  } = useMangaListFilters()

  const { data, pending, error } = fetchMangaList(query)

  const list = computed(() => data.value?.results || [])
  const total = computed(() => data.value?.count || 0)
  const totalPages = computed(() => Math.ceil(total.value / limit))

  const { loading } = useDebouncedLoading(pending)

  const isListEmpty = computed(() => {
    return !list.value.length
  })

  const getMangaInfoRoute = (id: number | undefined) => {
    return { path: `/manga-info/${id}` }
  }

  return {
    fetch,
    status,
    search,
    list,
    pending,
    error,
    page,
    totalPages,
    ordering,
    loading,
    onUpdateSearch,
    resetSidebarFilters,
    sidebar,
    isListEmpty,
    appendInnerIcon,
    appendIcon,
    toggleSidebar,
    getMangaInfoRoute,
  }
}
