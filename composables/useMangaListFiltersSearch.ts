const useSearch = () => useState<string>('search', () => '')

export const useMangaListFiltersSearch = () => {
  const search = useSearch()

  const { updateDebounced } = useDebouncedEntity(search, 200)

  const onUpdateSearch = (val: string) => {
    updateDebounced(val)
  }

  return {
    search,
    onUpdateSearch,
  }
}
