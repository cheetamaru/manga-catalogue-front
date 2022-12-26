import debounce from 'lodash.debounce'
import type { Ref } from 'vue'

export const useDebouncedLoading = (pending: Ref<boolean>) => {
  const loading = ref(false)

  const setLoading = (val: boolean) => {
    loading.value = val
  }

  const debouncedSetLoading = debounce(setLoading, 300)

  watch(pending, (val) => {
    if (!val) {
      debouncedSetLoading.cancel()
      setLoading(val)
      return
    }

    debouncedSetLoading(val)
  })

  return {
    loading,
  }
}
