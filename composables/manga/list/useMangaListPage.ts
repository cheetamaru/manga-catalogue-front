const limit = 10

const getTotalPages = (totalItems: number, limit: number) => {
  return Math.ceil(totalItems / limit)
}

export const useMangaListPage = () => {
  const { fetchMangaList } = useFetchManga()

  const {
    sidebar,
    toggleSidebar,
  } = useMangaListSidebar()

  const {
    search,
    page,
    query,
    onUpdateSearch,
    resetSidebarFilters,
    appendInnerIcon,
    appendIcon,
  } = useMangaListFilters()

  const { data, pending, error } = fetchMangaList(query)

  const list = computed(() => data.value?.results || [])
  const total = computed(() => data.value?.count || 0)
  const totalPages = computed(() => getTotalPages(total.value, limit))

  const { loading } = useDebouncedLoading(pending)

  const isListEmpty = computed(() => {
    return !list.value.length
  })

  const getMangaInfoRoute = (id: number | undefined) => {
    return {
      path: `/manga-info/${id}`,
    }
  }

  return {
    search,
    list,
    error,
    page,
    totalPages,
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
