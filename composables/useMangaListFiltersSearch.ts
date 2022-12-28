import { debounceTime } from '~~/constants'

const useSearch = () => useState<string>('search', () => '')

export const useMangaListFiltersSearch = () => {
  const search = useSearch()

  const { updateDebounced } = useDebouncedEntity(search, debounceTime.search)

  const onUpdateSearch = (val: string) => {
    updateDebounced(val)
  }

  return {
    search,
    onUpdateSearch,
  }
}
