import type { MangaPublishingStatus } from '~~/types/Types'

export const useMangaPublishingStatusName = () => {
  const { t } = useI18n()

  const nameMapper: Record<MangaPublishingStatus, string> = {
    finished: 'mangaInfo.status.finished',
    ongoing: 'mangaInfo.status.ongoing',
    hiatus: 'mangaInfo.status.hiatus',
    canceled: 'mangaInfo.status.canceled',
    notstarted: 'mangaInfo.status.notstarted',
  }

  const getStatusNameByValue = (val: MangaPublishingStatus) => {
    return t(nameMapper[val])
  }

  return {
    getStatusNameByValue,
  }
}
