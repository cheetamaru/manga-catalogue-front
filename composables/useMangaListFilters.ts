import debounce from 'lodash.debounce'
import type { MangaPublishingStatus, MangaOrderingOptionValue } from '~~/types/Types'

type MangaPublishingStatusOption = {
    title: string;
    value: MangaPublishingStatus
}

type MangaOrderingOption = {
    title: string;
    value: MangaOrderingOptionValue;
}

const useSearch = () => useState<string>('search', () => '')
const useStatus = () => useState<MangaPublishingStatus | undefined>('status')
const usePage = () => useState<number>('page', () => 1)
const useOrdering = () => useState<MangaOrderingOptionValue | undefined>('ordering')

export const useMangaListFilters = () => {
  const router = useRouter()
  const route = useRoute()

  const { getStatusNameByValue } = useMangaPublishingStatusName()

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

  const search = useSearch()
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
    page.value = 1
  })

  const filters = computed(() => [
    ordering.value,
    status.value,
  ])

  const isFilterEmpty = computed(() => {
    return !filters.value.some((el) => el)
  })

  const updateSearch = (val: string) => {
    search.value = val
  }

  const debouncedUpdateSearch = debounce(updateSearch, 300)

  const onSearch = (val: string) => {
    if (!val) {
      debouncedUpdateSearch.cancel()
      updateSearch(val)
      return
    }

    debouncedUpdateSearch(val)
  }

  const resetFilters = () => {
    status.value = undefined
    ordering.value = undefined
  }

  const appendInnerIcon = computed(() => {
    return isFilterEmpty.value ? undefined : 'mdi-delete-sweep'
  })

  const appendIcon = computed(() => {
    return isFilterEmpty.value ? 'mdi-filter-menu-outline' : 'mdi-filter-menu'
  })

  return {
    statusOptions,
    orderingOptions,
    search,
    status,
    page,
    ordering,
    query,
    isFilterEmpty,
    onSearch,
    resetFilters,
    appendInnerIcon,
    appendIcon,
  }
}
