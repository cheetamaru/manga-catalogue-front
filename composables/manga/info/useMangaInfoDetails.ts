import { MangaInfoDetailsItem } from '~~/types/Types'

export const useMangaInfoDetails = () => {
  const createDetailsItem = (
    title: MangaInfoDetailsItem['title'],
    value?: MangaInfoDetailsItem['value'] | null) => {
    return {
      title,
      value: value ?? 'unknown',
    }
  }

  return {
    createDetailsItem,
  }
}
