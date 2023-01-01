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
  const { t } = useI18n()
  const { getStatusNameByValue } = useMangaPublishingStatusName()

  const availableStatuses: MangaPublishingStatus[] = [
    'finished',
    'ongoing',
    'hiatus',
    'canceled',
    'notstarted',
  ]

  const statusOptions = computed<MangaPublishingStatusOption[]>(() => availableStatuses.map((el) => {
    return {
      title: getStatusNameByValue(el),
      value: el,
    }
  }))

  const orderingOptions = computed<MangaOrderingOption[]>(() => {
    return [
      {
        title: t('mangaList.ordering.startDateAsc'),
        value: 'startDate',
      },
      {
        title: t('mangaList.ordering.startDateDesc'),
        value: '-startDate',
      },
      {
        title: t('mangaList.ordering.endDateAsc'),
        value: 'endDate',
      },
      {
        title: t('mangaList.ordering.endDateDesc'),
        value: '-endDate',
      },
    ]
  })

  return {
    statusOptions,
    orderingOptions,
  }
}
