import { ComputedRef } from 'vue'

const deleteIconName = 'mdi-delete-sweep'
const filterIconClearedName = 'mdi-filter-menu-outline'
const filterIconFilledName = 'mdi-filter-menu'

export const useMangaListSearchIcons = (areSidebarFiltersEmpty: ComputedRef<boolean>) => {
  const appendInnerIcon = computed(() => {
    return areSidebarFiltersEmpty.value ? undefined : deleteIconName
  })

  const appendIcon = computed(() => {
    return areSidebarFiltersEmpty.value ? filterIconClearedName : filterIconFilledName
  })

  return {
    appendInnerIcon,
    appendIcon,
  }
}
