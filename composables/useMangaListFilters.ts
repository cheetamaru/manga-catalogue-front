import type { MangaTitle } from '~~/types/ApiTypes'
import type { MangaPublishingStatus } from '~~/types/Types'

type MangaPublishingStatusOption = {
    title: string;
    value: MangaPublishingStatus
}

type MangaOrderingOption = {
    title: string;
    value: keyof MangaTitle | `-${keyof MangaTitle}`;
}

const useSearch = () => useState<string>('search', () => '')
const useStatus = () => useState<MangaPublishingStatus | undefined>('status')
const usePage = () => useState<number>('page', () => 1)
const useOrdering = () => useState<string | undefined>('ordering')

export const useMangaListFilters = () => {
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

  return {
    statusOptions,
    orderingOptions,
    search,
    status,
    page,
    ordering,
  }
}
