import { MangaInfoDetailsItem } from '~~/types/Types'

export const useMangaInfoDetails = () => {
  const { t } = useI18n()

  const createDetailsItem = (
    title: MangaInfoDetailsItem['title'],
    value?: MangaInfoDetailsItem['value'] | null) => {
    return {
      title,
      value: value ?? t('global.label.unknown'),
    }
  }

  return {
    createDetailsItem,
  }
}
