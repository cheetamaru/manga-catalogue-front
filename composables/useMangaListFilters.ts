import type { MangaPublishingStatus, MangaOrderingOptionValue } from '~~/types/Types'

const useStatus = () => useState<MangaPublishingStatus | undefined>('status')
const usePage = () => useState<number>('page', () => 1)
const useOrdering = () => useState<MangaOrderingOptionValue | undefined>('ordering')

export const useMangaListFilters = () => {
  const router = useRouter()
  const route = useRoute()

  const { statusOptions, orderingOptions } = useMangaListFiltersOptions()
  const { search, onUpdateSearch } = useMangaListFiltersSearch()

  const status = useStatus()
  const page = usePage()
  const ordering = useOrdering()

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

  watch(() => route.query, () => {
    search.value = route.query.search ? String(route.query.search) : ''
    status.value = route.query.status ? String(route.query.status) as MangaPublishingStatus : undefined
    page.value = route.query.page ? Number(route.query.page) : 1
    ordering.value = route.query.ordering ? String(route.query.ordering) as MangaOrderingOptionValue : undefined
  }, {
    immediate: true,
  })

  const paramsToResetPageNumber = computed(() => [
    search.value,
    ordering.value,
    status.value,
  ])

  watch(paramsToResetPageNumber, () => {
    if (page.value === 1) {
      return
    }

    page.value = 1
  })

  const sidebarFilters = computed(() => [
    ordering.value,
    status.value,
  ])

  const areSidebarFiltersEmpty = computed(() => {
    return !sidebarFilters.value.some((el) => el)
  })

  const resetSidebarFilters = () => {
    status.value = undefined
    ordering.value = undefined
  }

  const { appendIcon, appendInnerIcon } = useMangaListSearchIcons(areSidebarFiltersEmpty)

  return {
    statusOptions,
    orderingOptions,
    search,
    status,
    page,
    ordering,
    query,
    onUpdateSearch,
    resetSidebarFilters,
    appendInnerIcon,
    appendIcon,
  }
}
