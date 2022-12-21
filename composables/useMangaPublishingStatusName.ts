import type { MangaPublishingStatus } from '~~/types/Types'

export const useMangaPublishingStatusName = () => {
  const nameMapper: Record<MangaPublishingStatus, string> = {
    finished: 'Finished',
    ongoing: 'Ongoing',
    hiatus: 'On hiatus',
    canceled: 'Canceled',
    notstarted: 'Not started',
  }

  const getStatusNameByValue = (val: MangaPublishingStatus) => {
    return nameMapper[val]
  }

  return {
    getStatusNameByValue,
  }
}
