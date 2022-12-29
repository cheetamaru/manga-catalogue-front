import { ComputedRef } from 'vue'

export const useMangaListSearchIcons = (areSidebarFiltersEmpty: ComputedRef<boolean>) => {
  const appendInnerIcon = computed(() => {
    return areSidebarFiltersEmpty.value ? undefined : 'mdi-delete-sweep'
  })

  const appendIcon = computed(() => {
    return areSidebarFiltersEmpty.value ? 'mdi-filter-menu-outline' : 'mdi-filter-menu'
  })

  return {
    appendInnerIcon,
    appendIcon,
  }
}
