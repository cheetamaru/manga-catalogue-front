const useSidbar = () => useState<boolean>('sidebar', () => false)

export const useMangaListSidebar = () => {
  const sidebar = useSidbar()

  const toggleSidebar = () => {
    sidebar.value = !sidebar.value
  }

  return {
    sidebar,
    toggleSidebar,
  }
}
