import type { Ref } from 'vue'

export const useDebouncedLoading = (pending: Ref<boolean>) => {
  const loading = ref(false)

  const { updateDebounced } = useDebouncedEntity(loading)

  watch(pending, (val) => {
    updateDebounced(val)
  })

  return {
    loading,
  }
}
