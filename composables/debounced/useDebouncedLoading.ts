import type { Ref } from 'vue'
import { debounceTime } from '~~/constants'

export const useDebouncedLoading = (pending: Ref<boolean>) => {
  const loading = ref(false)

  const { updateDebounced } = useDebouncedEntity(loading, debounceTime.loading)

  watch(pending, (val) => {
    updateDebounced(val)
  })

  return {
    loading,
  }
}
