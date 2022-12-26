import type { MangaPublishingStatus, MangaOrderingOptionValue } from '~~/types/Types'

type MangaPublishingStatusOption = {
    title: string;
    value: MangaPublishingStatus
}

type MangaOrderingOption = {
    title: string;
    value: MangaOrderingOptionValue;
}

export const useMangaListFiltersOptions = () => {
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

  return {
    statusOptions,
    orderingOptions,
  }
}
