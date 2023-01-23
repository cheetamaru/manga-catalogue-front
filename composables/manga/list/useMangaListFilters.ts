import { LocationQuery } from 'vue-router'
import type { MangaPublishingStatus, MangaOrderingOptionValue, MangaListFetchQuery } from '~~/types/Types'

const defaultPage = 1

const useStatus = () => useState<MangaPublishingStatus | undefined>('status')
const usePage = () => useState<number>('page', () => defaultPage)
const useOrdering = () => useState<MangaOrderingOptionValue | undefined>('ordering')

export const useMangaListFilters = () => {
  const router = useRouter()
  const route = useRoute()

  const { statusOptions, orderingOptions } = useMangaListFiltersOptions()
  const { search, onUpdateSearch } = useMangaListFiltersSearch()

  const status = useStatus()
  const page = usePage()
  const ordering = useOrdering()

  const stateQuery = computed<MangaListFetchQuery>(() => {
    return {
      search: search.value || undefined,
      status: status.value,
      page: page.value,
      ordering: ordering.value,
    }
  })

  const composeNewQuery = (query: MangaListFetchQuery) => {
    return {
      page: query.page === defaultPage ? undefined : Number(query.page),
      status: query.status || undefined,
      ordering: query.ordering || undefined,
      search: query.search || undefined,
    }
  }

  const updateQueryStateByRoute = (routeQuery: LocationQuery) => {
    search.value = routeQuery.search ? String(routeQuery.search) : ''
    status.value = routeQuery.status ? String(routeQuery.status) as MangaPublishingStatus : undefined
    page.value = routeQuery.page ? Number(routeQuery.page) : defaultPage
    ordering.value = routeQuery.ordering ? String(routeQuery.ordering) as MangaOrderingOptionValue : undefined
  }

  watch(stateQuery, (val) => {
    const query = composeNewQuery(val)

    router.push({ query })
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
    if (page.value === defaultPage) {
      return
    }

    page.value = defaultPage
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
    query: stateQuery,
    onUpdateSearch,
    resetSidebarFilters,
    appendInnerIcon,
    appendIcon,
  }
}
