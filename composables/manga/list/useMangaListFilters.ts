import { LocationQuery } from 'vue-router'
import type { MangaPublishingStatus, MangaOrderingOptionValue, MangaListFetchQuery } from '~~/types/Types'

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

  const query = computed<MangaListFetchQuery>(() => {
    return {
      search: search.value || undefined,
      status: status.value,
      page: page.value,
      ordering: ordering.value,
    }
  })

  const composeNewQuery = (query: MangaListFetchQuery) => {
    return {
      page: query.page === 1 ? undefined : Number(query.page),
      status: query.status || undefined,
      ordering: query.ordering || undefined,
      search: query.search || undefined,
    }
  }

  const updateQueryStateByRoute = (routeQuery: LocationQuery) => {
    search.value = routeQuery.search ? String(routeQuery.search) : ''
    status.value = routeQuery.status ? String(routeQuery.status) as MangaPublishingStatus : undefined
    page.value = routeQuery.page ? Number(routeQuery.page) : 1
    ordering.value = routeQuery.ordering ? String(routeQuery.ordering) as MangaOrderingOptionValue : undefined
  }

  watch(query, (val) => {
    const newQuery = composeNewQuery(val)

    router.push({ query: newQuery })
  })

  watch(() => route.query, (val) => {
    updateQueryStateByRoute(val)
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
